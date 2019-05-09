import { Override, Data } from "framer";

// Override Docs: https://framer.com/docs/overrides

export const data = Data({
  value: 2000000
});

let result1 = 0;
let result2 = 0;

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
    text: "Rp" + numberWithCommas(result2) + " - Rp" + numberWithCommas(result1)
  };
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
