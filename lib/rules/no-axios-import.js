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
    schema: [], // Add a schema if the rule has options
    messages: {
       noAxiosImport: "Direct import of axios is not allowed. Use callApi from 'Utils/api' instead."
    },
  },

  create(context) {
    // variables should be defined here

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
            fix(fixer) {
              return fixer.replaceText(node.source, "'Utils/api'");
            }
          });
        }
      }
    };
  },
};
