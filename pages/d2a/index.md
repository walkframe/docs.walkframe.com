
# D2A
  
d2a provides some utilities for SQLAlchemy with Django.

If you want to use SQLAlchemy instead of Django's QuerySet, this must suit you.

## Requirements
- Python: 3.5 or later.

  - Tested with 3.6, 3.9

- Django: 2.x, 3.x
  
  - Tested with 2.2.9, 3.0.1, 3.1.1

- SQLAlchemy: 1.1 or later.

  - Tested with 1.1.0, 1.4.1


## Installation

```sh
$ pip install d2a -U
```

Add d2a to settings.INSTALLED_APPS.

```python
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
```

![](https://img.shields.io/badge/level-info-blue)
- [Project configuration](/d2a/config)


## Features

- [Code generation](/d2a/features/codegen) (Main feature)
- [Query shortcut](/d2a/features/shortcut)
- [Auto loading](/d2a/features/autoload) (Deprecated since 3.0.x)

![](https://img.shields.io/badge/level-info-blue)
- [GitHub](https://github.com/walkframe/d2a)
- [PyPI](https://pypi.org/project/d2a)
- [History](/d2a/history/)
