const nearley = require('nearley');
const grammar = require('./grammar.js');
const fs = require('fs');

// Read the input file
fs.readFile('src/example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

  // Parse the input
  try {
    parser.feed(data);
    if (parser.results.length > 0) {
      console.log('Parsing successful!');
      const resultsJson = JSON.stringify(parser.results, null, 2);

      // Write the JSON string to a file
      fs.writeFileSync('./src/mo.ast', resultsJson);
    } else {
      console.log('parser returned no results');
    }
  } catch (parseError) {
    console.log('Error while parsing ' + parseError);
  }
});
