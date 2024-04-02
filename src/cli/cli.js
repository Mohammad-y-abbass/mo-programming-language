#!/usr/bin/env node

const { execSync } = require('child_process');
const colors = require('colors')

// Define filenames
const grammarFile = 'src/grammar/grammar.ne';
const sourceFile = 'src/example/example.txt';
const generatedGrammar = 'src/grammar/grammar.js';
const parserFile = 'src/parser/parse.js'
const astFile = 'src/ast.json';
const astToJsFile = 'src/transpiler/transpile.js';
const outputFile = 'src/transpiler/transpiled.js';

console.log('Generating grammar'.magenta);
execSync(`nearleyc ${grammarFile} -o ${generatedGrammar}`);

console.log('Generating parser'.magenta);
execSync(`node ${parserFile}`);

//console.log('Translating AST to JavaScript...'.magenta);
//execSync(`node ${astToJsFile} ${astFile} > ${outputFile}`);

//console.log('Executing JavaScript program...'.magenta);
//execSync(`node ${outputFile}`);

console.log('TRANSPILATION SUCCESSFUL |^_^|'.rainbow.bold);
