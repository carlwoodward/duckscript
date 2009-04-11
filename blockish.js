// blk - blocks of code



// proc - closures

match('one arg, literal in body', 'proc', 
  '{arg1|1}', ['proc', ['args', 'arg1'], ['int', '1']]
);

match('two args (commas), single vcall in body', 'proc', 
  '{ arg1, arg2 | foo }', ['proc', ['args', 'arg1', 'arg2'], ['vcall', 'foo']]
);