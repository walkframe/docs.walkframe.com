.. toctree::
   :maxdepth: 2

D2A
===============

.. raw:: html

  <!-- Place this tag where you want the button to render. -->
  <a class="github-button" href="https://github.com/walkframe/d2a" data-icon="octicon-star" aria-label="Star walkframe/d2a on GitHub">Star</a>
  <script async defer src="https://buttons.github.io/buttons.js"></script>
  <a href="https://github.com/walkframe/d2a/actions"><img src="https://github.com/walkframe/d2a/workflows/build/badge.svg?branch=master" /></a>
  <a href="https://pypi.org/project/d2a/"><img src="https://img.shields.io/pypi/dm/d2a.svg" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg" /></a>
  
d2a provides some utilities for SQLAlchemy with Django.

If you want to use SQLAlchemy instead of Django's QuerySet, this must suit you.

Requirements
---------------
- Python: 3.5 or later.

  - Tested with 3.6, 3.9

- Django: 2.x, 3.x
  
  - Tested with 2.2.9, 3.0.1, 3.1.1

- SQLAlchemy: 1.1 or later.

  - Tested with 1.1.0, 1.4.1


Installation
-------------------------

.. code-block:: shell

  $ pip install d2a -U


Add d2a to settings.INSTALLED_APPS.

.. code-block::

  INSTALLED_APPS = [
      'django.contrib.admin',
      'django.contrib.auth',
      'django.contrib.contenttypes',
      'django.contrib.sessions',
      'django.contrib.messages',
      'django.contrib.staticfiles',
      # :
      # :
      'd2a',
  ]

.. note::

  - `Project configuration </products/d2a/config.html>`__


Features
-------------------------

- `Code generation </products/d2a/features/codegen.html>`__ (Main feature)
- `Query shortcut </products/d2a/features/shortcut.html>`__
- `Auto loading </products/d2a/features/autoload.html>`__ (Deprecated since 3.0.x)

.. note:: Other links

  - `GitHub <https://github.com/walkframe/d2a>`__
  - `PyPI <https://pypi.org/project/d2a>`__
  - `History </products/d2a/history/>`__
