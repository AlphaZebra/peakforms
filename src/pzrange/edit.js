import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  CheckboxControl,
  RangeControl,
  __experimentalNumberControl as NumberControl,
} from "@wordpress/components";
import { __experimentalBoxControl as BoxControl } from "@wordpress/components";

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { marginValues, paddingValues } = attributes;

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title="Config">
          <TextControl
            label="Prompt displayed with field"
            value={attributes.prompt}
            onChange={(value) => setAttributes({ prompt: value })}
          />
          <TextControl
            label="Field variable name"
            help="Unique to this page. No spaces. This is the name of the field in the form data when email is sent."
            value={
              attributes.range_name
                ? attributes.range_name
                : attributes.range_id
            }
            onChange={(value) =>
              setAttributes({ range_name: value, range_id: value })
            }
          />
          <NumberControl
            label="Minimum Value"
            value={attributes.min}
            onChange={(value) => setAttributes({ min: Number(value) })}
          />
          <NumberControl
            label="Maximum Value"
            value={attributes.max}
            onChange={(value) => setAttributes({ max: Number(value) })}
          />
          <NumberControl
            label="Default Value"
            value={attributes.defaultValue}
            onChange={(value) => setAttributes({ defaultValue: Number(value) })}
          />
          <TextControl
            label="Width"
            help="May be a percentage or a number of pixels."
            value={attributes.width}
            onChange={(value) => setAttributes({ width: value })}
          />
          <CheckboxControl
            label="Required"
            checked={attributes.required}
            onChange={(value) => setAttributes({ required: value })}
          />
        </PanelBody>
        <PanelBody title="Spacing" initialOpen={false}>
          <BoxControl
            label="Margin"
            values={marginValues}
            onChange={(nextValues) =>
              setAttributes({ marginValues: nextValues })
            }
          />
          <BoxControl
            label="Padding"
            values={paddingValues}
            onChange={(nextValues) =>
              setAttributes({ paddingValues: nextValues })
            }
          />
        </PanelBody>
      </InspectorControls>
      <div
        style={{
          margin: marginValues
            ? `${marginValues.top} ${marginValues.right} ${marginValues.bottom} ${marginValues.left}`
            : undefined,
          padding: paddingValues
            ? `${paddingValues.top} ${paddingValues.right} ${paddingValues.bottom} ${paddingValues.left}`
            : undefined,
        }}
      >
        <label>{attributes.prompt}</label>
        <RangeControl
          value={attributes.defaultValue}
          onChange={(value) => setAttributes({ defaultValue: value })}
          min={attributes.min}
          max={attributes.max}
          style={{
            width: attributes.width,
          }}
        />
      </div>
    </div>
  );
}
