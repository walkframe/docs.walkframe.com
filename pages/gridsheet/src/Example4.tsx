import * as React from "react";
import { makeAsync, sorters, criteria } from "covertable";
import {
  GridSheet,
  MatrixType,
  matrixIntoCells,
} from "@gridsheet/react-core";
import "./App.css";

const pivot = (matrix: any[][]): any[][] => {
  const numRows = matrix.length;
  const numCols = matrix[0]?.length || 10;
  const result = [...Array(numCols).map(() => "")].map(() => [
    ...Array(numRows).map(() => "")
  ]);
  matrix.map((cols, i) => {
    cols.map((col, j) => {
      result[j][i] = col;
    });
  });
  return result;
};

const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

export default function App() {
  const [processing, setProcessing] = React.useState(false);
  const [initialData] = React.useState<MatrixType>([
    [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p"
    ],
    [
      "a2",
      "b2",
      "c2",
      "d2",
      "e2",
      "f2",
      "g2",
      "h2",
      "i2",
      "j2",
      "k2",
      "l2",
      "m2",
      "n2",
      "o2",
      "p2"
    ],
    [
      "a3",
      "b3",
      "c3",
      "d3",
      "e3",
      "f3",
      "g3",
      "h3",
      "i3",
      "j3",
      "k3",
      "l3",
      "m3",
      "n3",
      "o3",
      "p3"
    ],
    [
      "a4",
      "b4",
      "c4",
      "d4",
      "e4",
      "f4",
      "g4",
      "h4",
      "i4",
      "j4",
      "k4",
      "l4",
      "m4",
      "n4",
      "o4",
      "p4"
    ],
    [
      "a5",
      "b5",
      "c5",
      "d5",
      "e5",
      "f5",
      "g5",
      "h5",
      "i5",
      "j5",
      "k5",
      "l5",
      "m5",
      "n5",
      "o5",
      "p5"
    ],
    [
      "a6",
      "b6",
      "c6",
      "d6",
      "e6",
      "f6",
      "g6",
      "h6",
      "i6",
      "j6",
      "k6",
      "l6",
      "m6",
      "n6",
      "o6",
      "p6"
    ],
    [
      "a7",
      "b7",
      "c7",
      "d7",
      "e7",
      "f7",
      "g7",
      "h7",
      "i7",
      "j7",
      "k7",
      "l7",
      "m7",
      "n7",
      "o7",
      "p7"
    ],
    [
      "a8",
      "b8",
      "c8",
      "d8",
      "e8",
      "f8",
      "g8",
      "h8",
      "i8",
      "j8",
      "k8",
      "l8",
      "m8",
      "n8",
      "o8",
      "p8"
    ],
    [
      "a9",
      "b9",
      "c9",
      "d9",
      "e9",
      "f9",
      "g9",
      "h9",
      "i9",
      "j9",
      "k9",
      "l9",
      "m9",
      "n9",
      "o9",
      "p9"
    ],
    [
      "a10",
      "b10",
      "c10",
      "d10",
      "e10",
      "f10",
      "g10",
      "h10",
      "i10",
      "j10",
      "k10",
      "l10",
      "m10",
      "n10",
      "o10",
      "p10"
    ],
    [
      "a11",
      "b11",
      "c11",
      "d11",
      "e11",
      "f11",
      "g11",
      "h11",
      "i11",
      "j11",
      "k11",
      "l11",
      "m11",
      "n11",
      "o11",
      "p11"
    ]
  ]);
  const [input, setInput] = React.useState<any[][]>([]);
  const [result, setResult] = React.useState<any[][]>([]);
  return (
    <div className="example-app">
      <h1>
        Pairwase test with{" "}
        <a href="https://github.com/walkframe/covertable" target="_blank">
          covertable
        </a>
      </h1>

      <GridSheet
        cells={matrixIntoCells(initialData, {})}
      />

      <button
        style={{ padding: "10px 20px", margin: "20px 0", fontSize: 20 }}
        disabled={processing}
        onClick={() => {
          setProcessing(true);
          const rows: MatrixType = [];
          const rowsAsync = makeAsync(input, {
            sorter: sorters.random,
            criterion: criteria.greedy,

            preFilter: (row) =>
              !(
                (row[0] !== "a" && row[1] === "b" && row[2] === "c" && row[3] === "d")
                // other condition
              )
          });
          let result = rowsAsync.next();
          (async () => {
            for (let i = 0; !result.done; i++) {
              rows.push(result.value as any[]);
              result = rowsAsync.next();
              if (i % 5 === 0) {
                setResult([...rows]);
                await sleep(0.1);
              }
            }
            setProcessing(false);
          })();
        }}
      >
        {processing ? "Processing..." : "Make combinations!"}
      </button>

      <GridSheet cells={matrixIntoCells(result, {})} />
    </div>
  );
}
