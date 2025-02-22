/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from "@wordpress/blocks";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

registerBlockType(metadata.name, {
	icon: {
		src: (
			<svg
				fill="#0693e3"
				width="800px"
				height="800px"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				stroke="#0693e3"
			>
				<g id="SVGRepo_bgCarrier" stroke-width="0" />

				<g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>

				<g id="SVGRepo_iconCarrier">
					{" "}
					<path d="M9.29289322,7 L7.14644661,4.85355339 C6.95118446,4.65829124 6.95118446,4.34170876 7.14644661,4.14644661 C7.34170876,3.95118446 7.65829124,3.95118446 7.85355339,4.14644661 L10.8535534,7.14644661 C11.0488155,7.34170876 11.0488155,7.65829124 10.8535534,7.85355339 L7.85355339,10.8535534 C7.65829124,11.0488155 7.34170876,11.0488155 7.14644661,10.8535534 C6.95118446,10.6582912 6.95118446,10.3417088 7.14644661,10.1464466 L9.29289322,8 L5.5,8 C4.67157288,8 4,8.67157288 4,9.5 L4,15.5 C4,16.3284271 4.67157288,17 5.5,17 L10.5,17 C10.7761424,17 11,17.2238576 11,17.5 C11,17.7761424 10.7761424,18 10.5,18 L5.5,18 C4.11928813,18 3,16.8807119 3,15.5 L3,9.5 C3,8.11928813 4.11928813,7 5.5,7 L9.29289322,7 Z M13.5,8 C13.2238576,8 13,7.77614237 13,7.5 C13,7.22385763 13.2238576,7 13.5,7 L20.5,7 C20.7761424,7 21,7.22385763 21,7.5 C21,7.77614237 20.7761424,8 20.5,8 L13.5,8 Z M13.5,13 C13.2238576,13 13,12.7761424 13,12.5 C13,12.2238576 13.2238576,12 13.5,12 L20.5,12 C20.7761424,12 21,12.2238576 21,12.5 C21,12.7761424 20.7761424,13 20.5,13 L13.5,13 Z M13.5,18 C13.2238576,18 13,17.7761424 13,17.5 C13,17.2238576 13.2238576,17 13.5,17 L20.5,17 C20.7761424,17 21,17.2238576 21,17.5 C21,17.7761424 20.7761424,18 20.5,18 L13.5,18 Z" />{" "}
				</g>
			</svg>
		),
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save: save,
});
