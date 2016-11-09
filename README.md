# eslint-plugin-es2015-use-includes

does not allow indexOf !== -1

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-es2015-use-includes`:

```
$ npm install eslint-plugin-es2015-use-includes --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-es2015-use-includes` globally.

## Usage

Add `es2015-use-includes` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "es2015-use-includes"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "es2015-use-includes/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here
