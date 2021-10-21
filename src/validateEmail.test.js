'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {

  });

  it(`should return 'true' for the valid email...`, () => {
    expect(validateEmail('adolas+666@gmail.com.')).toBe(true);
  });

  // write more tests here
});
