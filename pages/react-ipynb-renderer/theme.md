<a href="/react-ipynb-renderer">Back to index</a>


This library has two major themes.
- syntax highlighting theme.
- jupyter notebook theme


# SyntaxHighlighting theme

It highlights the code of the notebook using [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter).

You can select one of [prism](https://github.com/react-syntax-highlighter/react-syntax-highlighter/tree/master/src/styles/prism) themes.

- atomDark
- cb
- coy
- darcula
- dark
- duotoneDark
- duotoneEarth
- duotoneForest
- duotoneLight
- duotoneSea
- duotoneSpace
- funky
- ghcolors
- hopscotch
- okaidia
- pojoaque
- prism
- solarizedlight
- tomorrow
- twilight
- vscDarkPlus
- xonokai (default)



# Jupyter notebook theme

If you do not want to style the notebook yourself, you can use one of the following themes.

- default
- chesterish
- dark
- darkbronco
- dorkula
- grade3
- gruvboxd
- gruvboxl
- monokai
- oceans16
- onedork
- solarizedd
- solarizedl

These are the same as [jupyter-themes](https://github.com/dunovank/jupyter-themes).

Import to use as follow:

```typescript
import "react-ipynb-renderer/dist/styles/monokai.css";
```

or 

```typescript
import "react-ipynb-renderer-katex/dist/styles/monokai.css";
```



