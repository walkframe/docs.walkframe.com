<a href="/products/react-ipynb-renderer">Back to index</a>

# History

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
