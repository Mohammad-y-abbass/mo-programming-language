@{%
    const myLexer = require('./lexer.js')
%}

@lexer myLexer

main -> statements 
                    {%
                        (node) => {
                            return {
                                main_program: node[0]
                            }
                        }                   
                     %}

statements -> statement:* {% (node) =>{ return {statements: node[0]}}

 %}


_ -> %WS:* {% id %}

__ -> %WS:+ {% id %}

statement -> assignment %NL:* {% id %}
           | conditional {% id %}
           | loop {% id %}
           | fn {% id %}
           | print_statement {% id %}
           | fn_call {% id %}

assignment -> %identifier _ %assignment_symbol _ expression
            {%
                (node) => {
                    return {
                        type: "var_assign",
                        var_name : node[0],
                        var_value : node[4]
                    }
                }
            %}

expression -> %number {% id %}
            | %identifier {% id %}
            | %string {% id %}

logical_operators -> %greater_or_equal {% id %}
                   | %less_or_equal {% id %}
                   | %greater {% id %}
                   | %less {% id %}
                   | %equal {% id %}


condition -> expression _ logical_operators _ expression 
                {%
                    (node) => {
                        return {
                             exp1: node[0],
                             operator: node[2],
                             exp2: node[4]
                            }
                        }   
                %}

param -> %string {% id %}
        | %number {% id %}
        | %identifier {% id %}
           
params -> param {% id %}
        | params __ param 
            {%
                (node) => {
                    return {
                        type: "params",
                        value: [node[0], node[2]]
                    }
                }
            %}

conditional -> %conditional _ condition _ %arrow _ statements %end %NL:*
                 {%
                (node) => {
                    return {
                        type: "condition_statement",
                        condition: node[2],
                        body: node[6]
                    }
                }
                %}

loop -> %loop  _ condition _ %arrow _ statements %end %NL:*
            {%
                (node) => {
                    return {
                        type: "loop_statement",
                        condition: node[2],
                        body: node[6]
                    }
                }
            %}

fn -> "f" __ %identifier _ %openTag _ params:* _ %closeTag _ %arrow __ statements %end  %NL:*
            {%
                    (node) => {
                        return {
                        type: "fn",
                        fn_name: node[2],
                        params: node[6],
                        body: node[12]
                    }
                }
            %}

print_statement -> %write %openTag expression %closeTag %NL:* 
            {%
                (node) => {
                    return {
                        type: "print_statement",
                        printed_value: node[2]
                    }
                }
            %}

fn_call -> "c" __ %identifier _ %openTag _ params:* _ %closeTag %NL:*
            {%
                (node) => {
                    return {
                        type: "fn_call",
                        fn_name: node[2],
                        params: node[6]
                    }
                }
            %}

