const moo = require('moo');

let lexer = moo.compile({
  WS: /[ \t]+/,
  comment: /\/\/.*?$/,
  number: /0|[1-9][0-9]*/,
  string: /"(?:\\["\\]|[^\n"\\])*"/,
  lparen: '(',
  rparen: ')',
  lsqrbracket: '[',
  rsqrbracket: ']',
  keyword: ['while', 'when', 'else','list'],
  NL: { match: /\n/, lineBreaks: true },
  var_declaration: /@/,
  identifier: /[a-zA-Z_]\w*/,
  assignment: /=/,
  boolean: /yes|no/,
  arrow: /=>/,
  function: /fn/,
  semicolon: /;/,
  plus: /\+/,
  minus: /-/,
  multiply: /\*/,
  divide: /\//,
  equals: /==/,
  greaterThan: />/,
  lessThan: /</,
  greaterOrEqual: />=/,
  lessOrEqual: /<=/,
  print: /print/,
});

module.exports = lexer;
