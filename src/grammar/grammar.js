// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

    const myLexer = require('./lexer.js')
var grammar = {
    Lexer: myLexer,
    ParserRules: [
    {"name": "main", "symbols": ["statements"], "postprocess": 
        (node) => {
            return {
                main_program: node[0]
            }
        }                   
                             },
    {"name": "statements$ebnf$1", "symbols": []},
    {"name": "statements$ebnf$1", "symbols": ["statements$ebnf$1", "statement"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "statements", "symbols": ["statements$ebnf$1"], "postprocess":  (node) =>{ return {statements: node[0]}}
        
         },
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", (myLexer.has("WS") ? {type: "WS"} : WS)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": id},
    {"name": "__$ebnf$1", "symbols": [(myLexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", (myLexer.has("WS") ? {type: "WS"} : WS)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": id},
    {"name": "statement$ebnf$1", "symbols": []},
    {"name": "statement$ebnf$1", "symbols": ["statement$ebnf$1", (myLexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "statement", "symbols": ["assignment", "statement$ebnf$1"], "postprocess": id},
    {"name": "statement", "symbols": ["conditional"], "postprocess": id},
    {"name": "statement", "symbols": ["loop"], "postprocess": id},
    {"name": "statement", "symbols": ["fn"], "postprocess": id},
    {"name": "statement", "symbols": ["print_statement"], "postprocess": id},
    {"name": "statement", "symbols": ["fn_call"], "postprocess": id},
    {"name": "assignment", "symbols": [(myLexer.has("identifier") ? {type: "identifier"} : identifier), "_", (myLexer.has("assignment_symbol") ? {type: "assignment_symbol"} : assignment_symbol), "_", "expression"], "postprocess": 
        (node) => {
            return {
                type: "var_assign",
                var_name : node[0],
                var_value : node[4]
            }
        }
                    },
    {"name": "expression", "symbols": [(myLexer.has("number") ? {type: "number"} : number)], "postprocess": id},
    {"name": "expression", "symbols": [(myLexer.has("identifier") ? {type: "identifier"} : identifier)], "postprocess": id},
    {"name": "expression", "symbols": [(myLexer.has("string") ? {type: "string"} : string)], "postprocess": id},
    {"name": "expression", "symbols": ["fn_call"]},
    {"name": "logical_operators", "symbols": [(myLexer.has("greater_or_equal") ? {type: "greater_or_equal"} : greater_or_equal)], "postprocess": id},
    {"name": "logical_operators", "symbols": [(myLexer.has("less_or_equal") ? {type: "less_or_equal"} : less_or_equal)], "postprocess": id},
    {"name": "logical_operators", "symbols": [(myLexer.has("greater") ? {type: "greater"} : greater)], "postprocess": id},
    {"name": "logical_operators", "symbols": [(myLexer.has("less") ? {type: "less"} : less)], "postprocess": id},
    {"name": "logical_operators", "symbols": [(myLexer.has("equal") ? {type: "equal"} : equal)], "postprocess": id},
    {"name": "condition", "symbols": ["expression", "_", "logical_operators", "_", "expression"], "postprocess": 
        (node) => {
            return {
                 exp1: node[0],
                 operator: node[2],
                 exp2: node[4]
                }
            }   
                        },
    {"name": "param", "symbols": [(myLexer.has("string") ? {type: "string"} : string)], "postprocess": id},
    {"name": "param", "symbols": [(myLexer.has("number") ? {type: "number"} : number)], "postprocess": id},
    {"name": "param", "symbols": [(myLexer.has("identifier") ? {type: "identifier"} : identifier)], "postprocess": id},
    {"name": "params", "symbols": ["param"], "postprocess": id},
    {"name": "params", "symbols": ["params", "__", "param"], "postprocess": 
        (node) => {
            return {
                type: "params",
                value: [node[0], node[2]]
            }
        }
                    },
    {"name": "conditional$ebnf$1", "symbols": []},
    {"name": "conditional$ebnf$1", "symbols": ["conditional$ebnf$1", (myLexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "conditional", "symbols": [(myLexer.has("conditional") ? {type: "conditional"} : conditional), "_", "condition", "_", (myLexer.has("arrow") ? {type: "arrow"} : arrow), "_", "statements", (myLexer.has("end") ? {type: "end"} : end), "conditional$ebnf$1"], "postprocess": 
        (node) => {
            return {
                type: "condition_statement",
                condition: node[2],
                body: node[6]
            }
        }
        },
    {"name": "loop$ebnf$1", "symbols": []},
    {"name": "loop$ebnf$1", "symbols": ["loop$ebnf$1", (myLexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "loop", "symbols": [(myLexer.has("loop") ? {type: "loop"} : loop), "_", "condition", "_", (myLexer.has("arrow") ? {type: "arrow"} : arrow), "_", "statements", (myLexer.has("end") ? {type: "end"} : end), "loop$ebnf$1"], "postprocess": 
        (node) => {
            return {
                type: "loop_statement",
                condition: node[2],
                body: node[6]
            }
        }
                    },
    {"name": "fn$ebnf$1", "symbols": []},
    {"name": "fn$ebnf$1", "symbols": ["fn$ebnf$1", "params"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "fn$ebnf$2", "symbols": []},
    {"name": "fn$ebnf$2", "symbols": ["fn$ebnf$2", (myLexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "fn", "symbols": [{"literal":"f"}, "__", (myLexer.has("identifier") ? {type: "identifier"} : identifier), "_", (myLexer.has("openTag") ? {type: "openTag"} : openTag), "_", "fn$ebnf$1", "_", (myLexer.has("closeTag") ? {type: "closeTag"} : closeTag), "_", (myLexer.has("arrow") ? {type: "arrow"} : arrow), "__", "statements", (myLexer.has("end") ? {type: "end"} : end), "fn$ebnf$2"], "postprocess": 
            (node) => {
                return {
                type: "fn",
                fn_name: node[2],
                params: node[6],
                body: node[12]
            }
        }
                    },
    {"name": "print_statement$ebnf$1", "symbols": []},
    {"name": "print_statement$ebnf$1", "symbols": ["print_statement$ebnf$1", (myLexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "print_statement", "symbols": [(myLexer.has("write") ? {type: "write"} : write), (myLexer.has("openTag") ? {type: "openTag"} : openTag), "expression", (myLexer.has("closeTag") ? {type: "closeTag"} : closeTag), "print_statement$ebnf$1"], "postprocess": 
        (node) => {
            return {
                type: "print_statement",
                printed_value: node[2]
            }
        }
                    },
    {"name": "fn_call$ebnf$1", "symbols": []},
    {"name": "fn_call$ebnf$1", "symbols": ["fn_call$ebnf$1", "params"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "fn_call$ebnf$2", "symbols": []},
    {"name": "fn_call$ebnf$2", "symbols": ["fn_call$ebnf$2", (myLexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "fn_call", "symbols": [{"literal":"c"}, "__", (myLexer.has("identifier") ? {type: "identifier"} : identifier), "_", (myLexer.has("openTag") ? {type: "openTag"} : openTag), "_", "fn_call$ebnf$1", "_", (myLexer.has("closeTag") ? {type: "closeTag"} : closeTag), "fn_call$ebnf$2"], "postprocess": 
        (node) => {
            return {
                type: "fn_call",
                fn_name: node[2],
                params: node[6]
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
