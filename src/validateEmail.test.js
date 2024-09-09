'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {

  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.'))
      .toBeTruthy();
  });

  it(`should return 'false' for an email without "@"`, () => {
    expect(validateEmail('test838gmail.com')).toBe(false);
  });

  it(`should return 'true' for a valid minimal length email`, () => {
    expect(validateEmail('a@b.c')).toBe(true);
  });

  it(`should return 'false' for an email with dot at the end `, () => {
    expect(validateEmail('test.@gmail.com')).toBe(false);
  });

  it(`should return 'false' for an email with dot at the start`, () => {
    expect(validateEmail('.test@gmail.com')).toBe(false);
  });

  it(`should return 'false' for an email with double dots
  in top-level domain`, () => {
    expect(validateEmail('test..838@gmail..')).toBe(false);
  });

  it(`should return 'false' for an email with dot
  at the start of domain`, () => {
    expect(validateEmail('test838@.gmail.com')).toBe(false);
  });

  it(`should return 'false' for an email with double dots in domain`, () => {
    expect(validateEmail('test838@..co..m..')).toBe(false);
  });

  it(`should return 'false' for an email with
  unsupported character in domain`, () => {
    expect(validateEmail('test838@gmai!l.com')).toBe(false);
  });

  it(`should return 'false' for an email with
  unsupported character`, () => {
    expect(validateEmail('test!838@gmail.com')).toBe(false);
  });

  it(`should return 'true' for a valid max length email`, () => {
    const email = 'testuser12345678901234567890@testdomain.com';

    expect(validateEmail(email)).toBe(true);
  });

  it(`should return 'true' for a valid email with multiple subdomains`, () => {
    expect(validateEmail('test@sub.mail.example.com')).toBe(true);
  });

  it(`should return 'false' for an invalid domain
  without top-level domain `, () => {
    expect(validateEmail('test838@gmail')).toBe(false);
  });

  it(`should return 'false' for an email with a dot
  at the start of the domain`, () => {
    expect(validateEmail('test838@.com')).toBe(false);
  });

  it(`should return 'true' for an email with
  a single-letter domain`, () => {
    expect(validateEmail('test838@mail.c')).toBe(true);
  });

  it(`should return 'true' for an email with
  digits and hyphens in the domain`, () => {
    expect(validateEmail('test838@my-domain123.com')).toBe(true);
  });
});
