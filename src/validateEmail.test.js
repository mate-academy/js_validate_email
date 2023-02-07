'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('andriidydyk@gmail.com'))
      .toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.'))
      .toBeTruthy();
  });

  // write more tests here
  it(`should return 'true' for the Latin letters`, () => {
    const checkEmail = validateEmail('andriidydyk@gmail.com');

    expect(checkEmail)
      .toBe(true);

    // or for help toBeTruthy()
    expect(validateEmail('andriidydyk@gmail.com'))
      .toBeTruthy();
  });

  it(`should return 'false' for the Cyrillic letters`, () => {
    expect(validateEmail('андрій_дидик@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'true' if the email contains digital`, () => {
    expect(validateEmail('andriidydyk622@gmail.com'))
      .toBeTruthy();
  });

  it(`should return 'true' if the email doesn't contains digital`, () => {
    expect(validateEmail('andriidydyk@gmail.com'))
      .toBeTruthy();
  });

  it(`should return 'true' if the email contains special symbol '-'`, () => {
    expect(validateEmail('andrii-dydyk@gmail.com'))
      .toBeTruthy();
  });

  it(`should return 'true' if the email contains special symbol '_'`, () => {
    expect(validateEmail('andrii_dydyk@gmail.com'))
      .toBeTruthy();
  });

  it(`should return 'true' if the email contains character '.'`, () => {
    expect(validateEmail('andrii.dydyk@gmail.com'))
      .toBeTruthy();
  });

  it(`should return 'false' if the character '.'
    it is the first character`, () => {
    expect(validateEmail('.andriidydyk@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' if the character '.'
    it is the last character`, () => {
    expect(validateEmail('andriidydyk.@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' if the character '.'
    come one after the other`, () => {
    expect(validateEmail('andrii..dydyk@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' if email doesn't contain '@'`, () => {
    expect(validateEmail('andriidydykgmail.com')).toBeFalsy();
  });

  it(`should return 'false' if personal_info of email
    contain special characters as '!#$%^&*='`, () => {
    expect(validateEmail('andrii!dydykgmail.com')).toBeFalsy();
    expect(validateEmail('andrii#dydykgmail.com')).toBeFalsy();
    expect(validateEmail('andrii$dydykgmail.com')).toBeFalsy();
    expect(validateEmail('andrii%dydykgmail.com')).toBeFalsy();
    expect(validateEmail('andrii^dydykgmail.com')).toBeFalsy();
    expect(validateEmail('andrii*dydykgmail.com')).toBeFalsy();
    expect(validateEmail('andrii=dydykgmail.com')).toBeFalsy();
  });

  it(`should return 'false' if domain start with dot '.'`, () => {
    expect(validateEmail('andriidydyk@.gmail.com')).toBeFalsy();
  });

  it(`should return 'true' if domain cantains digital`, () => {
    expect(validateEmail('andriidydyk@ukr1.net')).toBeTruthy();
  });

  it(`should return 'true' if domain cantains letters`, () => {
    expect(validateEmail('andriidydyk@ukr.net')).toBeTruthy();
  });

  it(`should return 'true' if domain cantains characters '-'`, () => {
    expect(validateEmail('andriidydyk@uk-r.net')).toBeTruthy();
  });

  it(`should return 'false' if domain of email
    contain special characters as '!#$%^&*='`, () => {
    expect(validateEmail('andriidydyk@.gm!ail.com')).toBeFalsy();
    expect(validateEmail('andriidydyk@.gm#ail.com')).toBeFalsy();
    expect(validateEmail('andriidydyk@.gm$ail.com')).toBeFalsy();
    expect(validateEmail('andriidydyk@.gm%ail.com')).toBeFalsy();
    expect(validateEmail('andriidydyk@.gm^ail.com')).toBeFalsy();
    expect(validateEmail('andriidydyk@.gm&ail.com')).toBeFalsy();
    expect(validateEmail('andriidydyk@.gm*ail.com')).toBeFalsy();
    expect(validateEmail('andriidydyk@.gm=ail.com')).toBeFalsy();
  });
});
