'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');
  const cases = [
    {
      input: 'test@mail.com', expected: true,
    },
    {
      input: 't@q.c', expected: true,
    },
    {
      input: 'test838@gmail.com', expected: true,
    },
  ];

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test838@gmail.com')).toBe('boolean');
  });

  it(`should return 'true' for all valid emails`, () => {
    cases.forEach(({ input, expected }) => {
      expect(validateEmail(input)).toBe(expected);
    });
  });

  it(`should return 'false' for email with not allowed char`, () => {
    expect(validateEmail('test!838@gmail.com')).toBe(false);
  });

  it(`should return 'false' for email with double dots`, () => {
    expect(validateEmail('test..838@gmail.com')).toBe(false);
  });

  it(`should return 'false' if email starts with '.'`, () => {
    expect(validateEmail('.test838@gmail.com')).toBe(false);
  });

  it(`should return 'false' for emails without '@'`, () => {
    expect(validateEmail('test838gmail.com')).toBe(false);
  });

  it(`should return 'false' for email without dot in domain part`, () => {
    expect(validateEmail('false@email')).toBe(false);
  });

  it(`should return 'false' if '.' is directly before '@'`, () => {
    expect(validateEmail('false.@email.com')).toBe(false);
  });

  it(`should return 'false' if '.' is directly after '@'`, () => {
    expect(validateEmail('false@.email.com')).toBe(false);
  });
});
