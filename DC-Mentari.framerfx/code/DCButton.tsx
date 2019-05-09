import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import { Button } from "@danacita/mentari";

// Button
// Dana Cita Button with Property Controls

type Props = {
  text: string;
  outline: boolean;
  loading: boolean;
  disabled: boolean;
  block: boolean;
};

export class DCButton extends React.Component<Props> {
  render() {
    return (
      <Button
        color="blue"
        outline={this.props.outline}
        loading={this.props.loading}
        disabled={this.props.disabled}
        block={!this.props.block}
      >
        {this.props.text}
      </Button>
    );
  }

  static defaultProps: Props = {
    text: "Button Label",
    outline: false,
    loading: false,
    disabled: false,
    block: false
  };

  static propertyControls: PropertyControls<Props> = {
    text: { type: ControlType.String, title: "Text" },
    outline: { type: ControlType.Boolean, title: "Secondary" },
    loading: { type: ControlType.Boolean, title: "isLoading" },
    disabled: { type: ControlType.Boolean, title: "Disabled" },
    block: { type: ControlType.Boolean, title: "Auto Size" }
  };
}
