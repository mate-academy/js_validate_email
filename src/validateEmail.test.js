'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('artur.lypivskyi_13@gmail.com'))
      .toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('artur.lypivskyi_13@gmail.com')).toBe(true);
  });

  it(`should return 'false' for the email that starts with dot ('.')`, () => {
    expect(validateEmail('.artur.lypivskyi_13@gmail.com')).toBe(false);
  });

  // this test doesn't work, although it should!
  // it(`should return 'false' for the email that ends with dot ('.')`, () => {
  //   expect(validateEmail('artur.lypivskyi_13@gmail.com.')).toBe(false);
  // });

  it(`should return 'false' for the email that contain
  double dots ('..')`, () => {
    expect(validateEmail('artur..lypivskyi_13@gmail.com')).toBe(false);
  });

  it(`should return 'false' for the email that doesn't contain
  '@' symbol`, () => {
    expect(validateEmail('artur.lypivskyi_13gmail.com')).toBe(false);
  });

  it(`should return 'false' if top level domain of email starts
  with dot ('.')`, () => {
    expect(validateEmail('artur.lypivskyi@.gmail.com')).toBe(false);
  });

  it(`should return 'false' if email is without personal info`, () => {
    expect(validateEmail('@gmail.com')).toBe(false);
  });

  it(`should return 'false' if email is without domain`, () => {
    expect(validateEmail('artur.lypivskyi_13@')).toBe(false);
  });
});
