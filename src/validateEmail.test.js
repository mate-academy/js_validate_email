'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
  });

  it(`should return true for a valid email`, () => {
    expect(validateEmail('test@mail.com')).toBe(true);
    expect(validateEmail('user.name-12@mail.co.uk')).toBe(true);
    expect(validateEmail('a@b.c')).toBe(true);
  });

  it(`should return false when email does not contain @`, () => {
    expect(validateEmail('testmail.com')).toBe(false);
  });

  it(`should return false when personal part starts with dot`, () => {
    expect(validateEmail('.test@mail.com')).toBe(false);
  });

  it(`should return false when personal part ends with dot`, () => {
    expect(validateEmail('test.@mail.com')).toBe(false);
  });

  it(`should return false when there are double dots in personal part`, () => {
    expect(validateEmail('te..st@mail.com')).toBe(false);
  });

  it(`should return false when domain starts with dot`, () => {
    expect(validateEmail('test@.mail.com')).toBe(false);
  });

  it(`should return false when forbidden characters are used`, () => {
    expect(validateEmail('test!@mail.com')).toBe(false);
    expect(validateEmail('user&name@mail.com')).toBe(false);
  });

  it(`should return false for missing domain extension`, () => {
    expect(validateEmail('test@mail')).toBe(false);
  });

  it(`should return false when local part is missing`, () => {
    expect(validateEmail('@domain.com')).toBe(false);
  });

  it(`should return false when domain part is missing`, () => {
    expect(validateEmail('user@')).toBe(false);
  });

  it(`should return false when email contains more than one @`, () => {
    expect(validateEmail('a@b@c.com')).toBe(false);
  });

  it(`should allow underscore in personal part`, () => {
    expect(validateEmail('user_name@mail.com')).toBe(true);
  });

  it(`should allow digits and hyphens in domain`, () => {
    expect(validateEmail('test@mail1-domain.com')).toBe(true);
  });

  it(`should return false when forbidden characters like + are used`, () => {
    expect(validateEmail('test+plus@mail.com')).toBe(false);
  });
});
