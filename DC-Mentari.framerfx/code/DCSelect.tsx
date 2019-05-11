import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import styled, { css } from "styled-components";

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

interface Props {
  enabled: boolean;
  leftLabel: string;
  rightLabel: string;
}

interface States {
  enabled: boolean;
}

const Select = styled.div`
  font-family: proxima-nova, serif;
  font-size: 16px;
  color: #6f6f6f;
  letter-spacing: -0.4px;
  line-height: 1.3;
  text-align: center;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 4px;
  text-align: center;
  position: relative;
  cursor: pointer;
`;

const LeftLabel = styled.div`
  user-select: none;
  z-index: 100;
  ${props =>
    props.enabled
      ? css`
          font-weight: 600;
          color: #4587ef;
        `
      : css`
          font-weight: 400;
        `};
`;
const RightLabel = styled.div`
  cursor: pointer;
  user-select: none;
  z-index: 100;
  ${props =>
    props.enabled
      ? css`
          font-weight: 400;
        `
      : css`
          font-weight: 600;
          color: #4587ef;
        `};
`;

const Selector = styled.div`
  position: absolute;
  border: 1px solid #4587ef;
  border-radius: 4px;
  width: calc(50% + 2px);
  height: calc(100% + 2px);
  margin-top: -1px;
  margin-left: -1px;
  background-color: white;
  left: ${props => (props.enabled ? "0" : "50%")};
  transition: 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.14);
`;

export class DCSelect extends React.Component<Partial<Props>, States> {
  static defaultProps: Props = {
    enabled: false,
    leftLabel: "Select 1",
    rightLabel: "Select 2"
  };

  static propertyControls: PropertyControls<Props> = {
    enabled: { type: ControlType.Boolean, title: "Enabled" },
    leftLabel: { type: ControlType.String, title: "Left Label" },
    rightLabel: { type: ControlType.String, title: "Right Label" }
  };

  state = {
    enabled: this.props.enabled
  };

  componentWillReceiveProps(props: Props) {
    if (props.enabled != this.props.enabled) {
      this.setState({ enabled: props.enabled });
    }
  }

  handleClick = () => {
    this.setState({ enabled: !this.state.enabled });
  };

  render() {
    return (
      <Select onClick={this.handleClick}>
        <LeftLabel enabled={this.props.enabled}>
          {this.props.leftLabel}
        </LeftLabel>
        <RightLabel enabled={this.props.enabled}>
          {this.props.rightLabel}
        </RightLabel>
        <Selector enabled={this.props.enabled} />
      </Select>
    );
  }
}
