/**
 * @fileoverview Enforce using next-i18next instead of react-i18next
 * @author Najmus Sakib
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: "Enforce using next-i18next instead of react-i18next",
      category: "Best Practices",
      recommended: false,
      url: 'https://github.com/AppifyLab/eslint-plugin/blob/main/docs/rules/no-react-i18next-import.md',
    },
    fixable: 'code', // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
       noReactI18nextImport: "Please use useTranslation from next-i18next instead of react-i18next"
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
      // visitor functions for different types of nodes
      ImportDeclaration(node) {
        if (node.source.value === 'react-i18next') {
          const useTranslationImport = node.specifiers.find(
            specifier => specifier.imported && specifier.imported.name === 'useTranslation'
          );

          if (useTranslationImport) {
            context.report({
              node,
              messageId: "noReactI18nextImport",
              fix(fixer) {
                return fixer.replaceText(node.source, "'next-i18next'");
              }
            });
          }
        }
      }
    };
  },
};
