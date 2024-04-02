@{%
    const myLexer = require('./lexer.js')
%}

@lexer myLexer

# Define the grammar
main -> statement:+ {% id %}

statement -> assignment {% id %}
           | conditional {% id %}

assignment -> %identifier %assignment_symbol expression
            {%
                (d) => {
                    return {
                        type: "var_assign",
                        var_name : d[0],
                        var_value : d[2]
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

condition -> expression logical_operators expression

conditional -> %conditional condition %arrow statement

