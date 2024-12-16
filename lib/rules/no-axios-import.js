/**
 * @fileoverview Disallow direct import of axios
 * @author Najmus Sakib
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem", 
    docs: {
      description: "Disallow direct import of axios",
      category: "Best Practices",
      recommended: false,
      url: 'https://github.com/AppifyLab/eslint-plugin/blob/main/docs/rules/no-axios-import.md', 
    },
    fixable: 'code', 
    schema: [
      {
        type: 'object',
        properties: {
          importPath: {
            type: 'string',
            default: 'Utils/api'
          }
        },
        additionalProperties: false
      }

    ], 
    messages: {
       noAxiosImport: "Direct import of axios is not allowed. Use custom instance from '{{importPath}}' instead."
    },
  },

  create(context) {
    const options = context.options[0] || {};
    const importPath = options.importPath || 'Utils/api';

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      ImportDeclaration(node) {
        if (node.source.value === 'axios') {
          context.report({
            node,
            messageId: "noAxiosImport",
            data: {
              importPath
            },
            fix(fixer) {
              return fixer.replaceText(node.source, `'${importPath}'`);
            }
          });
        }
      }
    };
  },
};
