// vcall

match('variable access or function call with no receiver and no args', 'vcall', 
  'bar', ['vcall', 'bar']
);

match('delimited with ;', 'vcall', 
  'bar;', ['vcall', 'bar']
);

// fcall

match("braces, one literal arg", 'fcall', 
  "foo(1)", ['fcall', 'foo', ['lst', ['int', 1]]]
);

match("no braces, on literal arg", 'fcall', 
  "foo 1", ['fcall', 'foo', ['lst', ['int', 1]]]
);

match("no braces, two literal args", 'fcall', 
  "foo 1 :bar", ['fcall', 'foo', ['lst', ['int', 1], ['sym', 'bar']]]
);

match("no braces, one vcall arg", 'fcall', 
  "foo bar", ['fcall', 'foo', ['lst', ['vcall', 'bar']]]
);

match("no braces, two vcall args", 'fcall', 
  "foo bar, baz", ['fcall', 'foo', ['lst', ['vcall', 'bar'],['vcall', 'baz']]]
);

match("vcall and literal args", 'fcall', "foo bar, baz, 1, :x",
  ['fcall', 'foo', ['lst', ['vcall', 'bar'],['vcall', 'baz'],['int','1'],['sym','x']]]
);