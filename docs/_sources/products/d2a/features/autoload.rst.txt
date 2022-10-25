Auto loading
============
Back to `doc index </products/d2a/>`__

.. warning::

  This feature is deprecated.

  It will be removed in version 4.x.


Auto loading will be enabled when ``D2A_CONFIG["AUTOLOAD"]`` is specified.

Example:

.. code-block::

  # This variable can be omitted.
  D2A_CONFIG = {
      'AUTOLOAD': { # optional
          # module name: It can be used different module name from `models_sqla`.
          'module': 'models_sqla',  # optional, default: 'models_sqla'
          # transfer function's args after 'exports' arg.
          'option': {  # optional
              'db_type': 'postgresql',  # default: 'default'
              'back_type': 'backref',  # default: 'backref'
          }
      },
  }

All apps
-----------------
You are ready.

Then you can import sqlalchemy model on every apps.

.. note::

  It differs from `Code generation </products/d2a/features/codegen.html>`__.

  Auto loaded models will save on in-memory and will not be output to a file.

Example:

.. code-block::

  >>> from books import models_sqla
  >>> models_sqla.  # tab completion
  models_sqla.Author(            models_sqla.BookCategory(      models_sqla.CategoryRelation(  models_sqla.transfer(
  models_sqla.Book(              models_sqla.Category(          models_sqla.models
  
  >>> models_sqla.Book
  <class 'd2a.book'>
  
  >>> models_sqla.Book.  # tab completion
  models_sqla.Book.author       models_sqla.Book.content      models_sqla.Book.metadata     models_sqla.Book.tags
  models_sqla.Book.author_id    models_sqla.Book.description  models_sqla.Book.mro(         models_sqla.Book.title
  models_sqla.Book.category     models_sqla.Book.id           models_sqla.Book.price
  # SQL Expression schema
  >>> models_sqla.Book.__table__
  Table(
    'book', MetaData(bind=None),
    Column('id', UUID(), table=<book>, primary_key=True, nullable=False, default=ColumnDefault(<function uuid4 at 0x7f3cebe7e598>)),
    Column('price', JSON(astext_type=Text()), table=<book>, nullable=False),
    Column('title', VARCHAR(length=255), table=<book>, nullable=False),
    Column('description', TEXT(), table=<book>),
    Column('author_id', INTEGER(), ForeignKey('author.id'), table=<book>),
    Column('content', BYTEA(), table=<book>, nullable=False),
    Column('tags', ARRAY(VARCHAR()), table=<book>, nullable=False),
    schema=None
  )


Per models module
-----------------
If you want to create a module manually, create a `models_sqla.py` file in an app as follows:

.. code-block::

  from d2a import transfer
  from . import models
  transfer(models, globals())

When `models_sqla.py` exists, auto module creation will be omitted.

And if you create every `models_sqla.py` manually,
it is unnecessary to set `d2a` to ``settings.INSTALLED_APPS``.

Example:

- `project_postgresql/books/models_sqla.py <https://github.com/walkframe/d2a/blob/master/project_postgresql/books/models_sqla.py>`_
- You can omit specifying `db_type`, then it automatically detects a database type from ``settings.DATABASES['default']``.

  - Now `postgresql`, `mysql` and `oracle` are allowed,
    the other types will be converted to the following types as ``default`` type: 
    `sqlalchemy/types.py <https://github.com/zzzeek/sqlalchemy/blob/master/lib/sqlalchemy/types.py>`_

Per model
---------
If you just want to convert one model, you should use `declare` function.

Example:

.. code:: python

  >>> from d2a import declare
  >>> from sales.models import Sales
  >>> sales = declare(Sales)
  >>> sales
  <class 'd2a.sales'>
  
  >>> sales.__table__
  Table(
    'sales', MetaData(bind=None), 
    Column('id', BIGINT(), table=<sales>, primary_key=True, nullable=False), 
    Column('book_id', UUID(), ForeignKey('book.id'), table=<sales>, nullable=False), 
    Column('sold', TIMESTAMP(), table=<sales>, nullable=False), 
    Column('reservation', INTERVAL(), table=<sales>), 
    Column('source', INET(), table=<sales>), 
    schema=None
  )
  
  >>> sales.
  sales.book         sales.id           sales.mro(         sales.sold
  sales.book_id      sales.metadata     sales.reservation  sales.source

