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
                         
 ██████   ██████    ███████       ███                                 ███  
░░██████ ██████   ███░░░░░███    ░███                                ░███  
 ░███░█████░███  ███     ░░███   ░███                                ░███  
 ░███░░███ ░███ ░███      ░███   ░███ ██████████           ██████████░███  
 ░███ ░░░  ░███ ░███      ░███   ░███░░░░░░░░░░           ░░░░░░░░░░ ░███  
 ░███      ░███ ░░███     ███    ░███                                ░███  
 █████     █████ ░░░███████░     ░███            █████████           ░███  
░░░░░     ░░░░░    ░░░░░░░       ░░░            ░░░░░░░░░            ░░░   
                                                                           
                                                                           
                                                                           
                                  ███             ███             ███      
                                ███░             ░███            ░░███     
                              ███░               ░███             ░░███    
                            ███░                 ░███              ░░███   
                          ███░                   ░███               ░░███  
                        ███░                     ░███                ░░███ 
                      ███░                       ░███                 ░░███
                     ░░░                         ░░░                   ░░░ 
                                                                           
                                                                           
                                                                           
                                                 ███                       
                                                ░███                       
                                                ░███                       
                                                ░███                       
                                                ░███                       
                                                ░███                       
                                                ░███                       
                                                ░░░                        
                                                                           
                                                                           
                                                                           
                                              ███          ███             
                                            ███░          ░░███            
                                          ███░             ░░███           
                                        ███░                ░░███          
                                      ███░                   ░░███         
                                    ███░                      ░░███        
                                  ███░                         ░░███       
                                 ░░░                            ░░░        
                                                                           
                                                                           
                                                                           
`;

try {
  // Log messages with colors
  //console.log('Generating grammar...'.magenta);

  //console.log(
  //   execSync(`nearleyc ${grammarFile} -o ${generatedGrammar}`).toString()
  // );

  // console.log('Grammar generated successfully.'.green);

  console.log('Parsing the grammar into ast structure...'.magenta);

  console.log(
    execSync(`node ${parserFile}
  `).toString()
  );

  console.log('Transpiling mo into javascript...'.magenta);

  console.log(execSync(`node ${transpilerFile} ${astFile}`).toString());


  console.log('Running transpiled code...'.magenta);

  console.log('Build successful: Code executed successfully!'.green.bold);

  console.log(asciiArt.rainbow);

  console.log(execSync(`node ${transpiledJs}`).toString());
} catch (error) {
  if (
    error.stdout.includes('transpile.js') ||
    error.stderr.includes('transpile.js')
  ) {
    console.error('An error occurred in transpile.js:'.red, error.message.red);
    process.exit(1); // Exit with non-zero status code to indicate failure
  } else {
    console.error('An error occurred:'.red, error.message.red);
  }
}
