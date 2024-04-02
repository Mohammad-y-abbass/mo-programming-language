// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
  function id(x) {
    return x[0];
  }

  const myLexer = require('../lexer/lexer.js');
  var grammar = {
    Lexer: myLexer,
    ParserRules: [
      { name: 'main$ebnf$1', symbols: ['statement'] },
      {
        name: 'main$ebnf$1',
        symbols: ['main$ebnf$1', 'statement'],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        },
      },
      { name: 'main', symbols: ['main$ebnf$1'], postprocess: id },
      { name: '_$ebnf$1', symbols: [] },
      {
        name: '_$ebnf$1',
        symbols: ['_$ebnf$1', myLexer.has('WS') ? { type: 'WS' } : WS],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        },
      },
      { name: '_', symbols: ['_$ebnf$1'] },
      { name: '__$ebnf$1', symbols: [myLexer.has('WS') ? { type: 'WS' } : WS] },
      {
        name: '__$ebnf$1',
        symbols: ['__$ebnf$1', myLexer.has('WS') ? { type: 'WS' } : WS],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        },
      },
      { name: '__', symbols: ['__$ebnf$1'] },
      { name: 'statement', symbols: ['assignment'], postprocess: id },
      { name: 'statement', symbols: ['conditional'], postprocess: id },
      {
        name: 'assignment',
        symbols: [
          myLexer.has('identifier') ? { type: 'identifier' } : identifier,
          '_',
          myLexer.has('assignment_symbol')
            ? { type: 'assignment_symbol' }
            : assignment_symbol,
          '_',
          'expression',
        ],
        postprocess: (d) => {
          return {
            type: 'var_assign',
            var_name: d[0],
            var_value: d[4],
          };
        },
      },
      {
        name: 'expression',
        symbols: [myLexer.has('number') ? { type: 'number' } : number],
        postprocess: id,
      },
      {
        name: 'expression',
        symbols: [
          myLexer.has('identifier') ? { type: 'identifier' } : identifier,
        ],
        postprocess: id,
      },
      {
        name: 'expression',
        symbols: [myLexer.has('string') ? { type: 'string' } : string],
        postprocess: id,
      },
      {
        name: 'logical_operators',
        symbols: [
          myLexer.has('greater_or_equal')
            ? { type: 'greater_or_equal' }
            : greater_or_equal,
        ],
        postprocess: id,
      },
      {
        name: 'logical_operators',
        symbols: [
          myLexer.has('less_or_equal')
            ? { type: 'less_or_equal' }
            : less_or_equal,
        ],
        postprocess: id,
      },
      {
        name: 'logical_operators',
        symbols: [myLexer.has('greater') ? { type: 'greater' } : greater],
        postprocess: id,
      },
      {
        name: 'logical_operators',
        symbols: [myLexer.has('less') ? { type: 'less' } : less],
        postprocess: id,
      },
      {
        name: 'logical_operators',
        symbols: [myLexer.has('equal') ? { type: 'equal' } : equal],
        postprocess: id,
      },
      {
        name: 'condition',
        symbols: ['expression', 'logical_operators', 'expression'],
      },
      {
        name: 'conditional',
        symbols: [
          myLexer.has('conditional') ? { type: 'conditional' } : conditional,
          'condition',
          myLexer.has('arrow') ? { type: 'arrow' } : arrow,
          'statement',
        ],
      },
    ],
    ParserStart: 'main',
  };
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = grammar;
  } else {
    window.grammar = grammar;
  }
})();
