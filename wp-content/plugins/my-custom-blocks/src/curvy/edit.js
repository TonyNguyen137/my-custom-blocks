/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import metadata from "./block.json";

import {
	useBlockProps,
	InspectorControls,
	getColorClassName,
} from "@wordpress/block-editor";
import {
	RangeControl,
	PanelBody,
	SelectControl,
	ToggleControl,
} from "@wordpress/components";

import { Curve } from "../components/curve";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	console.log("here: ", attributes);

	console.log(useBlockProps());

	const { backgroundColor } = attributes;

	const { className, ...blockProps } = useBlockProps();
	return (
		<>
			<section className={`${className} align-full`} {...blockProps}>
				{attributes.enableTopCurve && <Curve />}
			</section>

			<InspectorControls>
				<PanelBody title={__("Top curve", metadata.textdomain)}>
					<div style={{ display: "flex" }}>
						<ToggleControl
							onChange={(isChecked) => {
								console.log("isChcked", isChecked);

								setAttributes({
									enableTopCurve: isChecked,
								});
							}}
							checked={attributes.enableTopCurve}
						/>
						<span>{__("Enble top curve", metadata.textdomain)}</span>
					</div>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
