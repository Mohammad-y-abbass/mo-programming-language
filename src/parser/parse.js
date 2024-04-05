const nearley = require('nearley');
const grammar = require('../grammar/grammar.js');
const fs = require('fs');
const colors = require('colors');

// Read the input file
fs.readFile('src/example/example.txt', 'utf8', (err, data) => {
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
      fs.writeFileSync('./src/ast.json', resultsJson);

      // Define an ASCII art image
      const coolArt = `                         
                                                   
                                                  
                                                                 
                                                                 
MMMMMMMM               MMMMMMMM          OOOOOOOOO           !!! 
M:::::::M             M:::::::M        OO:::::::::OO        !!:!!
M::::::::M           M::::::::M      OO:::::::::::::OO      !:::!
M:::::::::M         M:::::::::M     O:::::::OOO:::::::O     !:::!
M::::::::::M       M::::::::::M     O::::::O   O::::::O     !:::!
M:::::::::::M     M:::::::::::M     O:::::O     O:::::O     !:::!
M:::::::M::::M   M::::M:::::::M     O:::::O     O:::::O     !:::!
M::::::M M::::M M::::M M::::::M     O:::::O     O:::::O     !:::!
M::::::M  M::::M::::M  M::::::M     O:::::O     O:::::O     !:::!
M::::::M   M:::::::M   M::::::M     O:::::O     O:::::O     !:::!
M::::::M    M:::::M    M::::::M     O:::::O     O:::::O     !!:!!
M::::::M     MMMMM     M::::::M     O::::::O   O::::::O      !!! 
M::::::M               M::::::M     O:::::::OOO:::::::O          
M::::::M               M::::::M      OO:::::::::::::OO       !!! 
M::::::M               M::::::M        OO:::::::::OO        !!:!!
MMMMMMMM               MMMMMMMM          OOOOOOOOO           !!! 
                                                          
                                                                                                                                                                                  
`;

      // Print the ASCII art after parsing is done
      console.log(coolArt.rainbow.bold);
    } else {
      console.log('parser returned no results'.red.bold);
    }
  } catch (parseError) {
    console.log(`Error while parsing ${parseError}`.red);
  }
});
