/**
 * @fileoverview prevents using indexOf !== -1
 * @author Marwan
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/es2015-use-includes"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("es2015-use-includes", rule, {

    valid: [

        "if ([1,2,3].includes(3)) {}"
    ],

    invalid: [
        {
            code: "if ([1,2,3].indexOf(3) !== -1) {}",
            errors: [{
                message: "use includes instead of indexOf",
                type: "IfStatement"
            }]
        }
    ]
});
