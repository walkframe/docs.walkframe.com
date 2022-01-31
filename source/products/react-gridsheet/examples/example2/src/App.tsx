import * as React from "react";
import { request } from "@octokit/request";
import { GridSheet, oa2aa, Renderer, MatrixType, matrixIntoCells } from "react-gridsheet";
import "./App.css";

// no thousand separator
class IdRenderer extends Renderer {
  number(value: number) {
    return value;
  }
}

class ImageRenderer extends Renderer {
  string(value: string) {
    return (
      <div
        className="backface"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${value})`
        }}
      />
    );
  }
}

class LinkRenderer extends Renderer {
  string(value: string) {
    return (
      <a target="_blank" href={value}>
        {value}
      </a>
    );
  }
}

export default function App() {
  const fields = ["id", "avatar_url", "login", "html_url", "contributions"];
  const [data, setData] = React.useState<MatrixType>([]);
  React.useEffect(() => {
    (async () => {
      const response = await request("GET /repos/{owner}/{repo}/contributors", {
        owner: "facebook",
        repo: "react"
      });
      setData(oa2aa(response.data as { [s: string]: any }[], fields));
    })();
  }, []);
  return (
    <div className="App">
      <h1>facebook/react contributors top 30</h1>

      {data.length === 0 ? null : <GridSheet
        initial={matrixIntoCells(data, {
          default: {
            height: 100,
          },
          A: {
            label: "ID",
            width: 80,
            style: { textAlign: "right" },
            renderer: "id"
          },
          B: { label: "Avatar", renderer: "image" },
          C: { label: "user", width: 150 },
          D: {
            label: "URL",
            width: 300,
            renderer: "link"
          },
          E: { label: "Contributions", style: { textAlign: "right" } }
        })}
        options={{
          mode: "dark",
          sheetHeight: 500,
          sheetWidth: 1000,
          headerHeight: 30,
          renderers: {
            id: new IdRenderer(),
            image: new ImageRenderer(),
            link: new LinkRenderer()
          },

        }}
      /> }
      <a
        target="_blank"
        href="https://docs.github.com/en/free-pro-team@latest/rest/reference/repos#list-repository-contributors"
      >
        Via: List repository contributors
      </a>
    </div>
  );
}
