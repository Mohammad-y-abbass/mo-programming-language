const nearley = require('nearley');
const grammar = require('./grammar.js');
const fs = require('fs');

// Read the input file
fs.readFile('src/example.mo', 'utf8', (err, data) => {
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
      console.log('Parsed result:', parser.results);
      const resultsJson = JSON.stringify(parser.results, null, 2);

      // Write the JSON string to a file
      fs.writeFileSync('./src/mo.ast', resultsJson);
    } else {
      console.log('Parsing failed!');
    }
  } catch (err) {
    console.error('Parsing error:', err);
  }
});
