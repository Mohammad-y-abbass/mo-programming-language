#!/usr/bin/env node

const { execSync } = require('child_process');
const colors = require('colors')

// Define filenames
const grammarFile = 'src/grammar/grammar.ne';
const generatedGrammar = 'src/grammar/grammar.js';
const parserFile = 'src/parser/parse.js'
const astFile = 'src/ast.json';
const astToJsFile = 'src/transpiler/transpile.js';

console.log('Generating grammar'.magenta);
execSync(`nearleyc ${grammarFile} -o ${generatedGrammar}`);

console.log('Generating parser'.magenta);
execSync(`node ${parserFile}`);

console.log('TRANSPILATION SUCCESSFUL |^_^|'.rainbow.bold);
