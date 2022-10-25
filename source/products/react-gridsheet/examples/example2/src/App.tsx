import * as React from "react";
import { request } from "@octokit/request";
import {
  GridSheet,
  oa2aa,
  Renderer,
  MatrixType,
  generateInitial,
} from "react-gridsheet";
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
          backgroundImage: `url(${value})`,
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
        repo: "react",
      });
      setData(oa2aa(response.data as { [s: string]: any }[], fields));
    })();
  }, []);
  return (
    <div className="App">
      <h1>facebook/react contributors top 30</h1>

      {data.length === 0 ? null : (
        <GridSheet
          initial={generateInitial({
            matrixes: { A1: data },
            cells: {
              default: {
                height: 100,
              },
              A: {
                labeler: "id",
                width: 80,
                style: { textAlign: "right" },
                renderer: "id",
              },
              B: { labeler: "avatar", renderer: "image" },
              C: { labeler: "user", width: 150 },
              D: {
                labeler: "url",
                width: 300,
                renderer: "link",
              },
              E: { labeler: "contributions", style: { textAlign: "right" } },
            },
          })}
          options={{
            mode: "dark",
            sheetHeight: 500,
            sheetWidth: 1000,
            headerHeight: 30,
            minNumCols: 5,
            maxNumCols: 5,
            renderers: {
              id: new IdRenderer(),
              image: new ImageRenderer(),
              link: new LinkRenderer(),
            },
            labelers: {
              id: (n) => "ID",
              avatar: (n) => "Avatar",
              user: (n) => "user",
              url: (n) => "URL",
              contributions: (n) => "Contributions",
            },
          }}
        />
      )}
      <a
        target="_blank"
        href="https://docs.github.com/en/free-pro-team@latest/rest/reference/repos#list-repository-contributors"
        rel="noreferrer"
      >
        Via: List repository contributors
      </a>
    </div>
  );
}
