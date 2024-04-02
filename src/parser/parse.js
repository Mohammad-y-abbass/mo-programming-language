const nearley = require('nearley');
const grammar = require('../grammar/grammar.js');
const fs = require('fs');
const colors = require('colors');
// Read the input file
fs.readFile('src/example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err.red);
    return;
  }

  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

  // Parse the input
  try {
    parser.feed(data);
    if (parser.results.length > 0) {
      console.log('Parsing successful!'.green.bold);
      const resultsJson = JSON.stringify(parser.results, null, 2);

      // Write the JSON string to a file
      fs.writeFileSync('./src/mo.ast', resultsJson);
    } else {
      console.log('parser returned no results'.red.bold);
    }
  } catch (parseError) {
    console.log(`Error while parsing ${parseError}`.red);
  }
});
