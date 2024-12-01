/**
 * @fileoverview Disallow direct import of axios
 * @author Najmus Sakib
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-axios-import"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-axios-import", rule, {
  valid: [
    { code: "import callApi from 'Utils/api';" },
    { code: "import axios from 'Utils/api';" },
    { code: "import something from 'other-library';" }
  ],

  invalid: [
    {
      code: "import axios from 'axios';",
      errors: [{ messageId: 'noAxiosImport' }],
      output: "import axios from 'Utils/api';"
    }
  ],
});
