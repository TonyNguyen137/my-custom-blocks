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
import apiFetch from "@wordpress/api-fetch";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";

import { Button, PanelBody, PanelRow } from "@wordpress/components";

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
	useEffect(
		function () {
			async function go() {
				const response = await apiFetch({
					path: `/wp/v2/media/${attributes.imgID}`,
					method: "GET",
				});

				setAttributes({
					imgUrl: response.media_details.sizes.thumbnail.source_url,
				});
			}
			go();
		},
		[attributes.imgID],
	);

	function onFileSelect(x) {
		console.log("x: ", x);
		setAttributes({
			imgID: x.id,
		});
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title="Background" initialOpen={true}>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onFileSelect}
							value={attributes.imgID}
							render={({ open }) => {
								return (
									<div
										style={{
											display: "flex",
											gap: "8px",
											alignItems: "center",
										}}
									>
										<img width="48" src={attributes.imgUrl} alt="" />

										<Button
											style={{ outline: "1px dashed black" }}
											onClick={open}
										>
											Choose Image
										</Button>
									</div>
								);
							}}
						/>
					</MediaUploadCheck>
				</PanelBody>
			</InspectorControls>
			<section {...useBlockProps()}>
				<div className="hero">
					<img src={attributes.imgUrl} alt="" />
					<div className="container">
						<InnerBlocks
							allowedBlocks={["core/paragraph", "core/heading", "core/quote"]}
						/>
					</div>
				</div>
			</section>
		</>
	);
}
