<?php

 /**
   * Handle form submissions (from all forms)
   */

/**
 * Register form handler
 */
add_action('admin_post_do-form', 'do_form');
add_action('admin_post_nopriv_do-form', 'do_form');

/** 
 * utility function to find Russian language messages, 
 * which are invariably spam
 */
function isRussian($text) {
    return preg_match('/[А-Яа-яЁё]/u', $text);
}

/**
 * Form handler
 */
function do_form () {

	

	// if marker exists in $_POST, then we need to de-escape it 
	if( isset($_POST['marker']) ) {
		$_POST['marker'] = json_decode(stripslashes($_POST['marker']));
	}

		// only check captcha if the form has a captcha
	if( isset($_POST['captcha']) && $_POST['captcha'] == 'true' ) {
		$captcha = new PeakForms_Captcha();

	$errors = array();
	if( $errors = $captcha->validate_captcha( $errors, $_POST ) ) {

			$errorURL = isset($_POST['errorURL']) ? $_POST['errorURL'] : '';
			wp_redirect( $errorURL || '/' );
			exit;
		}
	}
	

	// add hook for user customization
	$_POST = apply_filters( 'pz_pre_form_processing', $_POST );

	$_POST = wp_unslash( $_POST ); // wordpress escapes form input, sigh... so we remove the slashes
	extract( $_POST, EXTR_OVERWRITE ); // let's break the form input into separate variables

	// let's get the encryption key and email from the database
    $options = get_option('peakforms_option_name');
    $encryption_key = isset($options['peakforms_key']) ? $options['peakforms_key'] : '';
    $email = isset($options['peakforms_email']) ? $options['peakforms_email'] : '';

	// Get rid of the g-recaptcha-response field
	unset($_POST['g-recaptcha-response']);
	
	// if the phpFunctionName is set, and it's not empty, 
	// then we need to evaluate the function

	if( isset($_POST['phpFunctionName']) && $_POST['phpFunctionName'] != '' ) {
		// find the post in the database where the post title matches $phpFunctionName

		// Or get_posts method
		$posts = get_posts(array(
			'post_type' => 'peakfunctions',
			'numberposts' => -1,
			'post_status' => 'publish',
			'title' => $_POST['phpFunctionName']		
		));

		// if there are no posts, return an error
		if( empty($posts) ) {
			wp_redirect( $errorURL || '/' );
			exit;
		} else {
			// evaluate the function
			eval( $posts[0]->post_content );
		}
	}

	// send an email if the form included a send-to address
	if( isset($email) && $email != '' ) {
		$message = json_encode( $_POST );
		$subject = "Form data from " . $_POST['formName'];
		wp_mail( $email, $subject, $message );
	}

	hook_and_redirect( 0, $_POST['successURL'] );

	}  

/**
 * utility function that gives the user ability to hook just after data written 
 * and then to filter the redirect URL before redirecting
 */
function hook_and_redirect( $id, $url ) {
	if( $id != 0 ) {
		// add hook for user customization

		do_action( 'pz_data_written', $id );
	}
	

	$redirectURL = apply_filters( 'pz_filter_redirectURL', $url );
	if( isset( $redirectURL ) && $redirectURL != '' ) {
		wp_redirect( $redirectURL );
		exit;
	} else if (isset($url)) {
		wp_redirect( $url);
		exit;
	} else {
		wp_redirect( '/'  );
		exit;
	}

}

/**
 * Add settings link to plugin listing
 */
function peakforms_plugin_action_links($links) {
    $settings_link = '<a href="' . admin_url('options-general.php?page=peakforms-settings') . '">Settings</a>';
    array_unshift($links, $settings_link);
    return $links;
}
add_filter('plugin_action_links_pzforms/pzforms.php', 'peakforms_plugin_action_links');

/**
 * Add additional information to plugin listing
 */
function peakforms_plugin_row_meta($links, $file) {
    if ('pzforms/pzforms.php' === $file) {
        $row_meta = array(
            'custom_text' => '<span style="color: #555;">Get started by clicking the settings link!</span>'
        );
        return array_merge($links, $row_meta);
    }
    return $links;
}
add_filter('plugin_row_meta', 'peakforms_plugin_row_meta', 10, 2);

