const nearley = require('nearley');
const grammar = require('../grammar/grammar.js');
const fs = require('fs');
const colors = require('colors');

fs.readFile('src/example/example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading input file: ${err.message}`.red);
    return;
  }

  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

  try {
    parser.feed(data);
    if (parser.results.length > 0) {
      console.log('Parsing successful!'.green.bold);

      const resultsJson = JSON.stringify(parser.results, null, 2);

      fs.writeFileSync('./src/ast.json', resultsJson);
    } else {
      throw new Error('Parsing failed: no results');
    }
  } catch (err) {
console.error(`Error while parsing: ${err.message}`.red);
console.error(`Error stack trace: ${err.stack}`.red);
console.error(`Input data: ${data}`.red);  }
});
