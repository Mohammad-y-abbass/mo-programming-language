@{%
    const myLexer = require('./lexer.js')
%}

@lexer myLexer

statement -> var_assign {% id %}

var_assign -> %var_declaration %identifier _ "=" _ expression 
{%
            (data) => {
                return {
                    type: "var_assign",
                    var_name: data[1],
                    value: data[5]
                }
            }
        %}
        

expression -> %string {% id %} | %number {% id %} | %boolean {% id %}



# Optional whitespace    
_ -> %WS:*

# Mandatory whitespace
__ -> %WS:+