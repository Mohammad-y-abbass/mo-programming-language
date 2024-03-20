@{%
    const myLexer = require('./lexer.js')
%}

@lexer myLexer

statement -> var_assign {% id %}
            | fun_call {% id %}
            | function_def {% id %}
            | conditional
            | loop

expression -> %string {% id %} | %number {% id %} | %boolean {% id %}

code -> statement
        {%
            (data) => {
                return [data[0]];
            }
        %}
    | code %NL statement
        {%
            (data) => {
                return [...data[0], data[2]];
            }
        %}  

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
            | %var_declaration %identifier

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
        
fun_call ->"call" __ %identifier _ "(" _ args _ ")"
      {%
            (data) => {
                return {
                    type: "fun_call",
                    fun_name: data[2],
                    arguments: data[6]
                }
            }
        %}

params ->  expression
        {%
            (data) => {
                return [data[0]];
            }
        %}
    |  params __ expression
        {%
            (data) => {
                return [...data[0], data[2]];
            }
        %}              

function_def -> "fn" __ %identifier _ "(" _ params _ ")" __ %arrow %NL code
      {%
            (data) => {
                return {
                    type: "function_def",
                    function_name: data[2],
                    parameter: data[6],
                    code: data[12]
                }
            }
        %}

compare_operator -> %equals | %greaterThanOrEqual | %lessThanOrEqual | %greaterThan | %lessThan         


condition -> %identifier _ compare_operator _ expression   


conditional -> "when" __  condition __ %arrow %NL code 
     {%
            (data) => {
                return {
                    type: "conditional",
                    condition: data[2],
                    code: data[6]
                }
            }
        %}

loop -> "while" __ condition __ %arrow %NL code

    {%
            (data) => {
                return {
                    type: "loop",
                    condition: data[2],
                    code: data[6]
                }
            }
    %}


 




# Optional whitespace    
_ -> %WS:*

# Mandatory whitespace
__ -> %WS:+ 
