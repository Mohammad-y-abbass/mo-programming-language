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
           | array_def {% id %}
           | access_array_element {% id %}
           | update_array_element {% id %}
           | add_element_to_end_of_array {% id %}

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
            | access_array_element {% id %}
            | %identifier {% id %}
            | %string {% id %}
            | fn_call
            | array_def {% id %}

logical_operators -> %greater_or_equal {% id %}
                   | %less_or_equal {% id %}
                   | %greater {% id %}
                   | %less {% id %}
                   | %equal {% id %}
                   | %not_equal {% id %}


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

print_statement -> %write "<" expression ">" %NL:* 
            {%
                (node) => {
                    return {
                        type: "print_statement",
                        printed_value: node[2]
                    }
                }
            %}

fn_call -> "c" __ %identifier _ "<" _ params:* _ ">" %NL:*
            {%
                (node) => {
                    return {
                        type: "fn_call",
                        fn_name: node[2],
                        params: node[6]
                    }
                }
            %}
element -> %string {% id %}
         | %number {% id %}
         | %identifier {% id %}

elements -> element 
          | elements __ element 

            {%
               (node) => {
                return node[0].concat([node[2]])
               }
            %}
 
array_def -> %openTag _ elements _ %closeTag %NL:*
            {%
                (node) => {
                    return {
                        type: "array_def",
                        elements: node[2]
                    }
                }
            %}

index -> %number {% id %}            

access_array_element -> %openTag _ index _ %closeTag _ %identifier %NL:*
            {%
                (node) => {
                    return {
                        type: "access_array_element",
                        array_name: node[6],
                        index: node[2]
                    }
                }
            %}

update_array_element -> %identifier _ %openTag _ index _ %closeTag _ %less_or_equal _ expression %NL:*
            {% 
                (node) => {
                    return {
                        type: "update_array_element",
                        array_name: node[0],
                        index: node[4],
                        new_value: node[10]
                    }
                }
            %}  

add_element_to_end_of_array -> %identifier _ "<=" _ expression %NL:*
            {%
                (node) => {
                    return {
                        type: "add_element_to_end_of_array",
                        array_name: node[0],
                        added_value: node[4]
                    }
                }
            %}
