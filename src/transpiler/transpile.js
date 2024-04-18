/**
 * Transpiles an AST (Abstract Syntax Tree) representation of a program to JavaScript code.
 *
 * This function reads an AST JSON file, parses the statements, and generates the corresponding JavaScript code.
 * The generated JavaScript code is then written to the 'src/transpiler/transpiled.js' file.
 *
 * @param {string} filename - The path to the AST JSON file.
 * @returns {Promise<void>} - A Promise that resolves when the transpilation is complete.
 */
const fs = require('fs').promises;
const colors = require('colors');

async function main() {
  try {
    const filename = process.argv[2];
    if (!filename || !filename.endsWith('.json')) {
      throw new Error('Please provide a ast file with json structure.'.red);
    }

    const astJson = await fs.readFile(filename, 'utf8');
    const runtime = await fs.readFile('src/runtime/runtime.js', 'utf8');

    const statements = JSON.parse(astJson);

    if (!Array.isArray(statements.main_program.statements)) {
      throw new Error(
        'Invalid AST format: Expected an array of statements.'.red
      );
    }

    const jsCode = generate_js_from_ast(statements) + '\n' + runtime;

    await fs.writeFile('src/transpiler/transpiled.js', jsCode);

    console.log(
      "JavaScript code has been successfully transpiled and written to 'src/transpiler/transpiled.js'."
        .green
    );
  } catch (err) {
    console.error('Error:'.red, err.message.red);
    console.error(('Error stack trace: ' + err.stack).red);
  }
}

const check_if_node_array = (node) => Array.isArray(node);

function generate_js_from_ast(ast) {
  return ast.main_program.statements.map(generate_js_for_node).join('\n');
}

function generate_js_for_body(body) {
  console.log(body);
  return body.statements.map(generate_js_for_node).join('\n');
}

function generate_js_for_var_assign(var_assign_node) {
  if (check_if_node_array(var_assign_node.var_value)) {
    return `var ${var_assign_node.var_name.value} = ${generate_js_for_fn_call(
      var_assign_node.var_value[0]
    )} `;
  }
  return `var ${var_assign_node.var_name.value} = ${var_assign_node.var_value.value};`;
}

function generate_js_for_loop_statement(loop_node) {
  return `while (${loop_node.condition.exp1.value} ${
    loop_node.condition.operator.value
  } ${loop_node.condition.exp2.value}) {
    ${generate_js_for_body(loop_node.body)}
}`;
}

function generate_js_for_condition_statement(condition_node) {
  return `if (${condition_node.condition.exp1.value} ${
    condition_node.condition.operator.value
  } ${condition_node.condition.exp2.value}) {
    ${generate_js_for_body(condition_node.body)}
}`;
}

function generate_js_for_print_statement(print_node) {
  return `console.log(${print_node.printed_value.value});`;
}

function generate_js_for_function_statement(func_node) {
  if (check_if_node_array(func_node.body.statements)) {
    return `function ${func_node.fn_name.value} (${generate_js_for_params(
      func_node.params
    )}) {
    ${generate_js_for_body(func_node.body)}
}`;
  } else {
    return `function ${func_node.fn_name.value} (${func_node.params.value}) {
     ${generate_js_for_node(func_node.body)};
}`;
  }
}

function generate_js_for_fn_call(fn_call_node) {
  return `${fn_call_node.fn_name.value}(${generate_js_for_params(
    fn_call_node.params
  )})`;
}

function generate_js_for_multiple_params(params) {
  return params.map((param) => param.value).join(',');
}

function generate_js_for_params(params_node) {
  if (params_node.length == 0) {
    return '';
  } else {
    if (check_if_node_array(params_node[0].value)) {
      return `${generate_js_for_multiple_params(params_node[0].value)}`;
    } else {
      return `${params_node[0].value}`;
    }
  }
}

function generate_js_for_node(node) {
  console.log(node.type);
  if (node.type === 'var_assign') {
    return generate_js_for_var_assign(node);
  } else if (node.type === 'condition_statement') {
    return generate_js_for_condition_statement(node);
  } else if (node.type === 'NL') {
    return '';
  } else if (node.type === 'loop_statement') {
    return generate_js_for_loop_statement(node);
  } else if (node.type === 'print_statement') {
    return generate_js_for_print_statement(node);
  } else if (node.type === 'fn') {
    return generate_js_for_function_statement(node);
  } else if (node.type === 'fn_call') {
    return generate_js_for_fn_call(node);
  } else {
    throw new Error(`Unknown node type: ${node.type}`.red);
  }
}

main().catch((err) => console.error(err.stack));
