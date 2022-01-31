
.. toctree::
   :maxdepth: 2

Examples
========
Here are `react-gridsheet <https://www.npmjs.com/package/react-gridsheet>`__ examples in demo.

.. note::

  - `GitHub <https://github.com/righ/react-gridsheet>`__
  - `Document </products/react-gridsheet/>`__

Example1 - Simple example
-----------------------------------------

:Project: `react-gridsheet-example1/ <https://github.com/walkframe/docs.walkframe.com/tree/main/source/products/react-gridsheet/examples/example1>`__
:Source: `react-gridsheet-example1/src/App.tsx <https://github.com/walkframe/docs.walkframe.com/blob/main/source/products/react-gridsheet/examples/example1/src/App.tsx>`__

.. raw:: html

  <iframe src="/_static/examples/react-gridsheet-example1/"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-gridsheet example simple"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>

- Cell config:

  - ``options.cells[column].label``: Column label.
  - ``options.cells[column].width``: Column width.
  - ``options.cells[column].style``: Cell style in the column.

Example2 - Custom renderers with dark mode
------------------------------------------

:Project: `react-gridsheet-example2/ <https://github.com/walkframe/docs.walkframe.com/tree/main/source/products/react-gridsheet/examples/example>`__
:Source: `react-gridsheet-example2/src/App.tsx <https://github.com/walkframe/docs.walkframe.com/blob/main/source/products/react-gridsheet/examples/example2/src/App.tsx>`__

.. raw:: html

  <iframe src="/_static/examples/react-gridsheet-example2/"
     style="width:100%; height:600px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-gridsheet with api response in dark mode"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
     loading="lazy"
   ></iframe>

- Dark mode:

  - ``options.mode = 'dark'``: Set mode dark

- API response format:

  - ``oa2aa(response.data)``: converts ``object in array`` to ``array in array``

- Custom renderer:

  - ThousandSeparatorRenderer: renders a number with comma. (built-in)
  - ImageRenderer: renders an image related to the string as a link.
  - LinkRenderer: renders a string as a link.

Example3 - Event handling
------------------------------

:Project: `react-gridsheet-example3/ <https://github.com/walkframe/docs.walkframe.com/tree/main/source/products/react-gridsheet/examples/example3>`__
:Source: `react-gridsheet-example3/src/App.tsx <https://github.com/walkframe/docs.walkframe.com/blob/main/source/products/react-gridsheet/examples/example3/src/App.tsx>`__

.. raw:: html

  <iframe src="/_static/examples/react-gridsheet-example3/"
     style="width:100%; height:700px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-gridsheet sample with parser and feedback method"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

- Custom parser:

  - ListParser: parses a newline delimited string as a (string) list.

- Feedback functions:

  - onSave: ``setTsv`` is set to render TSV.
  - onChange: ``console.log`` is set to show the changes.

Example4 - Date reloading
-------------------------------

:Project: `react-gridsheet-example4/ <https://github.com/walkframe/docs.walkframe.com/tree/main/source/products/react-gridsheet/examples/example4>`__
:Source: `react-gridsheet-example4/src/App.tsx <https://github.com/walkframe/docs.walkframe.com/blob/main/source/products/react-gridsheet/examples/example4/src/App.tsx>`__

Would be fixed.

- The above sheet is test data.
- The sheet below shows two-factor coverage combinations made from the testdata.
    
  - Pairwise tool: `CoverTable <https://github.com/walkframe/covertable>`__.

Example5 - Limit width, Resize, Multiple sheets
-----------------------------------------------------

:Project: `react-gridsheet-example5/ <https://github.com/walkframe/docs.walkframe.com/tree/main/source/products/react-gridsheet/examples/example5>`__
:Source: `react-gridsheet-example5/src/App.tsx <https://github.com/walkframe/docs.walkframe.com/blob/main/source/products/react-gridsheet/examples/example5/src/App.tsx>`__

.. raw:: html

  <iframe src="/_static/examples/react-gridsheet-example5/"
     style="width:100%; height:700px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-gridsheet sample with parser and feedback method"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

- ``style`` and ``className`` props will be passed.

  - ``{ maxWidth: "100%"}`` prevents the sheet exceeding the parent width.

- ``options.sheetResize`` means `css resize <https://developer.mozilla.org/en-US/docs/Web/CSS/resize>`__ of the sheet.
