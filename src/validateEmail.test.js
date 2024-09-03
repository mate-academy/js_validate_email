'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = validateEmail('test838@gmail.com.');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.'))
      .toBeTruthy();
  });

  // write more tests here
  it('should email not have a dot before domain', () => {
    const result = validateEmail('test838@.gmail.com.');

    expect(result).toBe(false);
  });

  it('should email not have `! $ % & \' * + / = ? ^ { | } ~`', () => {
    const result = validateEmail('test^?@838@gmail.com.');

    expect(result).toBe(false);
  });

  it('should have @', () => {
    const result = validateEmail('testgmail.com.');

    expect(result).toBe(false);
  });

  it('should have not shouble dots and email'
    + 'starting or ending with dots', () => {
    let result = validateEmail('te..st@gmail.com.');

    expect(result).toBe(false);

    result = validateEmail('.test@gmail.com');

    expect(result).toBe(false);

    result = validateEmail('test.@gmail.com');

    expect(result).toBe(false);
  });
});
