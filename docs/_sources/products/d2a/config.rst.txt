Configuration
=============
Back to `doc index </products/d2a/>`__

Set ``D2A_CONFIG`` dict in your django `settings`. 
This variable is optional and all keys are also optional.

Example:

.. code-block::

  from django.db.models import CharField, EmailField
  from books.fields import CustomEmailField
  
  D2A_CONFIG = {
      "REL_PARAMS": {
          "*": {
              "backref": "{__back__}",
          },
          "Book.category": {
              "lazy": "joined",
          },
      },
      "COL_PARAMS": {
          "*": {
              "doc": "testtest",
          },
      },
      "TYPE_PARAMS": {
          "*": {
          },
      },
      "TYPES": {
          "Book.title": "default_types.VARCHAR",
      },
      "BLOCKS": {
          "before_importing": "import os",
          "after_importing": "# import finished",
          "before_models": "# start defining models",
          "after_models": "# END OF FILE",
      },
      "MISSING": CharField,
      "ALIASES": {
          CustomEmailField: EmailField,
      },
      "AUTOLOAD": False,
  }


ALIASES
------------------
:type: ``dict[django.db.models.fields.Field, django.db.models.fields.Field]``

If you are using custom django field, `d2a` is not able to resolve the type as it is.

Set the field to key and 'a field that you want it to be interpreted' to value in ``"ALIASES"`` dict.

Example:

.. code-block::

  from django.db import models


  class CustomEmailField(models.EmailField):
      pass

  D2A_CONFIG = {
      "ALIASES": {
          CustomEmailField: models.EmailField,
      },
  }


AUTOLOAD
------------------
:type: ``dict``

.. warning::

  This option is deprecated.

This option (any dict) enables Auto loading mode.

Example:

.. code-block::

  D2A_CONFIG = {
      'AUTOLOAD': {
          'module': 'modelsa',  # module name
          'db_type': "mysql",  # database type
      },
  }

Then you can import the auto loaded models as a module.

.. note::

  - `Auto loading </products/d2a/features/autoload.html>`__ (Deprecated since 3.0.x)


BLOCKS
------------------
:type: ``dict[str, str]``

This is a template context for `Code generation </products/d2a/features/codegen.html>`__ in a word.

The context values will be rendered if its key is referred in a template.

Current original template is `here <https://github.com/walkframe/d2a/blob/master/project_postgresql/original_template.tmpl>`__.


COL_PARAMS
------------------
:type: ``dict[str, dict[str, any]]``

This option updates args that are going to be specified for the ``sqlalchemy.sql.schema.Column``.

Example:

.. code-block::

  D2A_CONFIG = {
      "COL_PARAMS": {
          "*": {
              "doc": "testtest",
          },
          "Book.title": {
              "server_default": "val",
          }
      },
  }


- ``*`` matches all columns.
- ``{Model}.{column}`` matches the column of the Model.

  - ``Book.title`` matches `title` column of `Book`.

.. note::

  - https://docs.sqlalchemy.org/en/14/core/metadata.html#sqlalchemy.schema.Column.__init__

.. warning::

  This option does not work in AUTOLOAD mode.


MISSING
------------------
:type: ``django.db.models.fields.Field``

This option complements the field that did not resolve type with the specified field.

Example:

.. code-block::

  from django.db.models import CharField
  
  D2A_CONFIG = {
      "MISSING": CharField,
  }


NAME_FORMATTER
------------------
NAME_FORMATTER is a function that makes sqlalchemy model  name from django model.
It requires 1 positional string argument.

The default is a PascalCase transformation,
with the same name as the django model except for the intermediate tables that are implicitly created.

Example:

.. code-block::
  
  D2A_CONFIG = {
      "NAME_FORMATTER": str.lower,
  }


REL_PARAMS
------------------
:type: ``dict[str, dict[str, any]]``

This option updates args that are going to be specified for the ``sqlalchemy.orm.relationship``.


.. code-block::

  D2A_CONFIG = {
      "REL_PARAMS": {
          "*": {
              "backref": "{__back__}",
          },
          "Book.category": {
              "lazy": "joined",
          },
      },
  }

- ``*`` matches all fields.
- ``{Model}.{field}`` matches the field of the Model.

  - ``Book.category`` matches `category` field of `Book`.

- "{}" brackets in the values will be expanded by ``str.format`` method. Available keys are follows:

  - ``__back__``
  - ``__back_target__``
  - ``__target__``
  - ``__model__``
  - ``__related_model__``

.. note::

  - https://docs.sqlalchemy.org/en/13/orm/relationship_api.html#sqlalchemy.orm.relationship

.. warning::

  This option does not work in AUTOLOAD mode.


TYPE_PARAMS
------------------
:type: ``dict[str, dict[str, any]]``

This option updates args that are going to be specified for the ``sqlalchemy.sql.type_api.TypeEngine``.

.. code-block::

  D2A_CONFIG = {
      "TYPE_PARAMS": {
          "Book.title": {
              "collation": "utf8",
          },
      },
  }

- ``*`` matches all columns.
- ``{Model}.{column}`` matches the column of the Model.

  - ``Book.title`` matches `title` column of `Book`.

.. note::

  - https://docs.sqlalchemy.org/en/13/core/type_basics.html#generic-types

.. warning::

  This option does not work in AUTOLOAD mode.

TYPES
------------------
:type: ``dict[str, str]``

This option overrides the type.

.. code-block::

  D2A_CONFIG = {
      "TYPES": {
          "Book.title": "default_types.VARCHAR",
      },
  }

- ``*`` matches all columns.
- ``{Model}.{column}`` matches the column of the Model.

  - ``Book.title`` matches `title` column of `Book`.

.. warning::

  This option does not work in AUTOLOAD mode.
