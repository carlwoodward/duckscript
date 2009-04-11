// lst

match('comma separated literals', 'list', 
  "1,2,3", ['lst', ['int', '1'], ['int', '2'], ['int', '3']]
);

match('commas and spaces separated literals', 
  'list', "1 , 2 , 3", ['lst', ['int', '1'], ['int', '2'], ['int', '3']]
);

match('space separated arrays of literals', 'list', 
  "1 'foo' :bar", ['lst', ['int', '1'], ['str', 'foo'], ['sym', 'bar']]
);

match("spaces and commas with literals", 'list', 
  "1 'foo', :bar", ['lst', ['int', '1'], ['str', 'foo'], ['sym', 'bar']]
);

match("first element is a vcall", 'list', 
  "foo, 1 :bar", ['lst', ['vcall', 'foo'], ['int', '1'], ['sym', 'bar']]
);

match("array of vcalls", 'list', 
  "foo, bar, baz", ['lst', ['vcall', 'foo'], ['vcall', 'bar'], ['vcall', 'baz']]
);

// note that the literals after foo become args to foo ... might be worth throwing a warning here
match("array with fcall element, equivalent bar,:baz,foo('x',1)", 'list', 
  "bar, :baz, foo 'x', 1",
  ['lst', 
    ['vcall', 'bar'], 
    ['sym', 'baz'], 
    ['fcall', 'foo', ['lst', ['str', 'x'], ['int', '1']]]
  ]
);

// args

match("arg list, comma separated", 'args',
  "foo,bar,baz", ['args', 'foo', 'bar', 'baz']
);

match("space separated", 'args',
  "foo bar baz", ['args', 'foo', 'bar', 'baz']
);


// 
// // array 
// match('list', "bar, :baz, foo('x'), 1",
//   ['lst', 
//     ['vcall', 'bar'], 
//     ['sym', 'baz'], 
//     ['fcall', 'foo', ['lst', ['str', 'x']]],
//     ['int', '1']
//   ]
// );