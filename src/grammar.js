// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

    const myLexer = require('./lexer.js')
var grammar = {
    Lexer: myLexer,
    ParserRules: [
    {"name": "statement", "symbols": ["var_assign"], "postprocess": id},
    {"name": "statement", "symbols": ["fun_call"], "postprocess": id},
    {"name": "statement", "symbols": ["function_def"], "postprocess": id},
    {"name": "statement", "symbols": ["conditional"]},
    {"name": "statement", "symbols": ["loop"]},
    {"name": "expression", "symbols": [(myLexer.has("string") ? {type: "string"} : string)], "postprocess": id},
    {"name": "expression", "symbols": [(myLexer.has("number") ? {type: "number"} : number)], "postprocess": id},
    {"name": "expression", "symbols": [(myLexer.has("boolean") ? {type: "boolean"} : boolean)], "postprocess": id},
    {"name": "code", "symbols": ["statement"], "postprocess": 
        (data) => {
            return [data[0]];
        }
                },
    {"name": "code", "symbols": ["code", (myLexer.has("NL") ? {type: "NL"} : NL), "statement"], "postprocess": 
        (data) => {
            return [...data[0], data[2]];
        }
                },
    {"name": "var_assign", "symbols": [(myLexer.has("var_declaration") ? {type: "var_declaration"} : var_declaration), (myLexer.has("identifier") ? {type: "identifier"} : identifier), "_", {"literal":"="}, "_", "expression"], "postprocess": 
        (data) => {
            return {
                type: "var_assign",
                var_name: data[1],
                value: data[5]
            }
        }
                },
    {"name": "var_assign", "symbols": [(myLexer.has("var_declaration") ? {type: "var_declaration"} : var_declaration), (myLexer.has("identifier") ? {type: "identifier"} : identifier)]},
    {"name": "args", "symbols": ["expression"], "postprocess": 
        (data) => {
            return [data[0]];
        }
                },
    {"name": "args", "symbols": ["args", "__", "expression"], "postprocess": 
        (data) => {
            return [...data[0], data[2]];
        }
                },
    {"name": "fun_call", "symbols": [{"literal":"call"}, "__", (myLexer.has("identifier") ? {type: "identifier"} : identifier), "_", {"literal":"("}, "_", "args", "_", {"literal":")"}], "postprocess": 
        (data) => {
            return {
                type: "fun_call",
                fun_name: data[2],
                arguments: data[6]
            }
        }
                },
    {"name": "params", "symbols": ["expression"], "postprocess": 
        (data) => {
            return [data[0]];
        }
                },
    {"name": "params", "symbols": ["params", "__", "expression"], "postprocess": 
        (data) => {
            return [...data[0], data[2]];
        }
                },
    {"name": "function_def", "symbols": [{"literal":"fn"}, "__", (myLexer.has("identifier") ? {type: "identifier"} : identifier), "_", {"literal":"("}, "_", "params", "_", {"literal":")"}, "__", (myLexer.has("arrow") ? {type: "arrow"} : arrow), (myLexer.has("NL") ? {type: "NL"} : NL), "code"], "postprocess": 
        (data) => {
            return {
                type: "function_def",
                function_name: data[2],
                parameter: data[6],
                code: data[12]
            }
        }
                },
    {"name": "compare_operator", "symbols": [(myLexer.has("equals") ? {type: "equals"} : equals)]},
    {"name": "compare_operator", "symbols": [(myLexer.has("greaterThanOrEqual") ? {type: "greaterThanOrEqual"} : greaterThanOrEqual)]},
    {"name": "compare_operator", "symbols": [(myLexer.has("lessThanOrEqual") ? {type: "lessThanOrEqual"} : lessThanOrEqual)]},
    {"name": "compare_operator", "symbols": [(myLexer.has("greaterThan") ? {type: "greaterThan"} : greaterThan)]},
    {"name": "compare_operator", "symbols": [(myLexer.has("lessThan") ? {type: "lessThan"} : lessThan)]},
    {"name": "condition", "symbols": [(myLexer.has("identifier") ? {type: "identifier"} : identifier), "_", "compare_operator", "_", "expression"]},
    {"name": "conditional", "symbols": [{"literal":"when"}, "__", "condition", "__", (myLexer.has("arrow") ? {type: "arrow"} : arrow), (myLexer.has("NL") ? {type: "NL"} : NL), "code"], "postprocess": 
        (data) => {
            return {
                type: "conditional",
                condition: data[2],
                code: data[6]
            }
        }
                },
    {"name": "loop", "symbols": [{"literal":"while"}, "__", "condition", "__", (myLexer.has("arrow") ? {type: "arrow"} : arrow), (myLexer.has("NL") ? {type: "NL"} : NL), "code"], "postprocess": 
        (data) => {
            return {
                type: "loop",
                condition: data[2],
                code: data[6]
            }
        }
            },
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", (myLexer.has("WS") ? {type: "WS"} : WS)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"]},
    {"name": "__$ebnf$1", "symbols": [(myLexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", (myLexer.has("WS") ? {type: "WS"} : WS)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"]}
]
  , ParserStart: "statement"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
