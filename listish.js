// comma separated arrays of literals

match('comma separated literals', 'array', 
  "1,2,3", ['arr', ['int', '1'], ['int', '2'], ['int', '3']]
);

match('commas and spaces separated literals', 
  'array', "1 , 2 , 3", ['arr', ['int', '1'], ['int', '2'], ['int', '3']]
);

// space separated arrays of literals 

match('space separated arrays of literals', 'array', 
  "1 'foo' :bar", ['arr', ['int', '1'], ['str', 'foo'], ['sym', 'bar']]
);

// spaces and commas with literals

match("spaces and commas with literals", 'array', 
  "1 'foo', :bar", ['arr', ['int', '1'], ['str', 'foo'], ['sym', 'bar']]
);

// array where first element is a vcall and the rest are literals

match("first element is a vcall", 'array', 
  "foo, 1 :bar", ['arr', ['vcall', 'foo'], ['int', '1'], ['sym', 'bar']]
);

match("array of vcalls", 'array', 
  "foo, bar, baz", ['arr', ['vcall', 'foo'], ['vcall', 'bar'], ['vcall', 'baz']]
);


// note that the literals after foo become args to foo ... might be worth throwing a warning here
match("array with fcall element, equivalent bar,:baz,foo('x',1)", 'array', 
  "bar, :baz, foo 'x', 1",
  ['arr', 
    ['vcall', 'bar'], 
    ['sym', 'baz'], 
    ['fcall', 'foo', ['arr', ['str', 'x'], ['int', '1']]]
  ]
);
// 
// // array 
// match('array', "bar, :baz, foo('x'), 1",
//   ['arr', 
//     ['vcall', 'bar'], 
//     ['sym', 'baz'], 
//     ['fcall', 'foo', ['arr', ['str', 'x']]],
//     ['int', '1']
//   ]
// );