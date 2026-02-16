# @ezylab/eslint-plugin

Eslint rules for ezycourse

<p align="center">
  <img alt="Downloads total" src="https://img.shields.io/npm/dt/@ezylab/eslint-plugin?label=Downloads&logo=deezer&logoColor=white&style=flat-square" />
  <a href="https://www.npmjs.com/package/@ezylab/eslint-plugin">
    <img alt="Visit the NPM page" src="https://img.shields.io/npm/v/@ezylab/eslint-plugin?color=orange&logo=npm&logoColor=white&style=flat-square"/>
  </a>
<p/>

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
pnpm add -D eslint
```

or with npm

```sh
npm install --save-dev eslint
```

or with yarn

```sh
yarn add --dev eslint
```

Next, install `@ezylab/eslint-plugin`:

```sh
pnpm add -D @ezylab/eslint-plugin
```

or with npm

```sh
npm install --save-dev @ezylab/eslint-plugin
```

or with yarn

```sh
yarn add --dev @ezylab/eslint-plugin
```

## Usage

Add `@ezylab` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin` part:

```json
{
    "plugins": ["@ezylab"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "@ezylab/rule-name": 2
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
| [no-axios-import](docs/rules/no-axios-import.md)                 | Disallow direct import of axios                     | 🔧 |
| [no-react-i18next-import](docs/rules/no-react-i18next-import.md) | Enforce using next-i18next instead of react-i18next | 🔧 |

<!-- end auto-generated rules list -->
