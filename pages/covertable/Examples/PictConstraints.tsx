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

const style = `
.wrapper {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
.left {
  max-width: 260px;
}
.right {
  flex: 1;
}
table {
  border-collapse: collapse;
  table-layout: fixed;
}
th, td {
  padding: 5px;
  border: solid 1px #888888;
}
th {
  background-color: #888888;
  color: #ffffff;
}
`;

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
    setLexer(lexer);
    const rows = make(factors, {
      sorter: sorters.random,
      criterion: criteria.greedy,
      preFilter: lexer.filter,
    });
    setRows(rows)
  }, [constraints]);

  const left = (<div className="left">
    <h3>Combinations</h3>
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
  </div>);

  const right = (<div className="right">
    <h3>Edit constraint expressions in PICT format</h3>
    <textarea
      style={{ padding: '10px', width: "100%", height: "100px", border: "solid 1px #888888" }}
      value={constraints} 
      onChange={(e) => setConstraints(e.target.value)}
    />

    <table>
      <caption>Lexer errors</caption>
      <tbody>
      {lexer.errors.map((error, i) => (<tr key={i}>
        <td>{i + 1}</td>
        <td>{error || 'No errors.'}</td>
      </tr>))}
      </tbody>
    </table>
  </div>);

  return (
    <div className="App">
      <style>{style}</style>
      <div className="wrapper">
        {left}
        {right}
      </div>
    </div>
  );
}
