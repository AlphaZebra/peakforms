/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

import { useState } from "@wordpress/element"; // WordPress React wrapper
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  SelectControl,
  CheckboxControl,
  DatePicker,
} from "@wordpress/components";
import { __experimentalBoxControl as BoxControl } from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { backgroundColor } = attributes;
  const [values, setValues] = useState({
    top: "50px",
    left: "10%",
    right: "10%",
    bottom: "50px",
  });

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title="Datepicker Settings" initialOpen={true}>
          <TextControl
            label="Prompt"
            value={attributes.prompt}
            onChange={(value) => setAttributes({ prompt: value })}
          />
          <TextControl
            label="Unique field id"
            value={attributes.datepicker_id}
            onChange={(value) => setAttributes({ datepicker_id: value })}
          />
          <TextControl
            label="Unique field name"
            value={attributes.datepicker_name}
            onChange={(value) => setAttributes({ datepicker_name: value })}
            help="Unique to this page. No spaces. This is the name of the field in the form data when email is sent."
          />
        </PanelBody>
        <PanelBody title="Margin" initialOpen={true}>
          <BoxControl
            label="Margin"
            values={attributes.marginValues}
            onChange={(value) => {
              const originals = attributes.marginValues;
              setAttributes({ marginValues: value });
            }}
          />
        </PanelBody>
      </InspectorControls>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label htmlFor={attributes.datepicker_id}>{attributes.prompt}</label>
        <input
          type="date"
          id={attributes.datepicker_id}
          name={attributes.datepicker_name}
        />
      </div>
    </div>
  );
}
