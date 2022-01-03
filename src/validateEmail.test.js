'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test1@gmail.com') === 'boolean').toBeTruthy();
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('ado.las_-666@g1-mai.l.com.')).toBe(true);
  });

  it(`should return 'false' for the email without '@' symbol`, () => {
    expect(validateEmail('adolas666gmail.com')).toBe(false);
  });

  it(`should return 'false' for the email with dot at the beginning 
    of the personal_info part`, () => {
    expect(validateEmail('.adolas666@gmail.com')).toBe(false);
  });

  it(`should return 'false' for the email with dot at the end 
    of the personal_info part`, () => {
    expect(validateEmail('adolas666.@gmail.com')).toBe(false);
  });

  it(`should return 'false' for the email with 2 dots in a row 
    in the personal_info part`, () => {
    expect(validateEmail('adol..as666@gmail.com')).toBe(false);
  });

  it(`should return 'false' for the email with non-Latin letters`, () => {
    expect(validateEmail('тест@gmail.com')).toBe(false);
  });

  it(`should return 'false' for the email with dot 
    at the beginning of the domain name`, () => {
    expect(validateEmail('adolas666@.gmail.com')).toBe(false);
  });

  it(`should return 'false' for the email without the subdomain part`, () => {
    expect(validateEmail('adolas666@gmail')).toBe(false);
  });

  it(`should return 'false' for the email with one of the 
    not allowed characters`, () => {
    const chars = `!$%&'*+/=?^{|}~`;
    let randChar = '';

    for (let i = 0; i <= 1; i++) {
      randChar += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    expect(validateEmail(`adola&${randChar}666@gmail`)).toBe(false);
  });
});
