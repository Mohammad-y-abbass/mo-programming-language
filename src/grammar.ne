@{%
    const myLexer = require('./lexer.js')
%}

@lexer myLexer

statement -> var_assign {% id %}
            | fun_call {% id %}

expression -> %string {% id %} | %number {% id %} | %boolean {% id %}



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

args
    -> expression
        {%
            (data) => {
                return [data[0]];
            }
        %}
    |  args __ expression
        {%
            (data) => {
                return [...data[0], data[2]];
            }
        %}            
        
fun_call -> %identifier _ "(" _ args _ ")"
      {%
            (data) => {
                return {
                    type: "fun_call",
                    fun_name: data[0],
                    arguments: data[4]
                }
            }
        %}
     
  




# Optional whitespace    
_ -> %WS:*

# Mandatory whitespace
__ -> %WS:+