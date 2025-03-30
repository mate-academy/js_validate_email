'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.')).toBeTruthy();
  });

  it(`should return 'false' for the invalid email`, () => {
    expect(validateEmail('!test838@gmail.com.')).toBeFalsy();
  });

  it(`should return 'false' for the email without '.com'`, () => {
    expect(validateEmail('false@email')).toBeFalsy();
  });
});
