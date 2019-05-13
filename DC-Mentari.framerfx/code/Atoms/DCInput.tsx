import * as React from "react";
import styled, { css } from "styled-components";
import { addPropertyControls, ControlType } from "framer";
import { Color } from "@danacita/mentari";

interface Props {
  value: string;
  label: string;
  showLabel: boolean;
  multiLine: boolean;
  password: boolean;
  onValueChange: (value: string) => void;
}

interface State {
  value: string;
  valuefromProps: string;
}

export class DCInput extends React.Component<Props> {
  static defaultProps = {
    value: "",
    label: "Label",
    multiLine: false,
    password: false,
    showLabel: true
  };

  state = {
    value: DCInput.defaultProps.value,
    valuefromProps: DCInput.defaultProps.value
  };

  static getDerivedStateFromProps(props: Props, state: State) {
    if (props.value !== state.valuefromProps) {
      return { value: props.value, valuefromProps: props.value };
    }
  }

  onChange = (event: React.ChangeEvent) => {
    const value = (event.nativeEvent.target as HTMLInputElement).value;
    this.setState({ value });

    if (this.props.onValueChange) {
      this.props.onValueChange(value);
    }
  };

  drawLabel = (label, showLabel) => {
    if (showLabel) {
      return <label htmlFor="Input1">{label}</label>;
    }
  };

  render() {
    const { value } = this.state;
    const { label, multiLine, password } = this.props;
    return (
      <InputWrapper valueLength={value.length}>
        <input
          id="Input1"
          value={value}
          onChange={this.onChange}
          type={password ? "password" : "text"}
        />
        {this.drawLabel(label, this.props.showLabel)}
      </InputWrapper>
    );
  }
}

const InputWrapper = styled.div`
  font-family: proxima-nova, serif;
  ${props =>
    props.valueLength > 0
      ? css`
          input {
            background-color: white;
            padding-top: 2px;
            + label {
              top: -8px;
              font-size: 12px;
              margin-left: 14px;
              font-weight: 600;
            }
          }
        `
      : css`
          input {
            background-color: white;
            + label {
              font-size: 16px;
              top: 12px;
            }
          }
        `};

  input {
    font-size: 16px;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    padding-left: 18px;
    color: ${Color.grey82};
    border: 1px solid ${Color.grey216};
    outline: none;
    position: absolute;

    transition: 0.2s cubic-bezier(0.2, 0.8, 0.3, 1.2);
    &::-webkit-input-placeholder {
      color: ${Color.grey132};
    }

    :focus {
      background-color: rgba(255, 255, 255, 1);
      border-color: ${Color.blue};
      color: ${Color.grey82};
      padding-top: 2px;
      &::-webkit-input-placeholder {
        opacity: 0;
      }

      + label {
        opacity: 1;
        color: ${Color.blue};
        top: -8px;
        margin-left: 14px;
        font-size: 12px;
        font-weight: 600;
      }
    }
  }

  label {
    position: relative;
    margin-left: 18px;
    padding: 0 6px;
    font-weight: 400;
    color: ${Color.grey132};
    background-color: white;

    transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
`;

addPropertyControls(DCInput, {
  value: { type: ControlType.String, title: "Value" },
  label: { type: ControlType.String, title: "Label" },
  showLabel: { type: ControlType.Boolean, title: "Show Label" },
  multiLine: { type: ControlType.Boolean, title: "Multiline" },
  password: { type: ControlType.Boolean, title: "Password" }
});

export default DCInput;
