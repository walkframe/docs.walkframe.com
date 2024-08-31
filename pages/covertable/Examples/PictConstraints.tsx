import * as React from "react";
import {
  make,
  sorters,
  criteria,
  PictConstraintsLexer,
  SuggestRowType,
} from "covertable";

const defaultConstraints = '' +
`IF [machine] = "iPhone" THEN [os] = "iOS";
IF [os] = "iOS" THEN [machine] = "iPhone";`;


export default function App() {
  const machine = ["iPhone", "Pixel", "XPERIA", "ZenFone", "Galaxy"];
  const os = ["iOS", "Android"];
  const browser = ["FireFox", "Chrome", "Safari"];
  const factors = { machine, os, browser };
  type FactorType = SuggestRowType<typeof factors>;

  const [constraints, setConstraints] = React.useState(defaultConstraints);
  const [lexer, setLexer] = React.useState<PictConstraintsLexer>(new PictConstraintsLexer('', true));
  const [rows, setRows] = React.useState<FactorType[]>([])
  React.useEffect(() => {
    const lexer = new PictConstraintsLexer(constraints, true);
    const rows = make(factors, {
      sorter: sorters.random,
      criterion: criteria.greedy,
      preFilter: lexer.filter,
    });
    setLexer(lexer);
    setRows(rows)
  }, [constraints])
  return (
    <div className="App">
      <style>{`
table {
  table-layout: fixed;
  border-collapse: collapse;
}
th,
td {
  padding: 5px;
  border: solid 1px #888888;
}
th {
  background-color: #888888;
  color: #ffffff;
}
      `}</style>
      <div className="TableWrapper">
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th title={machine.join(", ")}>Machine</th>
              <th title={os.join(", ")}>OS</th>
              <th title={browser.join(", ")}>Browser</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{row.machine}</td>
                <td>{row.os}</td>
                <td>{row.browser}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <h3>Edit constraint expressions in PICT format</h3>
      <textarea
        style={{ padding: '10px', width: "100%", height: "100px", border: "solid 1px #888888" }}
        value={constraints} 
        onChange={(e) => setConstraints(e.target.value)}
      />

      lexer errors:
      <table>
      {lexer.errors.map((error, i) => (<tr key={i}>
        <td>{i + 1}</td>
        <td>{error || 'No errors.'}</td>
      </tr>))}
      </table>
    </div>
  );
}
