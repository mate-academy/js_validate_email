'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
    expect(typeof validateEmail('wrong-email')).toBe('boolean');
  });

  it(`should return true for valid emails`, () => {
    expect(validateEmail('test@mail.com')).toBe(true);
    expect(validateEmail('t@q.c')).toBe(true);
    expect(validateEmail('test123@mail-domain.com')).toBe(true);
    expect(validateEmail('first.last@gmail.com')).toBe(true);
    expect(validateEmail('my_name-99@test.co.uk')).toBe(true);
  });

  it(`should return false if @ is missing`, () => {
    expect(validateEmail('testmail.com')).toBe(false);
  });

  it(`should return false if domain has no extension`, () => {
    expect(validateEmail('test@email')).toBe(false);
  });

  it(`should return false if personal info starts with dot`, () => {
    expect(validateEmail('.test@mail.com')).toBe(false);
  });

  it(`should return false if personal info ends with dot`, () => {
    expect(validateEmail('test.@mail.com')).toBe(false);
  });

  it(`should return false if personal info contains double dots`, () => {
    expect(validateEmail('te..st@mail.com')).toBe(false);
  });

  it(`should return false if domain starts with dot`, () => {
    expect(validateEmail('test@.mail.com')).toBe(false);
  });

  it(`should return false for emails with forbidden characters`, () => {
    expect(validateEmail('te!st@mail.com')).toBe(false);
    expect(validateEmail('te+st@mail.com')).toBe(false);
    expect(validateEmail('te/st@mail.com')).toBe(false);
    expect(validateEmail('te=st@mail.com')).toBe(false);
    expect(validateEmail('te?st@mail.com')).toBe(false);
  });

  it(`should return false for empty string`, () => {
    expect(validateEmail('')).toBe(false);
  });
});
