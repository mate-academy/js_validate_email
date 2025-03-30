'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => expect(validateEmail).toBeDefined());

  it(`should return boolean`, () => {
    expect(typeof validateEmail('')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com')).toBeTruthy();
  });

  it(`should return 'true' for email name containing digits only`, () => {
    expect(validateEmail('838838@gmail.com')).toBeTruthy();
  });

  it(`should return 'true' for email containing '-', '_' or '.'`, () => {
    expect(validateEmail('my.new_e-mail@gmail.com')).toBeTruthy();
  });

  it(`should return 'false' for email with cyrillic letters`, () => {
    expect(validateEmail('моя_пошта@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' for email beginning with '.'`, () => {
    expect(validateEmail('.my_e-mail@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' for domain beginning with '.'`, () => {
    expect(validateEmail('my_e-mail@.gmail.com')).toBeFalsy();
  });

  it(`should return 'false' for email containing not allowed chars`, () => {
    const notAllowedChars = `!$%&'*+/=?^{|}~`.split('');

    notAllowedChars.forEach((char) => {
      expect(validateEmail(`my${char}e-mail@gmail.com`)).toBeFalsy();
    });
  });

  it(`should return 'false' for email without '@'`, () => {
    expect(validateEmail('my_e-mail_gmail.com')).toBeFalsy();
  });
});
