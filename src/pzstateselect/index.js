/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from "@wordpress/blocks";

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
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				width="800px"
				height="800px"
				viewBox="0 0 260 165"
				enableBackground="new 0 0 260 165"
				stroke="currentColor"
			>
				<g id="SVGRepo_bgCarrier" strokeWidth="0" />
				<g
					id="SVGRepo_tracerCarrier"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<g id="SVGRepo_iconCarrier">
					<path
						fill="currentColor"
						d="M258,23.765l-5.217-3.73l-2.621-7.979l-6.633-0.567l-1.653,11.521l-2.101,3.329l-1.298,2.219l-7.767,2.124l-6.445,1.535 l-5.194,6.728l1.464,3.116l-10.883,6.894l-3.329,4.225l-3.116,2.314l-8.428,5.005l-4.651-1.417l3.589-8.475l-5.312-7.389 l-1.558-6.185l-3.966-2.125l-6.799,6.209l-1.393,5.312l2.054,6.704l-2.03,7.625l-3.093,0.496l-1.723-4.533l-0.874-4.697l1.676-9.656 l-1.345-1.723l2.101-5.194l12.701-1.818l-4.58-4.532l-9.963,2.762l-4.886-3.353l-8.169,3.919l-7.294-0.732l2.502-7.979l-5.17-2.88 l-4.58,0.26l-5.902-2.857l-8.38-0.023l-27.928-1.417l-34.491-4.698l-14.07-2.88l-3.942-0.897L24.687,2.235l-1.605,5.052 l-7.744-2.644l-0.189,12.512l2.715,1.228l-4.084,2.738L5.919,36.136l-0.142,5.406L2,50.347l0.236,9.868l7.649,30.784l8.853,4.958 l4.107,5.477l0.803,5.265l12.441,1.628l-0.779,1.181l18.367,10.788l10.246,1.606l4.721-2.149l8.924,1.181l7.176,7.554l1.96,6.445 l7.106,4.863l2.88-4.485l6.893,0.236l9.703,14.188l2.101,7.342l9.962,2.03l-1.274-5.571l3.021-6.374l7.838-4.462l9.655-7.72 l8.31,2.526l2.243-1.935l5.43,4.06l6.043-1.983l0.874-5.028l5.902-1.677l5.193-1.038l7.342,0.33l6.351,3.589l4.674-3.683 l8.522,6.515l-0.094,6.729l5.288,7.932l10.08,5.807l0.567-11.048l-4.061-8.782l-7.483-12.819l1.865-8.546l7.531-8.522l2.266-4.816 l11.638-14.637l-2.455-3.966l0.071-0.024l0.236-0.047l0.425-0.094l0.118-0.024l-3.99-3.588l0.307-4.084l-1.354-1.354l4.116,0.339 l1.204-0.591l0.756-2.927l0.142-0.023l0.047-0.024l-3.636-7.649l1.558-1.676l4.604,0.685l-0.945-7.72l1.181-0.354l7.554-3.943 l2.078-3.092l0.236,0.141l0.59,0.874l2.101-2.526l-3.022-5.926l-0.047-1.298l3.99-5.973L258,23.765z M35.9,132.856l-2.856,1.015 l-6.964,3.305l-3.565,5.335l0.921,7.153l-2.999,5.572l7.98,7.53l20.373-2.549l-0.755-22.239L35.9,132.856z"
					/>
				</g>
			</svg>
		),
		foreground: "#0693e3",
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
