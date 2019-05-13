import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import { Progress } from "@danacita/mentari";

type Props = {
  size: number;
  percent: number;
  text: number;
};

export class DCProgressBar extends React.Component<Props> {
  static defaultProps: Props = {
    size: 40,
    percent: 25,
    text: 4
  };

  static propertyControls: PropertyControls<Props> = {
    size: { type: ControlType.Number, title: "Size" },
    text: { type: ControlType.String, title: "Text" },
    percent: {
      type: ControlType.Number,
      title: "Percent",
      min: 0,
      max: 100
    }
  };

  render() {
    return (
      <Progress
        size={this.props.size}
        percent={this.props.percent}
        text={this.props.text}
        style={{ fontFamily: "proxima-nova,serif", fontSize: "16px" }}
      />
    );
  }
}
