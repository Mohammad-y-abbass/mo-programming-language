const fs = require('fs').promises;

async function main() {
  const filename = process.argv[2];
  if (!filename) {
    console.log('Please provide a .ast file.');
    return;
  }

  try {
    const astJson = await fs.readFile(filename, 'utf8');
    const statements = JSON.parse(astJson);
    const jsCode = generateJsForStatements(statements);
    const outputFilename = filename.replace('.ast', '.js');
    await fs.writeFile(outputFilename, jsCode);
    console.log(`Wrote ${outputFilename}.`);
  } catch (err) {
    console.error('Error:', err);
  }
}

function generateJsForStatements(statements) {
  const lines = [];
  for (let statement of statements) {
    const line = generateJsForStatementOrExpr(statement);
    lines.push(line);
  }
  return lines.join('\n');
}

function generateJsForStatementOrExpr(node) {
  if (node.type === 'var_assign') {
    const varName = node.var_name.value;
    const jsExpr = generateJsForStatementOrExpr(node.value);
    const js = `var ${varName} = ${jsExpr};`;
    return js;
  } else if (node.type === 'fun_call') {
    const funName = node.fun_name.value;
    const argList = node.arguments
      .map((arg) => {
        return generateJsForStatementOrExpr(arg);
      })
      .join(', ');
    return `${funName}(${argList})`;
  } else if (node.type === 'function_def') {
    const functionName = node.function_name.value;
    const params = node.parameter.map((param) => param.value).join(', ');
    const functionCode = generateJsForStatements(node.code);
    return `function ${functionName}(${params}) {\n${functionCode}\n}`;
  } else if (node.type === 'conditional') {
    const condition = generateJsForStatementOrExpr(node.condition);
    const code = generateJsForStatements(node.code);
    return `if (${condition}) {\n${code}\n}`;
  } else if (node.type === 'loop') {
    const condition = generateJsForStatementOrExpr(node.condition);
    const code = generateJsForStatements(node.code);
    return `while (${condition}) {\n${code}\n}`;
  } else if (node.type === 'string') {
    return `${node.value}`;
  } else if (node.type === 'number') {
    return node.value;
  } else if (node.type === 'identifier') {
    return `${node.value}`;
  } else {
    throw new Error(`Unhandled AST node type ${node.type}`);
  }
}

main().catch((err) => console.log(err.stack));
