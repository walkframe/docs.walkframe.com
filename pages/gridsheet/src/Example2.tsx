import * as React from "react";
import { request } from "@octokit/request";
import {
  GridSheet,
  oa2aa,
  Renderer,
  RendererMixinType,
  MatrixType,
  constructInitialCellsOrigin, ThousandSeparatorRendererMixin,
} from "@gridsheet/react-core";

const ImageRendererMixin: RendererMixinType = {
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

const LinkRendererMixin: RendererMixinType = {
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
    <div className="example-app">
      <h1>facebook/react contributors top 30</h1>

      {data.length === 0 ? null : (
        <GridSheet
          initialCells={constructInitialCellsOrigin({
            matrix: data,
            cells: {
              default: {
                height: 100,
              },
              A: {
                labeler: "id",
                width: 80,
                renderer: "id",
                justifyContent: "right",
                alignItems: "center",
              },
              B: { labeler: "avatar", renderer: "image", alignItems: "center" },
              C: { labeler: "user", width: 150, alignItems: "center" },
              D: {
                labeler: "url",
                width: 300,
                renderer: "link",
                alignItems: "center",
              },
              E: {
                labeler: "contributions",
                style: { textAlign: "right" },
                alignItems: "center",
                justifyContent: "center",
                renderer: "thousand_separator",
              },
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
              thousand_separator: new Renderer({mixins: [ThousandSeparatorRendererMixin]}),
              image: new Renderer({mixins: [ImageRendererMixin]}),
              link: new Renderer({mixins: [LinkRendererMixin]}),
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
      <br />
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
