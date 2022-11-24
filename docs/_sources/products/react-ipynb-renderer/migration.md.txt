<a href="/products/react-ipynb-renderer">Back to index</a>

# Migrate for v2.0.x

Following options have been integrated to a new option due to changes in the libraries used for markdown rendering.
Please remove that and move to the new options.

- Delete `mdiOptions` prop.
  - `mdiOptions` is unavailable since v2.
  - `mdiOptions.html` and `mdiOptions.linkify` are always true.
    - Since purification is enabled by default, invalid script fragments will be disabled.
      - https://github.com/cure53/DOMPurify

- Delete `formulaOptions` prop.
  - `formulaOptions` is unavailable since v2.
  - Specify `markdownOptions.mathjaxOptions` instead of `formulaOptions.mathjax3`. (if you use react-ipynb-renderer)
  - Specify `markdownOptions.katexOptions` instead of `formulaOptions.texmath.katexOptions`. (if you use react-ipynb-renderer-katex)


### before

```jsx
import { IpynbRenderer } from "react-ipynb-renderer";

// Jupyter theme
import "react-ipynb-renderer/dist/styles/monokai.css";
// import ipynb file as json
import ipynb from "./test.ipynb";

export const Component = () => {
  return (
    <IpynbRenderer
      ipynb={ipynb}
      syntaxTheme="xonokai"
      language="python"
      bgTransparent={true}
      formulaOptions={{ // Remove this
        mathjax3: {tex: {tags: 'ams'}},
        katexOptions: {fleqn: false},
      }}
      mdiOptions={{ // Remove this
        html: true,
        linkify: true,
      }}
    />
  );
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
  return (
    <IpynbRenderer
      ipynb={ipynb}
      syntaxTheme="xonokai"
      language="python"
      bgTransparent={true}
      markdownOptions={{ // add options
        // If mathjax3 was specified in react-ipynb-renderer
        mathjaxOptions: {tex: {tags: 'ams'}},
        // If texmath was specified in react-ipynb-renderer-katex
        katexOptions: {fleqn: false},
      }}
    />
  );
};
```


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
      formulaOptions={{
        renderer: "mathjax", // Remove this
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