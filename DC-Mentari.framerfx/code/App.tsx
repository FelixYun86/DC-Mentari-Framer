import * as React from "react";
import { Override, Data } from "framer";

// Override Docs: https://framer.com/docs/overrides

export const data = Data({
  value: 2000000,
  tenorvalue: 12
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

export function TapLog(): Override {
  return {
    onClick: () => {
      if (data.tenorvalue === 12) {
        data.tenorvalue = 24;
      } else {
        data.tenorvalue = 12;
      }
    }
  };
}

export function ApplyValue(): Override {
  result1 = Math.round(
    data.value / data.tenorvalue + (data.value / data.tenorvalue) * 0.0175
  );
  result2 = Math.round(
    data.value / data.tenorvalue + (data.value / data.tenorvalue) * 0.01
  );
  return {
    text: "Rp" + numberWithCommas(result2) + " - Rp" + numberWithCommas(result1)
  };
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
