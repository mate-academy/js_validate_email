'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = validateEmail('');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com'))
      .toBeTruthy();
  });

  it('accepts only Latin characters', () => {
    const result = validateEmail('testЩ838@gmail.com');

    expect(result).toBeFalsy();
  });

  it(`dots cannot go before the '@' sign`, () => {
    const result = validateEmail('test.@gmail.com');

    expect(result).toBeFalsy();
  });

  it('no consecutive dots', () => {
    const result = validateEmail('te...st@gmail.com');

    expect(result).toBeFalsy();
  });

  it('cannot start with a dot', () => {
    const result = validateEmail('.test@gmail.com');

    expect(result).toBeFalsy();
  });

  it('a top-level domain must be present', () => {
    const result = validateEmail('test@gmail');

    expect(result).toBeFalsy();
  });
});
