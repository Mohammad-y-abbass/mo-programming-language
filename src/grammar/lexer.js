const moo = require('moo');

let lexer = moo.compile({
  NL: { match: /\r?\n/, lineBreaks: true },
  loop: /_/,
  write: 'w',
  read: 'read',
  WS: /[ \t]+/,
  comment: /\/\/.*?$/,
  number: /0|[1-9][0-9]*/,
  string: /"(?:\\["\\]|[^\n"\\])*"/,
  arrow: /=>/,
  openTag: /<</,
  closeTag: />>/,
  identifier: /[a-zA-Z_]\w*/,
  assignment_symbol: /:=/,
  conditional: '?',
  greater_or_equal: />=/,
  less_or_equal: /<=/,
  greater: />/,
  less: /</,
  equal: /==/,
  fn: /f/,
  leftParan: '(',
  rightParan: ')',
  end: ':end',
});


module.exports = lexer;
