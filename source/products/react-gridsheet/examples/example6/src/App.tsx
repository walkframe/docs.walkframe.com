import * as React from "react";
import {
  GridSheet,
  matrixIntoCells,
} from "react-gridsheet";
import "./App.css";

export default function App() {
  const [num, setNum] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => {
      setNum((num + 5) % 100);
    }, 1000);
    return () => clearInterval(id);
  });

  return (
    <div className="App">
      <GridSheet
        initial={
          matrixIntoCells([
            [1, 2],
            [3, 4]
          ], {})
        }
        changes={{
          B2: {value: num, style: {backgroundColor: `rgba(0, 0, 200, ${num / 100})`}},
        }}
        options={{
          historySize: 200,
        }}
        style={{ maxWidth: "100%" }}
      />
    </div>
  );
};
