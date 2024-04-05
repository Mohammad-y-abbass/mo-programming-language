#!/usr/bin/env node

const { execSync } = require('child_process');
const colors = require('colors');

// Define filenames
const grammarFile = 'src/grammar/grammar.ne';
const generatedGrammar = 'src/grammar/grammar.js';
const parserFile = 'src/parser/parse.js';

// Log messages with colors
console.log('Generating grammar'.magenta);
console.log(
  execSync(`nearleyc ${grammarFile} -o ${generatedGrammar}`).toString()
);

console.log('Generating parser'.magenta);
console.log(execSync(`node ${parserFile}`).toString());

console.log('TRANSPILATION SUCCESSFUL |^_^|'.rainbow.bold);
