import { Override, Data } from "framer";

// Override Docs: https://framer.com/docs/overrides

export const data = Data({
  value: 0
});

let result1 = 1000000;
let result2 = 1000000;

export function TextFieldValue(): Override {
  return {
    onValueChange: (value: number) => {
      data.value = value;
    }
  };
}
export function ApplyValue(): Override {
  result1 = Math.round(data.value * 0.15);
  result2 = Math.round(data.value * 0.1);
  return {
    text: "Rp" + result1 + " - Rp" + result2
  };
}
