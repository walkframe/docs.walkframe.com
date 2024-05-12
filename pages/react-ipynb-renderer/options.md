<a href="/products/react-ipynb-renderer">Back to index</a>

# Common options

Following options are common to react-ipynb-renderer and react-ipynb-renderer-katex.

## ipynb

| type   | default                     | example            |
|--------|-----------------------------|--------------------|
| object | **this option is required** | ```ipynb={json}``` |

Specify the object from which the ipynb file was parsed as json.

See below for the detailed format.

<a href="https://nbformat.readthedocs.io/en/latest/format_description.html" target="_blank" rel="noreferrer">https://nbformat.readthedocs.io/en/latest/format_description.html</a>

## syntaxTheme

| type   | default    | example                           |
|--------|------------|-----------------------------------|
| string | 'xonokai'  | ```syntaxTheme={'duotoneDark'}``` |

Select a syntax highlighting theme.

See this [link](./theme/) for details.


## language

| type    | default   | example              |
|---------|-----------|----------------------|
| string  | 'python'  | ```language={'r'}``` |

Specify the programming language used by jupyter notebook.

The following languages are assumed
- `python`
- `r`
- `julia`
- `haskell`
- `ruby`

## bgTransparent

| type    | default     | example                     |
|---------|-------------|-----------------------------|
| boolean | ```true```  | ```bgTransparent={false}``` |

The background color of the code is transparent by default. For this reason, depending on the combination with jupyter theme, it may be difficult to see the text color.

If you pass `bgTransparent={false}`, code background color will get back to highlighting color.

## htmlFilter
**Since v1.1.x**

| type     | default            | example                                                          |
|----------|--------------------|------------------------------------------------------------------|
| function | dompurify.sanitize | ```htmlFilter={(html) => html.replace(/onclick=".*?"/gi, '')}``` |

htmlFilter replaces a html text to remove dangerous strings that cause XSS attacks. 

By default, <a href="https://github.com/cure53/DOMPurify" target="_blank" rel="noreferrer">dompurify.sanitize</a> is used. 
It is recommended that this option not be changed unless the ipynb to be rendered can be trusted.

This function is used by the following.
- `cell.source` (when cell.cell_type is `markdown`)
- `cell.outputs[n].data["text/html"]`
- `cell.outputs[n].data["text/latex"]`
- `cell.outputs[n].data["image/svg+xml"]`

## seqAsExecutionCount
**Since v1.2.x**

| type    | required   | example                          |
|---------|------------|----------------------------------|
| boolean | false      | ```seqAsExecutionCount={true}``` |

If this option is enabled, sequential cell numbers are displayed instead of `cell.execution_count`.

## onLoad
**Since v2.2.x**

| type     | required   | example                                      |
|----------|------------|----------------------------------------------|
| function | false      | ```onLoad={() => {console.log('Loaded')}}``` |

Callback function fired at the end of drawing.

## ref
**Since v2.2.x**

| type                             | required   | example         |
|----------------------------------|------------|-----------------|
| MutableRefObject<HTMLDivElement> | false      | ```ref={ref}``` |

A ref object to be passed to the root element, created with useRef.


## markdownOptions
**Since v2.0.x**

| type   | default  | example                                                                     |
|--------|----------|-----------------------------------------------------------------------------|
| object | ```{}``` | ```markdownOptions={{ remarkMathOptions: {singleDollarTextMath: true }}}``` |

Props to be passed to the markdown component.

This option contains the following keys.

### remarkMath

remark-math extracts mathematical expressions in markdown, 
but the delimiter used is fixed, so if you want to fix it, extend this function and specify it.

See below for detail.

<a href="https://github.com/remarkjs/remark-math" target="_blank" rel="noreferrer">
https://github.com/remarkjs/remark-math</a>

### remarkMathOptions

Options to be passed to remarkMath.

See below for detail.

<a href="https://github.com/syntax-tree/mdast-util-math#mathtomarkdownoptions" target="_blank" rel="noreferrer">
https://github.com/syntax-tree/mdast-util-math#mathtomarkdownoptions</a>

### mathjaxOptions
**This key is only available with react-ipynb-renderer.**

Options to be passed to mathjax.

See below for detail.

<a href="https://docs.mathjax.org/en/v3.0-latest/options/input/tex.html" target="_blank" rel="noreferrer">
https://docs.mathjax.org/en/v3.0-latest/options/input/tex.html</a>

The inlineMath and displayMath options do not work if specified; 
you must specify your own remarkMath.


### katexOptions
**This option is only available with react-ipynb-renderer-katex.**

Options to be passed to katex.

See below for detail.

<a href="https://katex.org/docs/options.html" target="_blank" rel="noreferrer">
https://katex.org/docs/options.html</a>


## mdiOptions
**Deleted at v2.0.x**

| type   | default  | example                                           |
|--------|----------|---------------------------------------------------|
| object | ```{}``` | ```mdiOptions={{ html: true, linkify: true }}```  |

Specify options to pass to markdown-it.

For example, to enable HTML display, specify `html: true`.
If enabled, it is recommended to enable the appropriate escaping function in htmlFilter to make it vulnerable to XSS attacks.

See below for detailed options.

<a href="https://markdown-it.github.io/markdown-it/#MarkdownIt.new" target="_blank" rel="noreferrer">
https://markdown-it.github.io/markdown-it/#MarkdownIt.new</a>

# react-ipynb-renderer's options

## formulaOptions
**Deleted at v2.0.x**

| type   | default  | example                                               |
|--------|----------|-------------------------------------------------------|
| object | ```{}``` | ```formulaOptions={{mathjax3: {tex: tags: 'ams'}}}``` |

react-ipynb-renderer uses markdown-it-mathjax3 to draw mathematical expressions.
You can pass options for this library to `mathjax3`.

See below for detailed options.

- <a href="https://github.com/tani/markdown-it-mathjax3" target="_blank" rel="noreferrer">
  https://github.com/tani/markdown-it-mathjax3</a>
- <a href="https://docs.mathjax.org/en/v3.0-latest/options/input/tex.html" target="_blank" rel="noreferrer">
  https://docs.mathjax.org/en/v3.0-latest/options/input/tex.html</a>


# react-ipynb-renderer-katex's options
## formulaOptions
**Deleted at v2.0.x**

| type   | default  | example                                               |
|--------|----------|-------------------------------------------------------|
| object | ```{}``` | ```formulaOptions={{katexOptions: {fleqn: false}}}``` |

react-ipynb-renderer-katex uses markdown-it-texmath to draw mathematical expressions.
You can pass options for this library to `katexOptions`.

See below for detailed options.

<a href="https://github.com/goessner/markdown-it-texmath" target="_blank" rel="noreferrer">
https://github.com/goessner/markdown-it-texmath</a>
