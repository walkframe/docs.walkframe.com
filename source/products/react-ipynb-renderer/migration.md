
# Migrate for v1.0.x

## If you were using renderer mathjax

Remove the following code.
- `katex.min.css` import (if you have been written)
    - Originally, it is not used in Mathjax.
- formulaOption prop.

### before

```jsx
import { IpynbRenderer } from "react-ipynb-renderer";

// Formula renderer for katex
// import 'katex/dist/katex.min.css'; // Remove this

// Jupyter theme
import "react-ipynb-renderer/dist/styles/monokai.css";
// import ipynb file as json
import ipynb from "./test.ipynb";

export const Component = () => {
  return (<>
    <IpynbRenderer
      ipynb={ipynb}
      syntaxTheme="xonokai"
      language="python"
      bgTransparent={true}
      formulaOptions={{ // Remove this
        renderer: "mathjax",
      }}
      mdiOptions={{
        html: true,
        linkify: true,
      }}
    />
  </>);
};
```

### after
```jsx
import { IpynbRenderer } from "react-ipynb-renderer";

// Jupyter theme
import "react-ipynb-renderer/dist/styles/monokai.css";
// import ipynb file as json
import ipynb from "./test.ipynb";

export const Component = () => {
  return (<>
    <IpynbRenderer
      ipynb={ipynb}
      syntaxTheme="xonokai"
      language="python"
      bgTransparent={true}
      mdiOptions={{
        html: true,
        linkify: true,
      }}
    />
  </>);
};
```

## If you were using renderer katex

- Rename `katex` to `texmath` in formulaOption.
- Change import name `react-ipynb-render` to `react-ipynb-renderer-katex`.

### before

```jsx
import { IpynbRenderer } from "react-ipynb-renderer"; // Change

// Formula renderer for katex
import 'katex/dist/katex.min.css';

// Jupyter theme
import "react-ipynb-renderer/dist/styles/monokai.css"; // Change
// import ipynb file as json
import ipynb from "./test.ipynb";

export const Component = () => {
  return (<>
    <IpynbRenderer
      ipynb={ipynb}
      syntaxTheme="xonokai"
      language="python"
      bgTransparent={true}
      formulaOptions={{
        renderer: "katex", // Remove this
        katex: { // Rename this to texmath
          delimiters: "gitlab",
          katexOptions: {
            fleqn: false,
          },
        }
      }}
      mdiOptions={{
        html: true,
        linkify: true,
      }}
    />
  </>);
};
```

### after
```jsx
import { IpynbRenderer } from "react-ipynb-renderer-katex";

// Formula renderer for katex
import 'katex/dist/katex.min.css';

// Jupyter theme
import "react-ipynb-renderer-katex/dist/styles/monokai.css";
// import ipynb file as json
import ipynb from "./test.ipynb";

export const Component = () => {
  return (<>
    <IpynbRenderer
      ipynb={ipynb}
      syntaxTheme="xonokai"
      language="python"
      bgTransparent={true}
      formulaOptions={{
        texmath: {
          delimiters: "gitlab",
          katexOptions: {
            fleqn: false,
          },
        }
      }}
      mdiOptions={{
        html: true,
        linkify: true,
      }}
    />
  </>);
};
```