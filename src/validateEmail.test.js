'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = validateEmail('test@mail.com');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test123@mail.com'))
      .toBeTruthy();
  });

  it(`should return 'false' for the email without '@'`, () => {
    expect(validateEmail('test1mail.com'))
      .toBe(false);
  });

  it(`should return 'false' if personal_info starts with '.'`, () => {
    expect(validateEmail('.test@mail.com'))
      .toBe(false);
  });

  it(`should return 'false' if domain starts with '.'`, () => {
    expect(validateEmail('test@.mail.com'))
      .toBe(false);
  });

  it(`should return 'false' if personal_info contains '..'`, () => {
    expect(validateEmail('te..st@mail.com'))
      .toBe(false);
  });

  // eslint-disable-next-line max-len
  it(`should return 'false' if email contains not allowed characters "! $ % & ' * + / = ? ^ { | } ~"`, () => {
    expect(validateEmail('te$t@mail.com'))
      .toBe(false);
  });
});
