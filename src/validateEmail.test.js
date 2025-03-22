'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('Alex.test-838@gmail.com'))
      .toBeTruthy();
  });

  it(`should return 'false' when the email not contains @`, () => {
    expect(validateEmail('test838gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' for the email that begins with dot`, () => {
    expect(validateEmail('.alextest-838@gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' for the email when personal 
  info part ends with dot`, () => {
    expect(validateEmail('alextest-838.@gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' for the email when personal 
  info part has two dots one after another`, () => {
    expect(validateEmail('alextest..838@gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' for the email when personal 
  info part contains double dots`, () => {
    expect(validateEmail('alextest"838@gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' for the email that contains 
   not allowed special character`, () => {
    expect(validateEmail('alextest/838@gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' for the email when 
   domain part begins with dot`, () => {
    expect(validateEmail('alextest-838@.gmail.com'))
      .toBe(false);
  });

  it(`should return 'true' domain name part 
   contains digits and hyphens`, () => {
    expect(validateEmail('Alex.test-838@gmail-7.com'))
      .toBeTruthy();
  });
});
