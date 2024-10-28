import * as React from "react";
import { GridSheet, constructInitialCells, createTableRef } from "@gridsheet/react-core";
import { HistoryType } from "@gridsheet/react-core/dist/types";

export default function App() {
  const [diff, setDiff] = React.useState<Record<string, any>>({});
  const [histories, setHistories] = React.useState<HistoryType[]>([]);
  const tableRef = createTableRef();
  const table = tableRef.current?.table;

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
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="example-app" style={{ display: "flex" }}>
      <div style={{ width: '300px' }}>
        Randomly written every 3 seconds
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
                width: 50,
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
              setDiff(
                table.getObjectFlatten({
                  filter: (cell) =>
                    !!cell?.changedAt &&
                    cell.changedAt > table.lastChangedAt!,
                })
              );
              const histories = table.getHistories();
              setHistories(histories);
              const h = histories[histories.length - 1];
              if (h?.operation === "UPDATE") {
                console.log(
                  "histories",
                  table.getAddressesByIds(h.diffAfter)
                );
              }
            },
          }}
        />

          <div>Diff:</div>
          <textarea 
            id="diff"
            style={{width: '300px', height: '100px'}}
            value={JSON.stringify(diff, null, 2)}
          ></textarea>

        </div>
      <div style={{flex: 1, overflow: 'auto', maxHeight: '300px', width: '100%'}}>
        <ol className="histories" style={{marginLeft: '10px', width: '100%'}}>
          {histories.map((hist, i) => (
            <li key={i} style={{
              display: 'flex',
              lineHeight: "20px", 
              borderBottom: 'solid 1px #777', 
              marginBottom: '10px',
              backgroundColor: table?.getHistoryIndex() === i ? '#aae' : 'transparent'
            }}>
              <div style={{color: '#09a', width: '100px', whiteSpace: 'pre'}}>{i + 1}. [{hist.operation}]</div>
              <pre style={{margin: 0, fontSize: '10px', flex: 1}}>{(() => {
                if (hist.operation === "UPDATE") {
                  return JSON.stringify(
                    table?.getAddressesByIds(
                      hist.diffAfter
                    )
                  );
                }
              })()}</pre>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
