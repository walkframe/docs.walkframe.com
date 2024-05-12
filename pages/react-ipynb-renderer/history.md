<a href="../">Back to index</a>

# History

## v2.2.x
- Upgrade dependent libraries.
- Support Server side rendering.
  - Nextjs no longer requires the use of next/dynamic when rendering SSRs.
- Add props.
  - onLoad
  - ref
- Add E2E tests.
- Add lint.
- Add issue templates.

## v2.1.x
- Add jupyter themes.
  - default
  - dark
  - darkbronco
  - dorkula

- Double-click to select entire source code.
- Cells without outputs are not displayed.

## v2.0.x
- Use [remark and rehype](https://github.com/remarkjs) instead of markdown-it.
  - Since the markdown-it plugin cannot handle the display of latex included in markdown,
    I switched to the remarkjs plugin.
  - Some options have been consolidated and removed.
  - The displayMath and inlineMath options are not disabled in this version; 
    they did not work before.
- Support error display.

## v1.2.x
- SVG support.
  - output.svg and `output.data["image/svg+xml"]` in a cell will be rendered.
  - Added language literal type.
    - haskell
    - ruby
  
  - [#9](https://github.com/righ/react-ipynb-renderer/pull/9)
    - The scope of application of the htmlFilter was expanded.
    - add seqAsExecutionCount option.
      - From now on, if this option is not specified, sequential numbers will not be displayed.
      - Also, if this option is specified, the actual execution_count is ignored. 

## v1.1.x
- Added htmlFilter prop.
  - htmlFilter is a function to replaces `output.data["text/html"]`.
  - It is mainly used to prevent vulnerabilities such as XSS.
