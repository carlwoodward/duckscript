// '
match("single quoted", 'string', 
  '\'somestring\'',  ['str', 'somestring']
);

// "
match("double quoted", 'string', 
  '"somestring"', ['str', 'somestring']
);

// sym
match('plain', 'symbol', 
  ":bar", ['sym', 'bar']
);

match('with nub3ers', 'symbol', 
  ":bar1", ['sym', 'bar1']
);

// todo: :+, :- ... etc