/**
 * @fileoverview prevents using indexOf !== -1
 * @author Marwan
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "prevents using indexOf !== -1",
            category: "style lint",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {
        return {
          "IfStatement": function(node) {
            var hasIndexOf = node.test.left.callee.property.name == 'indexOf';
            var isNegatingOperator = node.test.operator == '!==';
            var rightHandSideIsNegativeOne = node.test.right.operator == '-' && node.test.right.argument.value == 1;

            try {
              if (hasIndexOf && isNegatingOperator && rightHandSideIsNegativeOne) {
                context.report(node, 'use includes instead of indexOf');
              }
            } catch (e) {
            }
          }
        };
    }
};
