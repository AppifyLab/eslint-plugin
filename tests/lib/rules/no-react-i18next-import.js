/**
 * @fileoverview Enforce using next-i18next instead of react-i18next
 * @author Najmus Sakib
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-react-i18next-import"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-react-i18next-import", rule, {
  valid: [
    // Examples of code that won't trigger a warning
    { code: "import { useTranslation } from 'next-i18next';" },
    { code: "import something from 'other-library';" },
    { code: "import { otherFunction } from 'react-i18next';" }
  ],

  invalid: [
    {
      code: "import { useTranslation } from 'react-i18next';",
      errors: [{ messageId: "noReactI18nextImport" }],
      output: "import { useTranslation } from 'next-i18next';"
    },
    {
      code: "import { useTranslation, otherFunction } from 'react-i18next';",
      errors: [{ messageId: "noReactI18nextImport" }],
      output: "import { useTranslation, otherFunction } from 'next-i18next';"
    }
  ],
});
