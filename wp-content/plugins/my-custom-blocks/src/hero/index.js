/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";

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
import metadata from "./block.json";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	save: (props) => {
		return <InnerBlocks.Content />;
	},
	icon: {
		src: (
			<svg
				width="24"
				height="20"
				viewBox="0 0 24 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clip-path="url(#clip0_202_7)">
					<path
						d="M5.66667 2L1 7.23077L12.3333 19L23 7.23077L17.6667 2H5.66667Z"
						fill="#F7E92B"
						stroke="#FF0707"
					/>
					<path
						d="M16.1 12.636V13H12.538V12.636L13.253 12.545C13.3917 12.5277 13.474 12.493 13.5 12.441C13.526 12.3803 13.539 12.2027 13.539 11.908V8.762H10.12V11.908C10.12 12.2027 10.133 12.3803 10.159 12.441C10.185 12.493 10.2673 12.5277 10.406 12.545L11.121 12.636V13H7.559V12.636L8.274 12.545C8.41267 12.5277 8.495 12.493 8.521 12.441C8.547 12.3803 8.56 12.2027 8.56 11.908V5.252C8.56 4.95733 8.547 4.784 8.521 4.732C8.495 4.67133 8.41267 4.63233 8.274 4.615L7.559 4.524V4.16H11.121V4.524L10.406 4.615C10.2673 4.63233 10.185 4.67133 10.159 4.732C10.133 4.784 10.12 4.95733 10.12 5.252V8.307H13.539V5.252C13.539 4.95733 13.526 4.784 13.5 4.732C13.474 4.67133 13.3917 4.63233 13.253 4.615L12.538 4.524V4.16H16.1V4.524L15.385 4.615C15.2463 4.63233 15.164 4.67133 15.138 4.732C15.112 4.784 15.099 4.95733 15.099 5.252V11.908C15.099 12.2027 15.112 12.3803 15.138 12.441C15.164 12.493 15.2463 12.5277 15.385 12.545L16.1 12.636Z"
						fill="#FF0000"
					/>
				</g>
				<defs>
					<clipPath id="clip0_202_7">
						<rect width="24" height="20" fill="white" />
					</clipPath>
				</defs>
			</svg>
		),
	},
});
