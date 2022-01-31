import * as React from "react";
import {
  GridSheet,
  Renderer,
  Parser,
  MatrixType,
  aa2oa,
  matrixIntoCells,
  CellType,
} from "react-gridsheet";
import "./App.css";

class ListRenderer extends Renderer {
  array(value: any[]) {
    return (
      <ul>
        {value.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    );
  }
  stringify(cell: CellType): string {
    const { value } = cell;
    if (Array.isArray(value)) {
      return value.join("\n");
    }
    return value?.toString() || "";
  }
}

class ListParser extends Parser {
  parseFunctions = [this.parseArray];
  parseArray(value: string): any[] {
    return value.split(/\n/g);
  }
}

export default function App() {
  const [data] = React.useState<MatrixType>([
    [true, "Ichiro", "Baseball player", ["Curry Rice", "Baseball"]],
    [true, "Jiro", "Ramen shop owner", ["Ramen"]],
    [true, "Saburo", "Singer", ["Song"]],
    [true, "Shiro", "Sword master", ["Christianity"]],
    [true, "Goro", "Solo proprietorship", ["Eating alone"]]
  ]);
  const [tsv, setTsv] = React.useState("");

  return (
    <div className="App">
      <h1>Sloppy data</h1>
      <GridSheet
        initial={matrixIntoCells(data, {
          default: { width: 200, height: 50 },
          A: { width: 50, style: { textAlign: "center" } },
          C: { width: 200 },
          D: { width: 400, renderer: "list", parser: "list" }
        })}
        options={{
          headerHeight: 30,
          sheetHeight: 300,
          renderers: {
            list: new ListRenderer()
          },
          parsers: {
            list: new ListParser()
          },
          onSave: (table) => {
            const filtered = table.matrixFlatten()
              .filter((row) => row[0])
              .map((row) => row.slice(1));
            setTsv(filtered.map((row) => row.join("\t")).join("\n"));
          },
          onChange: (table) => {
            console.log(
              "data onchange:",
              aa2oa(table.matrixFlatten(), ["name", "occupation", "memo"])
            );
          }
        }}
      />
      <p>TSV: (Ctrl+s to update)</p>
      <textarea
        placeholder="Inactive rows will be ommited"
        value={tsv}
        style={{ width: "100%", minHeight: "200px" }}
      ></textarea>
    </div>
  );
}
