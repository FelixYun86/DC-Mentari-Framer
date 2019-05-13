import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import { Avatar } from "@danacita/mentari";

interface Props {
  firstName: string;
  lastName: string;
}

export class DCAvatar extends React.Component<Props> {
  static defaultProps: Props = {
    firstName: "John",
    lastName: "Chuck"
  };

  static propertyControls: PropertyControls<Props> = {
    firstName: { type: ControlType.String, title: "First Name" },
    lastName: { type: ControlType.String, title: "Last Name" }
  };

  render() {
    const profile = {
      firstName: this.props.firstName,
      lastName: this.props.lastName
    };
    return (
      <Avatar
        profile={profile}
        style={{ fontFamily: "proxima-nova,serif", fontSize: "16px" }}
      />
    );
  }
}
