#!/usr/bin/env node

const { execSync } = require('child_process');
const colors = require('colors');

// Define filenames
const grammarFile = 'src/grammar/grammar.ne';
const generatedGrammar = 'src/grammar/grammar.js';
const parserFile = 'src/parser/parse.js';
const transpilerFile = 'src/transpiler/transpile.js';
const transpiledJs = 'src/transpiler/transpiled.js';
const astFile = 'src/ast.json';
const asciiArt = `                         
                                                                                                                                        
                                                                                                                                        
 |||||||                                                            |||||||      MMMMMMMM               MMMMMMMM          OOOOOOOOO     
 |:::::|                                                            |:::::|      M:::::::M             M:::::::M        OO:::::::::OO   
 |:::::|                                                            |:::::|      M::::::::M           M::::::::M      OO:::::::::::::OO 
 |:::::|                                                            |:::::|      M:::::::::M         M:::::::::M     O:::::::OOO:::::::O
 |:::::|                                                            |:::::|      M::::::::::M       M::::::::::M     O::::::O   O::::::O
 |:::::|                                                            |:::::|      M:::::::::::M     M:::::::::::M     O:::::O     O:::::O
 |||||||                                                            |||||||      M:::::::M::::M   M::::M:::::::M     O:::::O     O:::::O
          ---------------                          ---------------               M::::::M M::::M M::::M M::::::M     O:::::O     O:::::O
          -:::::::::::::-                          -:::::::::::::-               M::::::M  M::::M::::M  M::::::M     O:::::O     O:::::O
 |||||||  ---------------                          ---------------  |||||||      M::::::M   M:::::::M   M::::::M     O:::::O     O:::::O
 |:::::|                                                            |:::::|      M::::::M    M:::::M    M::::::M     O:::::O     O:::::O
 |:::::|                                                            |:::::|      M::::::M     MMMMM     M::::::M     O::::::O   O::::::O
 |:::::|                                                            |:::::|      M::::::M               M::::::M     O:::::::OOO:::::::O
 |:::::|                                                            |:::::|      M::::::M               M::::::M      OO:::::::::::::OO 
 |:::::|                                                            |:::::|      M::::::M               M::::::M        OO:::::::::OO   
 |||||||                                                            |||||||      MMMMMMMM               MMMMMMMM          OOOOOOOOO     
                          ________________________                                                                                      
                          _::::::::::::::::::::::_                                                                                      
                          ________________________                                                                                      
                                                                                                                                        
                                                                                                                                        
                                                                                                                                        
                                                                                                                                                                                                                                                                                                                
`;

// Log messages with colors
console.log('Generating grammar...'.magenta);
console.log(
  execSync(`nearleyc ${grammarFile} -o ${generatedGrammar}`).toString()
);

console.log('Parsing...'.magenta);
console.log(execSync(`node ${parserFile}`).toString());

console.log('transpiling...'.magenta);
console.log(execSync(`node ${transpilerFile} ${astFile}`).toString());

console.log('Running transpiled code...'.magenta);

console.log(asciiArt.rainbow);


console.log(execSync(`node ${transpiledJs}`).toString());
