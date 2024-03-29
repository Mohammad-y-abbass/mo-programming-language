const moo = require('moo');

let lexer = moo.compile({
  NL: { match: /\r?\n/, lineBreaks: true },
  WS: /[ \t]+/,
  comment: /\/\/.*?$/,
  number: /0|[1-9][0-9]*/,
  string: /"(?:\\["\\]|[^\n"\\])*"/,
  lparen: '(',
  rparen: ')',
  lsqrbracket: '[',
  rsqrbracket: ']',

  var_declaration: /@/,
  identifier: /[a-zA-Z_]\w*/,
  arrow: /=>/,
  assignment: /=/,
  array: /list/,
  boolean: /yes|no/,
  function: /fn/,
  cond_keyword: /when/,
  else: /else/,
  loop: /while/,
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
