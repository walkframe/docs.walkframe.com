import * as React from "react";
import {GridSheet, Parser, constructInitialCellsOrigin, CellType, ParserMixinType} from "@gridsheet/react-core";

const ColoringParserMixin: ParserMixinType = {
  callback(parsed: any, cell: CellType): CellType {
    return {
      ...cell,
      value: parsed,
      style: { ...cell.style, backgroundColor: `${parsed}` },
    };
  }
}

const coloring = new Parser({mixins: [ColoringParserMixin]});

export default function App() {
  return (
    <div className="example-app">
      <h1>Drag right bottom of the sheets</h1>
      <table
        style={{
          tableLayout: "fixed",
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <tbody>
          <tr>
            <td style={{width: '50%'}}>
              <h2>Resize: both</h2>
              <GridSheet
                initialCells={(() => {
                  const cells = constructInitialCellsOrigin({
                    matrix: Array.from({ length: 256 }, (i, c) =>
                      Array.from(
                        { length: 100 },
                        (j, t) => `rgba(${c},${c},${c},${(100 - t) / 100})`
                      )
                    ),
                    cells: {},
                  });
                  Object.entries(cells).map(([id, cell]) => {

                    cells[id] = {
                      ...cell,
                      style: { backgroundColor: cell.value },
                    };
                  });
                  return {
                    ...cells,
                    default: {
                      style: { color: "#888888", fontSize: 9 },
                      parser: "coloring",
                    },
                  };
                })()}
                style={{ maxWidth: "100%" }}
                options={{
                  sheetResize: "both",
                  parsers: { coloring },
                }}
              />
            </td>
            <td style={{width: '50%'}}>
              <h2>Resize: vertical</h2>
              <GridSheet
                initialCells={(() => {
                  const cells = constructInitialCellsOrigin({
                    matrix: Array.from({ length: 256 }, (i, r) =>
                      Array.from(
                        { length: 256 },
                        (j, g) =>
                          `#${(255 - r).toString(16).padStart(2, "0")}${(
                            255 - g
                          )
                            .toString(16)
                            .padStart(2, "0")}00`
                      )
                    ),
                    cells: {},
                  });
                  Object.entries(cells).map(([id, cell]) => {
                    cells[id] = {
                      ...cell,
                      style: { backgroundColor: cell.value },
                    };
                  });
                  return {
                    ...cells,
                    default: {
                      style: { color: "#888888" },
                      parser: "coloring",
                    },
                  };
                })()}
                style={{ maxWidth: "100%" }}
                options={{
                  sheetResize: "vertical",
                  parsers: { coloring },
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <h2>Resize: horizontal</h2>
              <GridSheet
                initialCells={(() => {
                  const cells = constructInitialCellsOrigin({
                    matrix: Array.from({ length: 256 }, (i, r) =>
                      Array.from(
                        { length: 256 },
                        (j, b) =>
                          `#${(255 - r).toString(16).padStart(2, "0")}00${(
                            255 - b
                          )
                            .toString(16)
                            .padStart(2, "0")}`
                      )
                    ),
                    cells: {},
                  });
                  Object.entries(cells).map(([id, cell]) => {
                    cells[id] = {
                      ...cell,
                      style: { backgroundColor: cell.value },
                    };
                  });
                  return {
                    ...cells,
                    default: {
                      style: { color: "#888888" },
                      parser: "coloring",
                    },
                  };
                })()}
                style={{ maxWidth: "100%" }}
                options={{
                  sheetResize: "horizontal",
                  parsers: { coloring },
                }}
              />
            </td>
            <td>
              <h2>Resize: none</h2>
              <GridSheet
                initialCells={(() => {
                  const cells = constructInitialCellsOrigin({
                    matrix: Array.from({ length: 256 }, (i, g) =>
                      Array.from(
                        { length: 256 },
                        (j, b) =>
                          `#00${(255 - g).toString(16).padStart(2, "0")}${(
                            255 - b
                          )
                            .toString(16)
                            .padStart(2, "0")}`
                      )
                    ),
                    cells: {},
                  });
                  Object.entries(cells).map(([id, cell]) => {
                    cells[id] = {
                      ...cell,
                      style: { backgroundColor: cell.value },
                    };
                  });
                  return {
                    ...cells,
                    default: {
                      style: { color: "#888888" },
                      parser: "coloring",
                    },
                  };
                })()}
                style={{ maxWidth: "100%" }}
                options={{
                  sheetResize: "none",
                  parsers: { coloring },
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
