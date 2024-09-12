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

🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).

| Name                                                             | Description                                         | 🔧 |
| :--------------------------------------------------------------- | :-------------------------------------------------- | :- |
| [no-react-i18next-import](docs/rules/no-react-i18next-import.md) | Enforce using next-i18next instead of react-i18next | 🔧 |

<!-- end auto-generated rules list -->
