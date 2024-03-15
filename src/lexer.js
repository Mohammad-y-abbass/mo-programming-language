const moo = require('moo');

let lexer = moo.compile({
  WS: /[ \t]+/,
  comment: /\/\/.*?$/,
  number: /0|[1-9][0-9]*/,
  string: /"(?:\\["\\]|[^\n"\\])*"/,
  lparen: '(',
  rparen: ')',
  keyword: ['while', 'if', 'else', 'moo', 'cows'],
  NL: { match: /\n/, lineBreaks: true },
  var_declaration: /@/,
  identifier: /[a-zA-Z_]\w*/,
  assignment: /=/,
  boolean: /true|false/,
  loopFor: /->/,
  loopWhile: /=>/,
  conditionalIf: /\?\?/,
  conditionalElseIf: /<</,
  conditionalElse: />>/,
  func: /func/,
  openBrace: /{/,
  closeBrace: /}/,
  comma: /,/,
  semicolon: /;/,
  loopTo: /to/,
  loopUntil: /until/,
  plus: /\+/,
  minus: /-/,
  multiply: /\*/,
  divide: /\//,
  equals: /==/,
  greaterThan: />/,
  lessThan: /</,
  greaterOrEqual: />=/,
  lessOrEqual: /<=/,
});
lexer.reset(`@numberVar;
@stringVar;
@boolVar;
numberVar = 42;
stringVar = "Hello, world!";
boolVar = true;

@i;
@sum = 0;
@n = 5;

@i -> 1 to @n {
    @sum = @sum + @i;
}

@x = 10;
?? x > 5 {
    // do something
} << x < 0 {
    // do something else
} >> {
    // do something by default
}

func add(@a, @b) {
    return @a + @b;
}

@result = add(3, 5);
`);
while (true) {
  const token = lexer.next();
  if (!token) {
    break;
  }
  console.log(token);
}
