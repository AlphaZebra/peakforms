/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const thisURL = window.location.href;
	const url = new URL(thisURL);
	const adminPath = url.protocol + "//" + url.host + "/wp-admin/admin-post.php";

	if (attributes.required == true) {
		return (
			<div {...useBlockProps.save()} className="form-style-1">
				<p className="pz-question-text">{attributes.question}</p>

				{attributes.answers.map(function (answer, index) {
					return (
						<div>
							<input
								type="checkbox"
								id={answer}
								name={attributes.slug + "[]"}
								value={answer}
								required="required"
							/>
							<label className="pz-answer-text" for={answer}>
								{answer}
							</label>
							<br></br>
						</div>
					);
				})}
			</div>
		);
	}

	// else

	return (
		<div {...useBlockProps.save()} className="form-style-1">
			<p className="pz-question-text">{attributes.question}</p>

			{attributes.answers.map(function (answer, index) {
				return (
					<div>
						<input
							type="checkbox"
							id={answer}
							name={attributes.slug + "[]"}
							value={answer}
						/>
						<label className="pz-answer-text" for={answer}>
							{answer}
						</label>
						<br></br>
					</div>
				);
			})}
		</div>
	);
}
