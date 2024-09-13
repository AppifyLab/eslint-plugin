# Disallow direct import of axios (`@ezycourse/no-axios-import`)

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

Disallows direct import of axios and suggests using 'Utils/api' instead.

## Rule Details

This rule aims to prevent direct imports of axios.

Examples of **incorrect** code for this rule:

```ts
import axios from 'axios';
```

Examples of **correct** code for this rule:

```ts
import callApi from 'Utils/api';

```

## When Not To Use It

If you think that it is fine to use axios directly in your code, you can disable this rule.

## Further Reading

If there are other links that describe the issue this rule addresses, please include them here in a bulleted list.
