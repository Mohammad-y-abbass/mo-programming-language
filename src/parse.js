const nearley = require('nearley');
const grammar = require('./grammar.js');
const fs = require('fs');

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

parser.feed(`hello("hello" 2)`);
console.log(parser.results);
// Convert the results array to a JSON string
const resultsJson = JSON.stringify(parser.results, null, 2);

// Write the JSON string to a file
fs.writeFileSync('./src/mo.ast', resultsJson);
