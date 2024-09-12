# eslint-plugin-eslint-plugin

Eslint rules for ezycourse

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `@ezycourse/eslint-plugin`:

```sh
npm install @ezycourse/eslint-plugin --save-dev
```

## Usage

Add `@ezycourse` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin` part:

```json
{
    "plugins": [
        "@ezycourse"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "@ezycourse/rule-name": 2
    }
}
```

## Configurations

<!-- begin auto-generated configs list -->
TODO: Run eslint-doc-generator to generate the configs list (or delete this section if no configs are offered).
<!-- end auto-generated configs list -->

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->
