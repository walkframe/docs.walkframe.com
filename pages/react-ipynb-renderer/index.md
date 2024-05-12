# Overview

This component draws an ipynb file in Jupyter Notebook. 
You can use MathJax or Katex to render math expressions; install react-ipynb-renderer if you use MathJax, or react-ipynb-renderer-katex if you use Katex.

If you are not particular, we recommend react-ipynb-renderer.
react-ipynb-renderer-katex is more lightweight, but some syntax is not supported.

# Demo

- [codesandbox react-ipynb-renderer](https://codesandbox.io/s/react-ipynb-renderer-sample-kbu4z?file=/src/App.tsx)
- [codesandbox react-ipynb-renderer-katex](https://codesandbox.io/s/react-ipynb-renderer-katex-sample-770np1?file=/src/App.tsx)

# Install

```
$ npm install --save react-ipynb-renderer
```

or

```
$ npm install --save react-ipynb-renderer-katex
```


# Code example

## Using react-ipynb-renderer

```js
import { IpynbRenderer } from "react-ipynb-renderer";

// Jupyter theme
import "react-ipynb-renderer/dist/styles/monokai.css";
// import ipynb file as json
import ipynb from "./test.ipynb";

export const Component = () => {
    return (<IpynbRenderer ipynb={ipynb} />);
};
```

## Using react-ipynb-renderer-katex

```js
import { IpynbRenderer } from "react-ipynb-renderer-katex";

// Formula renderer for katex
import 'katex/dist/katex.min.css';

// Jupyter theme
import "react-ipynb-renderer-katex/dist/styles/monokai.css";
// import ipynb file as json
import ipynb from "./test.ipynb";

export const Component = () => {
  return (<IpynbRenderer ipynb={ipynb} />);
};
```


# More information

- [Options](./options)
- [Theme](./theme)
- [History](./history)
- [Code migration](./migration)

