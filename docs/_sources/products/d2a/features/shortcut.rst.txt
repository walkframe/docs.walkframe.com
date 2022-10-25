Query shortcut
======================
Back to `doc index </products/d2a/>`__

There are roughly two type functions.

- `Expression <#expression>`__
- `ORM <#orm>`__

Expression
-------------------------
There are two functions.

:query_expression: To retrieve `SELECT` results, and returns a list containing record.
:execute_expression: To execute `INSERT`, `DELETE`, `UPDATE` statements, and returns num of records having been affected.

.. code-block::

  >>> from sqlalchemy import (
  ...     select,
  ...     insert,
  ... )
  
  >>> from d2a import query_expression, execute_expression

  >>> from models_sqla import Author
  
  >>> AuthorTable = Author.__table__
  
  >>> records = [
  ...     {'name': 'a', 'age': 10},
  ...     {'name': 'b', 'age': 30},
  ...     {'name': 'c', 'age': 20},
  ... ]
  
  >>> # insert
  >>> stmt = insert(AuthorTable).values(records)
  >>> execute_expression(stmt)
  3
  
  >>> # select
  >>> stmt = select([
  ...     AuthorTable.c.id,
  ...     AuthorTable.c.name,
  ...     AuthorTable.c.age,
  ... ]).select_from(AuthorTable).order_by(AuthorTable.c.age)

  >>> query_expression(stmt)
  [
    OrderedDict([('id', 12), ('name', 'a'), ('age', 10)]),
    OrderedDict([('id', 14), ('name', 'c'), ('age', 20)]),
    OrderedDict([('id', 13), ('name', 'b'), ('age', 30)])
  ]

  >>> # record as tuple
  >>> query_expression(stmt, as_col_dict=False)
  [(12, 'a', 10), (14, 'c', 20), (13, 'b', 30)]

  >>> query_expression(stmt, as_col_dict=False, debug={'printer': print, 'show_explain': True, 'sql_format': True})
  ====================================================================================================
  SELECT author.id,
         author.name,
         author.age
  FROM author
  ORDER BY author.age
  ====================================================================================================
  Sort  (cost=16.39..16.74 rows=140 width=522) (actual time=0.027..0.028 rows=18 loops=1)
    Sort Key: age
    Sort Method: quicksort  Memory: 25kB
    ->  Seq Scan on author  (cost=0.00..11.40 rows=140 width=522) (actual time=0.007..0.009 rows=18 loops=1)
  Planning time: 0.072 ms
  Execution time: 0.047 ms
  [(12, 'a', 10), (14, 'c', 20), (13, 'b', 30)]

.. note::

  I added argument of ``query_expression()`` to see debugging information.

  Specify options as dict type like the following:

  .. code-block::

    query_expression(stmt, debug={  # all options can be skipped.
        'show_sql': True, # if showing the sql query or not.
        'show_explain': False, # if showing explain for the sql query or not.
        'sql_format': False, # if formatting the sql query or not.
        'sql_reindent': True, # if setting indent the sql query or not.
        'sql_keyword_case': 'upper', # A rule converting reserved words.
        'explain_prefix': depends on the database type. unless you specify it, an appropriate prefix will be automatically used.
        'printer': printer, # printing method. Try to use `logger.info` function for example.
        'delimiter': '=' * 100, # characters dividing debug informations.
        'database': 'default' # django database
    })

  Default is ``{}`` (An empty dict means disabling debug.)

ORM
-------------------------
There is a function named `make_session` for ORM mode.

.. code-block::

  >>> from d2a import make_session
  >>> from models_sqla import Author
  
  >>> with make_session() as session:
  ...     # it commits and flushes automatically when the scope exits.
  ...     a = Author()
  ...     a.name = 'righ'
  ...     a.age = 30
  ...     session.add(a)
  ...
  >>> with make_session() as session:
  ...     # when the session was rolled back or causes some exception in the context,
  ...     # it won't register records in the session.
  ...     a = Author()
  ...     a.name = 'teruhiko'
  ...     a.age = 85
  ...     session.add(a)
  ...     session.rollback()
  ...
  >>> with make_session() as session:
  ...     session.query(Author.name, Author.age).all()
  ...
  [('righ', 30)]

It receives the following arguments:

:engine: engine object or database-type (**string**) (default: None). When it is omitted, it guesses database type and gets an engine automatically.
:autoflush: It is the same as `sessionmaker <https://docs.sqlalchemy.org/en/latest/orm/session_api.html#session-and-sessionmaker>`__ (default: True)
:autocommit:  It is the same as `sessionmaker <https://docs.sqlalchemy.org/en/latest/orm/session_api.html#session-and-sessionmaker>`__ (default: False)
:expire_on_commit: It is the same as `sessionmaker <https://docs.sqlalchemy.org/en/latest/orm/session_api.html#session-and-sessionmaker>`__ (default: True)
:info: It is the same as `sessionmaker <https://docs.sqlalchemy.org/en/latest/orm/session_api.html#session-and-sessionmaker>`__ (default: None)

All arguments can be omitted.

.. warning::

  Supported auto-detecting db types are the following:
  
  - PostgreSQL
  - MySQL
  - Oracle
