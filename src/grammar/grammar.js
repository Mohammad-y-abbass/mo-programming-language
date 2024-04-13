// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

    const myLexer = require('./lexer.js')
var grammar = {
    Lexer: myLexer,
    ParserRules: [
    {"name": "main", "symbols": ["statements"], "postprocess": 
        (d) => {
            return {
                main_program: d[0]
            }
        }                   
                             },
    {"name": "statements", "symbols": ["statement", (myLexer.has("NL") ? {type: "NL"} : NL)], "postprocess": (d) => { return d[0]; }},
    {"name": "statements", "symbols": ["statements", "statement", (myLexer.has("NL") ? {type: "NL"} : NL)], "postprocess": (d) => { return [...d] }},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", (myLexer.has("WS") ? {type: "WS"} : WS)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": id},
    {"name": "__$ebnf$1", "symbols": [(myLexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", (myLexer.has("WS") ? {type: "WS"} : WS)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": id},
    {"name": "statement", "symbols": ["assignment"], "postprocess": id},
    {"name": "statement", "symbols": ["conditional"], "postprocess": id},
    {"name": "statement", "symbols": ["loop"], "postprocess": id},
    {"name": "statement", "symbols": ["fn"], "postprocess": id},
    {"name": "assignment", "symbols": [(myLexer.has("identifier") ? {type: "identifier"} : identifier), "_", (myLexer.has("assignment_symbol") ? {type: "assignment_symbol"} : assignment_symbol), "_", "expression"], "postprocess": 
        (d) => {
            return {
                type: "var_assign",
                var_name : d[0],
                var_value : d[4]
            }
        }
                    },
    {"name": "expression", "symbols": [(myLexer.has("number") ? {type: "number"} : number)], "postprocess": id},
    {"name": "expression", "symbols": [(myLexer.has("identifier") ? {type: "identifier"} : identifier)], "postprocess": id},
    {"name": "expression", "symbols": [(myLexer.has("string") ? {type: "string"} : string)], "postprocess": id},
    {"name": "logical_operators", "symbols": [(myLexer.has("greater_or_equal") ? {type: "greater_or_equal"} : greater_or_equal)], "postprocess": id},
    {"name": "logical_operators", "symbols": [(myLexer.has("less_or_equal") ? {type: "less_or_equal"} : less_or_equal)], "postprocess": id},
    {"name": "logical_operators", "symbols": [(myLexer.has("greater") ? {type: "greater"} : greater)], "postprocess": id},
    {"name": "logical_operators", "symbols": [(myLexer.has("less") ? {type: "less"} : less)], "postprocess": id},
    {"name": "logical_operators", "symbols": [(myLexer.has("equal") ? {type: "equal"} : equal)], "postprocess": id},
    {"name": "condition", "symbols": ["expression", "_", "logical_operators", "_", "expression"], "postprocess": 
        (d) => {
            return {
                 exp1: d[0],
                 operator: d[2],
                 exp2: d[4]
                }
            }   
                        },
    {"name": "param", "symbols": [(myLexer.has("string") ? {type: "string"} : string)], "postprocess": id},
    {"name": "param", "symbols": [(myLexer.has("number") ? {type: "number"} : number)], "postprocess": id},
    {"name": "param", "symbols": [(myLexer.has("identifier") ? {type: "identifier"} : identifier)], "postprocess": id},
    {"name": "params", "symbols": ["param"], "postprocess": id},
    {"name": "conditional", "symbols": [(myLexer.has("conditional") ? {type: "conditional"} : conditional), "_", "condition", "_", (myLexer.has("arrow") ? {type: "arrow"} : arrow), "_", "statement"], "postprocess": 
        (d) => {
            return {
                type: "condition_statement",
                condition: d[2],
                body: d[6]
            }
        }
        },
    {"name": "loop", "symbols": [(myLexer.has("loop") ? {type: "loop"} : loop), "_", "condition", "_", (myLexer.has("arrow") ? {type: "arrow"} : arrow), "_", "statement", (myLexer.has("NL") ? {type: "NL"} : NL)], "postprocess": 
        (d) => {
            return {
                type: "loop_statement",
                condition: d[2],
                body: d[6]
            }
        }
                    },
    {"name": "fn", "symbols": [{"literal":"f"}, "__", (myLexer.has("identifier") ? {type: "identifier"} : identifier), "_", (myLexer.has("leftParan") ? {type: "leftParan"} : leftParan), "_", "params", "_", (myLexer.has("rightParan") ? {type: "rightParan"} : rightParan), "_", (myLexer.has("arrow") ? {type: "arrow"} : arrow), "__", "statement", (myLexer.has("NL") ? {type: "NL"} : NL)], "postprocess": 
            (d) => {
                return {
                type: "fn",
                fn_name: d[2],
                params: d[6],
                body: d[12]
            }
        }
                    }
]
  , ParserStart: "main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
