const fs = require('fs').promises;

async function main() {
  try {
    const filename = process.argv[2];
    if (!filename) {
      throw new Error('Please provide a .ast file.');
    }

    const astJson = await fs.readFile(filename, 'utf8');
    const statements = JSON.parse(astJson);
    const jsCode = generateJsForStatements(statements);
    const outputFilename = filename.replace('.ast', '.js');
    await fs.writeFile('src/transpiler/transpiled.js', jsCode);
    console.log(`Wrote ${outputFilename}.`);
  } catch (err) {
    console.error('Error:', err.message);
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
      throw new Error(`Unknown node type: ${node.type}`);
  }
}

main().catch((err) => console.error(err.stack));
