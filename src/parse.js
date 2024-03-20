const nearley = require('nearley');
const grammar = require('./grammar.js');
const fs = require('fs');

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
const input = `when x > 1 =>
@b = 1`;

// Parse the input
parser.feed(input);

// Check if there are any parsing errors
if (parser.results.length > 0) {
  console.log('Parsing successful!');
  console.log('Parsed result:', parser.results[0]);
} else {
  console.log('Parsing failed!');
  console.log('Parser errors:', parser.results.errors);
}
// Convert the results array to a JSON string
const resultsJson = JSON.stringify(parser.results, null, 2);

// Write the JSON string to a file
fs.writeFileSync('./src/mo.ast', resultsJson);