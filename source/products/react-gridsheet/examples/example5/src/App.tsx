import * as React from "react";
import {
  GridSheet,
  Parser,
  matrixIntoCells,
  CellType,
} from "react-gridsheet";
import "./App.css";



export default function App() {
  return (
    <div className="App">
      <h1>Drag right bottom of the sheets</h1>
      <table style={{tableLayout: "fixed", width: "100%", borderCollapse: "collapse"}}>
        <tbody>
          <tr>
            <td>
              <h2>Resize: both</h2>
              <GridSheet
                initial={(() => {
                  const cells = matrixIntoCells(Array.from({length: 256}, (i, c) => Array.from({length: 100}, (j, t) => `rgba(${c},${c},${c},${(100-t) / 100})`)), {});
                  Object.entries(cells).map(([id, cell]) => {
                    cells[id] = {...cell, style: {backgroundColor: cell.value}}
                  });
                  return {
                    ...cells,
                    default: {
                      style: {color: "#888888", fontSize: 9},
                      parser: "coloring",
                    }
                  };
                  })()
                }
                style={{ maxWidth: "100%" }}
                options={{
                  sheetResize: "both",
                  parsers: { coloring: new ColoringParser()},
                }}
              />
            </td>
            <td>
              <h2>Resize: vertical</h2>
              <GridSheet
                initial={
                  (() => {
                    const cells = matrixIntoCells(Array.from({length: 256}, (i, r) => Array.from({length: 256}, (j, g) => `#${(255-r).toString(16).padStart(2, "0")}${(255-g).toString(16).padStart(2, "0")}00`)), {});
                    Object.entries(cells).map(([id, cell]) => {
                      cells[id] = {...cell, style: {backgroundColor: cell.value}}
                    });
                    return {
                      ...cells,
                      default: {
                        style: {color: "#888888"},
                        parser: "coloring",
                      },
                    };
                  })()
                }
                style={{ maxWidth: "100%"}}
                options={{
                  sheetResize: "vertical",
                  parsers: { coloring: new ColoringParser()},
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <h2>Resize: horizontal</h2>
              <GridSheet
                initial={
                  (() => {
                    const cells = matrixIntoCells(Array.from({length: 256}, (i, r) => Array.from({length: 256}, (j, b) => `#${(255-r).toString(16).padStart(2, "0")}00${(255-b).toString(16).padStart(2, "0")}`)), {});
                    Object.entries(cells).map(([id, cell]) => {
                      cells[id] = {...cell, style: {backgroundColor: cell.value}}
                    });
                    return {
                      ...cells,
                      default: {
                        style: {color: "#888888"},
                        parser: "coloring",
                      },
                    };
                  })()
                }
                style={{ maxWidth: "100%"}}
                options={{
                  sheetResize: "horizontal",
                  parsers: { coloring: new ColoringParser()},
                }}
              />
            </td>
            <td>
              <h2>Resize: none</h2>
              <GridSheet
                initial={
                  (() => {
                    const cells = matrixIntoCells(Array.from({length: 256}, (i, g) => Array.from({length: 256}, (j, b) => `#00${(255-g).toString(16).padStart(2, "0")}${(255-b).toString(16).padStart(2, "0")}`)), {});
                    Object.entries(cells).map(([id, cell]) => {
                      cells[id] = {...cell, style: {backgroundColor: cell.value}}
                    });
                    return {
                      ...cells,
                      default: {
                        style: {color: "#888888"},
                        parser: "coloring",
                      },
                    };
                  })()
                }
                style={{ maxWidth: "100%"}}
                options={{
                  sheetResize: "none",
                  parsers: { coloring: new ColoringParser()},
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

class ColoringParser extends Parser {
  public parse (value: string, cell: CellType): CellType {
    const parsed = this._parse(value, cell);
    return {...cell, value, style: {...cell.style, backgroundColor: `${parsed}`} };
  }
}
