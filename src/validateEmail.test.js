'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@mail.com'))
      .toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com'))
      .toBeTruthy();

    expect(validateEmail('t@q.c'))
      .toBeTruthy();

    expect(validateEmail('user.name@domain.co'))
      .toBeTruthy();
  });

  it(`should return 'false' for an email without '@'`, () => {
    expect(validateEmail('user.namedomain.co'))
      .toBeFalsy();
  });

  it(`should return 'false' for an email with invalid characte`
    + `rs`, () => {
    expect(validateEmail('test!@mail.com'))
      .toBeFalsy();

    expect(validateEmail('test@mail$.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for an email with double dots in p`
    + `ersonal_info`, () => {
    expect(validateEmail('test..email@mail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for an email starting or ending wi`
    + `th a dot`, () => {
    expect(validateEmail('.test@mail.com'))
      .toBeFalsy();

    expect(validateEmail('test.@mail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for an email with invalid domain f`
    + `ormat`, () => {
    expect(validateEmail('test@mail'))
      .toBeFalsy();
  });

  it(`should return 'false' for an email with spaces`, () => {
    expect(validateEmail('test @mail.com'))
      .toBeFalsy();

    expect(validateEmail('test@ mail.com'))
      .toBeFalsy();

    expect(validateEmail('test@mail .com'))
      .toBeFalsy();
  });

  it(`should return 'false' for an email with special characte`
    + `rs in domain`, () => {
    expect(validateEmail('test@mail!.com'))
      .toBeFalsy();

    expect(validateEmail('test@mail#.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for an email with missing domain p`
    + `art`, () => {
    expect(validateEmail('test@.com'))
      .toBeFalsy();

    expect(validateEmail('test@com'))
      .toBeFalsy();
  });

  it(`should return 'false' for an email with multiple '@' sym`
    + `bols`, () => {
    expect(validateEmail('test@@mail.com'))
      .toBeFalsy();

    expect(validateEmail('test@mail@.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for an email with invalid characte`
    + `rs in personal_info`, () => {
    expect(validateEmail('test*mail@mail.com'))
      .toBeFalsy();

    expect(validateEmail('test&mail@mail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for an email with a hyphen at the `
    + `start of domain`, () => {
    expect(validateEmail('test@-mail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for an email with a dot at the sta`
    + `rt or end of personal_info`, () => {
    expect(validateEmail('.test@mail.com'))
      .toBeFalsy();

    expect(validateEmail('test.@mail.com'))
      .toBeFalsy();
  });

  it(`should return 'true' for a valid email with subdomain`, () => {
    expect(validateEmail('test@mail.co.uk'))
      .toBeTruthy();

    expect(validateEmail('test@sub.domain.com'))
      .toBeTruthy();
  });
});
