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
  size: string;
  onClick: () => void;
};

export class DCButton extends React.Component<Props> {
  render() {
    return (
      <Button
        onClick={this.props.onClick}
        color="blue"
        outline={this.props.outline}
        loading={this.props.loading}
        disabled={this.props.disabled}
        block={!this.props.block}
        size={this.props.size}
        style={{ fontFamily: "proxima-nova,serif", fontSize: "16px" }}
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
    block: false,
    size: "Normal",
    onClick: () => {}
  };

  static propertyControls: PropertyControls<Props> = {
    text: { type: ControlType.String, title: "Text" },
    outline: { type: ControlType.Boolean, title: "Secondary" },
    loading: { type: ControlType.Boolean, title: "isLoading" },
    disabled: { type: ControlType.Boolean, title: "Disabled" },
    block: { type: ControlType.Boolean, title: "Auto Size" },
    size: { type: ControlType.String, title: "Size" }
  };
}
