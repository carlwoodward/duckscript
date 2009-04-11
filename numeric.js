// int
match('single digit', 'integer', 
  '1', ['int', '1']
);

match('many digits', 'integer',
  '1234567890',  ['int', '1234567890']
);