const fs = require('fs').promises;
const colors = require('colors'); // Assuming you have the 'colors' package installed

async function main() {
  try {
    const filename = process.argv[2];
    if (!filename) {
      throw new Error('Please provide a .ast file.'.red);
    }

    const astJson = await fs.readFile(filename, 'utf8');
    const statements = JSON.parse(astJson);

    if (!Array.isArray(statements)) {
      throw new Error(
        'Invalid AST format: Expected an array of statements.'.red
      );
    }

    const jsCode = generateJsForStatements(statements);
    const outputFilename = filename.replace('.ast', '.js');

    await fs.writeFile('src/transpiler/transpiled.js', jsCode);

    console.log(
      `JavaScript code has been successfully transpiled and written to 'src/transpiler/transpiled.js'.`
        .green
    );
  } catch (err) {
    console.error('Error:'.red, err.message);
  }
}

function generateJsForStatements(statements) {
  return statements[0].map(generateJsForStatementOrExpr).join('\n');
}

function generateJsForStatementOrExpr(node) {
  switch (node.type) {
    case 'var_assign':
      return `var ${node.var_name.value} = ${node.var_value.value};`;
    default:
      throw new Error(`Unknown node type: ${node.type}`.red);
  }
}

main().catch((err) => console.error(err.stack));
