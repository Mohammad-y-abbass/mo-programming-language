@{%
    const myLexer = require('./lexer.js')
%}

@lexer myLexer

# Define the grammar
main -> statement:+ {% id %}

_ -> %WS:* {% id %}

__ -> %WS:+ {% id %}

statement -> assignment {% id %}
           | conditional {% id %}
           | loop {% id %}

assignment -> %identifier _ %assignment_symbol _ expression
            {%
                (d) => {
                    return {
                        type: "var_assign",
                        var_name : d[0],
                        var_value : d[4]
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
                    (d) => {
                        return {
                             exp1: d[0],
                             operator: d[2],
                             exp2: d[4]
                            }
                        }   
                %}
           

conditional -> %conditional _ condition _ %arrow _ statement %NL
                 {%
                (d) => {
                    return {
                        type: "condition_statement",
                        condition: d[2],
                        body: d[6]
                    }
                }
                %}

loop -> %loop _ condition _ %arrow _ statement %NL
            {%
                (d) => {
                    return {
                        type: "loop_statement",
                        condition: d[2],
                        body: d[6]
                    }
                }
            %}
