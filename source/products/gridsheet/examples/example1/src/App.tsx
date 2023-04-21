import * as React from "react";
import { GridSheet, generateInitial, BaseFunction } from "@gridsheet/react-core";
import "./index.css";

class HopeFunction extends BaseFunction {
  // @ts-ignore
  main(text: string) {
    return `😸${text}😸`;
  }
}

export default function App() {
  return (
    <div className="App">
      <GridSheet
        initial={generateInitial({
          matrices: {
            A1: [
              [0, "=A1+60", "=B1+10", "=C1+10", "=D1+10", "=E1+5"],
              ["E", "D", "C", "B", "A", "S"],
            ],
            A4: [
              ["Name", "Point", "Rank"],
              ["apple", 50, "=HLOOKUP(B5, $A$1:$F$2, 2, true)"],
              ["orange", 82, "=HLOOKUP(B6, $A$1:$F$2, 2, true)"],
              ["grape", 75, "=HLOOKUP(B7, $A$1:$F$2, 2, true)"],
              ["melon", 98, "=HLOOKUP(B8, $A$1:$F$2, 2, true)"],
              ["banana", 65, "=HLOOKUP(B9, $A$1:$F$2, 2, true)"],
            ],
            F4: [
              ["NOW:", "=NOW()"],
              ["", '=HOPE("World peace") & "!!"'],
            ],
            G7: [
              ["Greater than", 70],
              ['\'=countif(B5:B9, ">" & H7)', '=countif(B5:B9, ">" & H7)'],
            ],
          },
          cells: {
            1: { style: { backgroundColor: "#ddd" } },
            2: { style: {} },
            3: { style: {} },
            A: { width: 70 },
            B: { width: 50 },
            C: { width: 50 },
            D: { width: 50 },
            E: { width: 50 },
            F: { width: 50 },
            G: { width: 200 },
            H7: { style: { backgroundColor: "#ffeeee" } },
            A4: {
              style: { backgroundColor: "#dddddd" },
            },
            B4: {
              style: { backgroundColor: "#dddddd" },
            },
            C4: {
              style: { backgroundColor: "#dddddd" },
            },
          },
        })}
        additionalFunctions={{
          hope: HopeFunction,
        }}
      />
    </div>
  );
}
