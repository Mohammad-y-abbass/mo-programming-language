const fs = require('fs').promises;
const colors = require('colors');

async function main() {
  try {
    const filename = process.argv[2];
    if (!filename || !filename.endsWith('.json')) {
      throw new Error('Please provide a ast file with json structure.'.red);
    }

    const astJson = await fs.readFile(filename, 'utf8');
    const statements = JSON.parse(astJson);

    if (!Array.isArray(statements.main_program)) {
      throw new Error(
        'Invalid AST format: Expected an array of statements.'.red
      );
    }

    const jsCode = generate_js_for_statements(statements);

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

function generate_js_for_statements(statements) {
  return statements.main_program
    .filter((node) => !!node) // Filter out undefined nodes
    .map(generate_js_for_node)
    .join('\n');
}

function generate_js_for_var_assign(var_assign_node) {
  return `var ${var_assign_node.var_name.value} = ${var_assign_node.var_value.value};`;
}

function generate_js_for_condition_statement(condition_node) {
  return `if (${condition_node.condition.exp1.value} ${
    condition_node.condition.operator.value
  } ${condition_node.condition.exp2.value}) {
    ${generate_js_for_node(condition_node.body)}
}`;
}

function generate_js_for_node(node) {
  console.log(node.type);
  if (node.type === 'var_assign') {
    return generate_js_for_var_assign(node);
  } else if (node.type === 'condition_statement') {
    return generate_js_for_condition_statement(node);
  } else if (node.type === 'NL') {
    return ''; // Return an empty string for newline nodes
  } else {
    throw new Error(`Unknown node type: ${node.type}`.red);
  }
}

main().catch((err) => console.error(err.stack));
