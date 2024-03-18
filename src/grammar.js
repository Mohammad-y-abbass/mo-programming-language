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
    {"name": "expression", "symbols": [(myLexer.has("string") ? {type: "string"} : string)], "postprocess": id},
    {"name": "expression", "symbols": [(myLexer.has("number") ? {type: "number"} : number)], "postprocess": id},
    {"name": "expression", "symbols": [(myLexer.has("boolean") ? {type: "boolean"} : boolean)], "postprocess": id},
    {"name": "var_assign", "symbols": [(myLexer.has("var_declaration") ? {type: "var_declaration"} : var_declaration), (myLexer.has("identifier") ? {type: "identifier"} : identifier), "_", {"literal":"="}, "_", "expression"], "postprocess": 
        (data) => {
            return {
                type: "var_assign",
                var_name: data[1],
                value: data[5]
            }
        }
                },
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
    {"name": "fun_call", "symbols": [(myLexer.has("identifier") ? {type: "identifier"} : identifier), "_", {"literal":"("}, "_", "args", "_", {"literal":")"}], "postprocess": 
        (data) => {
            return {
                type: "fun_call",
                fun_name: data[0],
                arguments: data[4]
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
