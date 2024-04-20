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
    {"name": "statement", "symbols": ["_", "assignment", "statement$ebnf$1"], "postprocess": 
        (node) => {
            return node[1]   
        }
                    },
    {"name": "statement", "symbols": ["_", "conditional"], "postprocess": 
        (node) => {
            return node[1]   
        }
                    },
    {"name": "statement", "symbols": ["_", "loop"], "postprocess": 
        (node) => {
            return node[1]   
        }
                    },
    {"name": "statement", "symbols": ["_", "fn"], "postprocess": 
        (node) => {
            return node[1]   
        }
                    },
    {"name": "statement", "symbols": ["_", "print_statement"], "postprocess": 
        (node) => {
            return node[1]  
        }
                    },
    {"name": "statement", "symbols": ["_", "fn_call"], "postprocess": 
        (node) => {
            return node[1]   
        }
                    },
    {"name": "statement", "symbols": ["_", "for_loop"], "postprocess": 
        (node) => {
            return node[1]   
        }
                    },
    {"name": "statement", "symbols": ["_", "access_array_element"], "postprocess": 
        (node) => {
            return node[1]   
        }
                    },
    {"name": "statement", "symbols": ["_", "update_array_element"], "postprocess": 
        (node) => {
            return node[1]   
        }
                    },
    {"name": "statement", "symbols": ["_", "add_element_to_end_of_array"], "postprocess": 
        (node) => {
            return node[1]   
        }
                    },
    {"name": "statement", "symbols": ["_", "remove_element_from_end_of_array"], "postprocess": 
        (node) => {
            return node[1]   
        }
                    },
    {"name": "statement", "symbols": ["_", "add_element_to_end_of_array"], "postprocess": 
        (node) => {
            return node[1]   
        }
                    },
    {"name": "statement", "symbols": ["_", "add_element_to_start_of_array"], "postprocess": 
        (node) => {
            return node[1]   
        }
                    },
    {"name": "statement", "symbols": ["_", "remove_element_from_start_of_array"], "postprocess": 
        (node) => {
            return node[1]   
        }
                    },
    {"name": "statement", "symbols": ["_", "array_def"], "postprocess": 
        (node) => {
            return node[1]   
        }
                    },
    {"name": "statement", "symbols": ["_", "var_length"], "postprocess": 
        (node) => {
            return node[1]   
        }
                    },
    {"name": "statement", "symbols": ["_", "increment_by_one"], "postprocess": 
        (node) => {
            return node[1]   
        }
                    },
    {"name": "statement", "symbols": ["_", "decrement_by_one"], "postprocess": 
        (node) => {
            return node[1]   
        }
                    },
    {"name": "statement", "symbols": ["_", "display_array_elements"], "postprocess": 
        (node) => {
            return node[1]   
        }
                    },
    {"name": "statement", "symbols": ["comment"], "postprocess": id},
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
    {"name": "expression", "symbols": ["access_array_element"], "postprocess": id},
    {"name": "expression", "symbols": [(myLexer.has("identifier") ? {type: "identifier"} : identifier)], "postprocess": id},
    {"name": "expression", "symbols": [(myLexer.has("string") ? {type: "string"} : string)], "postprocess": id},
    {"name": "expression", "symbols": ["fn_call"]},
    {"name": "expression", "symbols": ["var_length"], "postprocess": id},
    {"name": "expression", "symbols": ["current_index"], "postprocess": id},
    {"name": "expression", "symbols": ["boolean"], "postprocess": id},
    {"name": "expression", "symbols": ["arithmetic_operation"], "postprocess": id},
    {"name": "boolean", "symbols": [{"literal":"true"}], "postprocess": id},
    {"name": "boolean", "symbols": [{"literal":"false"}], "postprocess": id},
    {"name": "logical_operators", "symbols": [(myLexer.has("greater_or_equal") ? {type: "greater_or_equal"} : greater_or_equal)], "postprocess": id},
    {"name": "logical_operators", "symbols": [(myLexer.has("less_or_equal") ? {type: "less_or_equal"} : less_or_equal)], "postprocess": id},
    {"name": "logical_operators", "symbols": [(myLexer.has("greater") ? {type: "greater"} : greater)], "postprocess": id},
    {"name": "logical_operators", "symbols": [(myLexer.has("less") ? {type: "less"} : less)], "postprocess": id},
    {"name": "logical_operators", "symbols": [(myLexer.has("equal") ? {type: "equal"} : equal)], "postprocess": id},
    {"name": "logical_operators", "symbols": [(myLexer.has("not_equal") ? {type: "not_equal"} : not_equal)], "postprocess": id},
    {"name": "logical_operators", "symbols": [(myLexer.has("and") ? {type: "and"} : and)], "postprocess": id},
    {"name": "logical_operators", "symbols": [(myLexer.has("or") ? {type: "or"} : or)], "postprocess": id},
    {"name": "arithmetic_operators", "symbols": [(myLexer.has("plus") ? {type: "plus"} : plus)], "postprocess": id},
    {"name": "arithmetic_operators", "symbols": [(myLexer.has("minus") ? {type: "minus"} : minus)], "postprocess": id},
    {"name": "arithmetic_operators", "symbols": [(myLexer.has("times") ? {type: "times"} : times)], "postprocess": id},
    {"name": "arithmetic_operators", "symbols": [(myLexer.has("divide") ? {type: "divide"} : divide)], "postprocess": id},
    {"name": "arithmetic_operators", "symbols": [(myLexer.has("modulo") ? {type: "modulo"} : modulo)], "postprocess": id},
    {"name": "arithmetic_operation", "symbols": ["expression", "_", "arithmetic_operators", "_", "expression"], "postprocess": 
        (node) => {
            return {
                type: "arithmetic_operation",
                exp1: node[0],
                operator: node[2],
                exp2: node[4]
            }
        }
                        },
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
    {"name": "conditional$ebnf$2", "symbols": []},
    {"name": "conditional$ebnf$2", "symbols": ["conditional$ebnf$2", (myLexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "conditional", "symbols": [(myLexer.has("conditional") ? {type: "conditional"} : conditional), "_", "condition", "_", (myLexer.has("arrow") ? {type: "arrow"} : arrow), "conditional$ebnf$1", "statements", (myLexer.has("end") ? {type: "end"} : end), "conditional$ebnf$2"], "postprocess": 
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
    {"name": "loop$ebnf$2", "symbols": []},
    {"name": "loop$ebnf$2", "symbols": ["loop$ebnf$2", (myLexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "loop", "symbols": [(myLexer.has("loop") ? {type: "loop"} : loop), "_", "condition", "_", (myLexer.has("arrow") ? {type: "arrow"} : arrow), "loop$ebnf$1", "statements", (myLexer.has("end") ? {type: "end"} : end), "loop$ebnf$2"], "postprocess": 
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
    {"name": "fn$ebnf$3", "symbols": []},
    {"name": "fn$ebnf$3", "symbols": ["fn$ebnf$3", (myLexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "fn", "symbols": [{"literal":"f"}, "__", (myLexer.has("identifier") ? {type: "identifier"} : identifier), "_", {"literal":"<"}, "_", "fn$ebnf$1", "_", {"literal":">"}, "_", (myLexer.has("arrow") ? {type: "arrow"} : arrow), "fn$ebnf$2", "statements", (myLexer.has("end") ? {type: "end"} : end), "fn$ebnf$3"], "postprocess": 
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
    {"name": "print_statement", "symbols": [(myLexer.has("write") ? {type: "write"} : write), {"literal":"<"}, "expression", {"literal":">"}, "print_statement$ebnf$1"], "postprocess": 
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
    {"name": "fn_call", "symbols": [{"literal":"c"}, "__", (myLexer.has("identifier") ? {type: "identifier"} : identifier), "_", {"literal":"<"}, "_", "fn_call$ebnf$1", "_", {"literal":">"}, "fn_call$ebnf$2"], "postprocess": 
        (node) => {
            return {
                type: "fn_call",
                fn_name: node[2],
                params: node[6]
            }
        }
                    },
    {"name": "element", "symbols": [(myLexer.has("string") ? {type: "string"} : string)], "postprocess": id},
    {"name": "element", "symbols": [(myLexer.has("number") ? {type: "number"} : number)], "postprocess": id},
    {"name": "element", "symbols": [(myLexer.has("identifier") ? {type: "identifier"} : identifier)], "postprocess": id},
    {"name": "elements", "symbols": ["element"]},
    {"name": "elements", "symbols": ["elements", "__", "element"], "postprocess": 
        (node) => {
         return node[0].concat([node[2]])
        }
                    },
    {"name": "array_def$ebnf$1", "symbols": []},
    {"name": "array_def$ebnf$1", "symbols": ["array_def$ebnf$1", (myLexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "array_def", "symbols": [(myLexer.has("identifier") ? {type: "identifier"} : identifier), "_", (myLexer.has("assignment_symbol") ? {type: "assignment_symbol"} : assignment_symbol), "_", (myLexer.has("openTag") ? {type: "openTag"} : openTag), "_", "elements", "_", (myLexer.has("closeTag") ? {type: "closeTag"} : closeTag), "array_def$ebnf$1"], "postprocess": 
        (node) => {
            return {
                type: "array_def",
                var_name: node[0],
                elements: node[6]
            }
        }
                    },
    {"name": "index", "symbols": [(myLexer.has("number") ? {type: "number"} : number)], "postprocess": id},
    {"name": "access_array_element$ebnf$1", "symbols": []},
    {"name": "access_array_element$ebnf$1", "symbols": ["access_array_element$ebnf$1", (myLexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "access_array_element", "symbols": [(myLexer.has("openTag") ? {type: "openTag"} : openTag), "_", "index", "_", (myLexer.has("closeTag") ? {type: "closeTag"} : closeTag), "_", (myLexer.has("identifier") ? {type: "identifier"} : identifier), "access_array_element$ebnf$1"], "postprocess": 
        (node) => {
            return {
                type: "access_array_element",
                array_name: node[6],
                index: node[2]
            }
        }
                    },
    {"name": "update_array_element$ebnf$1", "symbols": []},
    {"name": "update_array_element$ebnf$1", "symbols": ["update_array_element$ebnf$1", (myLexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "update_array_element", "symbols": [(myLexer.has("identifier") ? {type: "identifier"} : identifier), "_", (myLexer.has("openTag") ? {type: "openTag"} : openTag), "_", "index", "_", (myLexer.has("closeTag") ? {type: "closeTag"} : closeTag), "_", {"literal":"=>"}, "_", "expression", "update_array_element$ebnf$1"], "postprocess":  
        (node) => {
            return {
                type: "update_array_element",
                array_name: node[0],
                index: node[4],
                new_value: node[10]
            }
        }
                    },
    {"name": "add_element_to_end_of_array$ebnf$1", "symbols": []},
    {"name": "add_element_to_end_of_array$ebnf$1", "symbols": ["add_element_to_end_of_array$ebnf$1", (myLexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "add_element_to_end_of_array", "symbols": [(myLexer.has("identifier") ? {type: "identifier"} : identifier), "_", {"literal":"<="}, "_", "expression", "add_element_to_end_of_array$ebnf$1"], "postprocess": 
        (node) => {
            return {
                type: "add_element_to_end_of_array",
                array_name: node[0],
                added_value: node[4]
            }
        }
                    },
    {"name": "remove_element_from_end_of_array$ebnf$1", "symbols": []},
    {"name": "remove_element_from_end_of_array$ebnf$1", "symbols": ["remove_element_from_end_of_array$ebnf$1", (myLexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "remove_element_from_end_of_array", "symbols": [(myLexer.has("identifier") ? {type: "identifier"} : identifier), "_", {"literal":"=>"}, "remove_element_from_end_of_array$ebnf$1"], "postprocess": 
        (node) => {
            return {
                type: "remove_element_from_end_of_array",
                array_name: node[0],
            }
        }
                    },
    {"name": "add_element_to_start_of_array$ebnf$1", "symbols": []},
    {"name": "add_element_to_start_of_array$ebnf$1", "symbols": ["add_element_to_start_of_array$ebnf$1", (myLexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "add_element_to_start_of_array", "symbols": ["expression", "_", {"literal":"=>"}, "_", (myLexer.has("identifier") ? {type: "identifier"} : identifier), "add_element_to_start_of_array$ebnf$1"], "postprocess": 
        (node) => {
            return {
                type: "add_element_to_start_of_array",
                array_name: node[4],
                added_value: node[0]
            }
        }
                    },
    {"name": "remove_element_from_start_of_array$ebnf$1", "symbols": []},
    {"name": "remove_element_from_start_of_array$ebnf$1", "symbols": ["remove_element_from_start_of_array$ebnf$1", (myLexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "remove_element_from_start_of_array", "symbols": [{"literal":"<="}, "_", (myLexer.has("identifier") ? {type: "identifier"} : identifier), "remove_element_from_start_of_array$ebnf$1"], "postprocess": 
        (node) => {
            return {
                type: "remove_element_from_start_of_array",
                array_name: node[2],
            }
        }
                    },
    {"name": "var_length$ebnf$1", "symbols": []},
    {"name": "var_length$ebnf$1", "symbols": ["var_length$ebnf$1", (myLexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "var_length", "symbols": [{"literal":"l"}, "_", {"literal":"<"}, "_", (myLexer.has("identifier") ? {type: "identifier"} : identifier), "_", {"literal":">"}, "var_length$ebnf$1"], "postprocess": 
        (node) => {
            return {
                type: "var_length",
                var_name: node[4]
            }
        }
                    },
    {"name": "increment_by_one$ebnf$1", "symbols": []},
    {"name": "increment_by_one$ebnf$1", "symbols": ["increment_by_one$ebnf$1", (myLexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "increment_by_one", "symbols": ["expression", (myLexer.has("inc") ? {type: "inc"} : inc), "increment_by_one$ebnf$1"], "postprocess": 
        (node) => {
            return {
                type: "increment",
                incremented_value: node[0]
            }
        }
                    },
    {"name": "decrement_by_one$ebnf$1", "symbols": []},
    {"name": "decrement_by_one$ebnf$1", "symbols": ["decrement_by_one$ebnf$1", (myLexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decrement_by_one", "symbols": ["expression", (myLexer.has("dec") ? {type: "dec"} : dec), "decrement_by_one$ebnf$1"], "postprocess": 
        (node) => {
            return {
                type: "decrement",
                decremented_value: node[0]
            }
        }
                    },
    {"name": "display_array_elements$ebnf$1", "symbols": []},
    {"name": "display_array_elements$ebnf$1", "symbols": ["display_array_elements$ebnf$1", (myLexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "display_array_elements", "symbols": [{"literal":"_"}, (myLexer.has("identifier") ? {type: "identifier"} : identifier), "display_array_elements$ebnf$1"], "postprocess": 
        (node) => {
            return {
                type: "display_array_elements",
                array_name: node[1]
            }
        }
                    },
    {"name": "for_loop$ebnf$1", "symbols": []},
    {"name": "for_loop$ebnf$1", "symbols": ["for_loop$ebnf$1", (myLexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "for_loop$ebnf$2", "symbols": []},
    {"name": "for_loop$ebnf$2", "symbols": ["for_loop$ebnf$2", (myLexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "for_loop", "symbols": [(myLexer.has("forLoop") ? {type: "forLoop"} : forLoop), "_", "assignment", "_", {"literal":"to"}, "_", "expression", "_", (myLexer.has("arrow") ? {type: "arrow"} : arrow), "for_loop$ebnf$1", "statements", (myLexer.has("NL") ? {type: "NL"} : NL), {"literal":":end"}, "for_loop$ebnf$2"], "postprocess": 
        (node) => {
            return {
                type: "for_loop",
                from: node[2],
                to: node[6],
                body: node[10]
            }
        }
                    },
    {"name": "comment$ebnf$1", "symbols": []},
    {"name": "comment$ebnf$1", "symbols": ["comment$ebnf$1", (myLexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "comment", "symbols": [(myLexer.has("comment") ? {type: "comment"} : comment), "comment$ebnf$1"], "postprocess": 
        (node) => {
            return {
                type: "comment",
                sentence: node[0]
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
