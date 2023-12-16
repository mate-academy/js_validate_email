'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = validateEmail('test@email.com');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.')).toBeTruthy();
  });

  it(`
    should return 'false' for the email
    without '@' character
  `, () => {
    const result = validateEmail('testgmail.com');

    expect(result).toBeFalsy();
  });

  it(`
    should return 'false' for the email
    with non-latin character
  `, () => {
    const result = validateEmail('testы@gmail.com');

    expect(result).toBeFalsy();
  });

  it(`
    should return 'false' for the email
    that contains a non-latin character
  `, () => {
    const result = validateEmail('testы@gmail.com');

    expect(result).toBeFalsy();
  });

  it(`
    should return 'false' for the email
    that contains a '$' character
  `, () => {
    const result = validateEmail('test$@gmail.com');

    expect(result).toBeFalsy();
  });

  it(`
    should return 'false' for the email
    that contains a '..' in the name part
  `, () => {
    const result = validateEmail('test..me@gmail.com');

    expect(result).toBeFalsy();
  });

  it(`
    should return 'false' for the email
    that starts with a '.' in the name part
  `, () => {
    const result = validateEmail('.test.me@gmail.com');

    expect(result).toBeFalsy();
  });
});
