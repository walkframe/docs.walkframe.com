import * as React from "react";
import { GridSheet, constructInitialCells, createTableRef } from "@gridsheet/react-core";

export default function App() {
  const tableRef = createTableRef();

  React.useEffect(() => {
    const id = setInterval(() => {
      const [x, y, z] = [
        (Math.trunc(Math.random() * 10) % 5) + 1,
        (Math.trunc(Math.random() * 10) % 5) + 1,
        Math.trunc(Math.random() * 100),
      ];
      if (tableRef.current) {
        const { dispatch, table } = tableRef.current;
        dispatch(table.write({ point: { y, x }, value: String(z) }));
      }
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="example-app">
      <h2>See console log</h2>
      <GridSheet
        tableRef={tableRef}
        initialCells={constructInitialCells({
          matrices: {
            A1: [
              [undefined, 2, 3, 4, 5],
              [undefined, undefined, 8, 9, 10],
              [undefined, undefined, undefined, 14, 15],
              [undefined, undefined, undefined, undefined, 20],
              [undefined, undefined, undefined, undefined, undefined],
            ],
          },
          cells: {
            default: {
              style: { fontWeight: "bold" },
            },
            1: {
              style: { color: "red" },
            },
            2: {
              style: { color: "green" },
            },
            3: {
              style: { color: "blue" },
            },
            4: {
              style: { color: "orange" },
            },
            5: {
              style: { color: "purple" },
            },
            A: {
              value: 1,
              style: { backgroundColor: "#ff000050" },
            },
            B: {
              value: 2,
              style: { backgroundColor: "#00ff0050" },
            },
            C: {
              value: 3,
              style: { backgroundColor: "#0000ff50" },
            },
            D: {
              value: 4,
              style: { backgroundColor: "#ffff0050" },
            },
            E: {
              value: 5,
              style: { backgroundColor: "#ff00ff50" },
            },
          },
        })}
        options={{
          sheetWidth: 500,
          sheetHeight: 200,
          historyLimit: 200,
          onChange: (table) => {
            console.log(
              "written",
              table.getObjectFlatten({
                filter: (cell) =>
                  !!cell?.changedAt && cell.changedAt > table.lastChangedAt!,
              })
            );
          },
        }}
      />
    </div>
  );
}
