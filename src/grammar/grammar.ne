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
           | for_loop {% id %}
           | access_array_element {% id %}
           | update_array_element {% id %}
           | add_element_to_end_of_array {% id %}
           | remove_element_from_end_of_array {% id %}
           | add_element_to_end_of_array {% id %}
           | add_element_to_start_of_array {% id %}
           | remove_element_from_start_of_array {% id %}    
           | array_def {% id %}
           | var_length {% id %}
           | increment_by_one {% id %}
           | decrement_by_one {% id %}
           | display_array_elements {% id %}


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
            | var_length {% id %}
            | current_index {% id %}
            | boolean {% id %}

boolean -> "true" {% id %}
         | "false" {% id %}

logical_operators -> %greater_or_equal {% id %}
                   | %less_or_equal {% id %}
                   | %greater {% id %}
                   | %less {% id %}
                   | %equal {% id %}
                   | %not_equal {% id %}
                   | %and {% id %}
                   | %or {% id %}


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

conditional -> %conditional _ condition _ %arrow %NL:* statements %end %NL:*
                 {%
                (node) => {
                    return {
                        type: "condition_statement",
                        condition: node[2],
                        body: node[6]
                    }
                }
                %}

loop -> %loop  _ condition _ %arrow %NL:* statements %end %NL:*
            {%
                (node) => {
                    return {
                        type: "loop_statement",
                        condition: node[2],
                        body: node[6]
                    }
                }
            %}

fn -> "f" __ %identifier _ "<" _ params:* _ ">" _ %arrow %NL:* statements %end  %NL:*
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
 
array_def -> %identifier _ %assignment_symbol _ %openTag _ elements _ %closeTag %NL:*
            {%
                (node) => {
                    return {
                        type: "array_def",
                        var_name: node[0],
                        elements: node[6]
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

update_array_element -> %identifier _ %openTag _ index _ %closeTag _ "=>" _ expression %NL:*
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

remove_element_from_end_of_array -> %identifier _ "=>" %NL:*
            {%
                (node) => {
                    return {
                        type: "remove_element_from_end_of_array",
                        array_name: node[0],
                    }
                }
            %}

add_element_to_start_of_array -> expression _ "=>" _ %identifier %NL:*
            {%
                (node) => {
                    return {
                        type: "add_element_to_start_of_array",
                        array_name: node[4],
                        added_value: node[0]
                    }
                }
            %}

remove_element_from_start_of_array -> "<=" _ %identifier %NL:*
               {%
                (node) => {
                    return {
                        type: "remove_element_from_start_of_array",
                        array_name: node[2],
                    }
                }
            %}

var_length -> "l" _ "<" _ %identifier _ ">" %NL:*
            {%
                (node) => {
                    return {
                        type: "var_length",
                        var_name: node[4]
                    }
                }
            %}

increment_by_one -> expression %inc %NL:* 
            {%
                (node) => {
                    return {
                        type: "increment",
                        incremented_value: node[0]
                    }
                }
            %}

decrement_by_one -> expression %dec %NL:* 
            {%
                (node) => {
                    return {
                        type: "decrement",
                        decremented_value: node[0]
                    }
                }
            %}

display_array_elements -> "_" %identifier %NL:* 
            {%
                (node) => {
                    return {
                        type: "display_array_elements",
                        array_name: node[1]
                    }
                }
            %}

for_loop -> %forLoop _ assignment _ "to" _ expression _ %arrow %NL:* statements %NL ":end" %NL:*
            {%
                (node) => {
                    return {
                        type: "for_loop",
                        from: node[2],
                        to: node[6],
                        body: node[10]
                    }
                }
            %}

