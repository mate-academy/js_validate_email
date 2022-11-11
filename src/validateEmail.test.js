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
    expect(validateEmail(
      'test_123.TEST-test@mail123.COM'))
      .toBe(true);
  });

  it(`should return 'true' for the valid email 
    contains character "-"`, () => {
    expect(validateEmail('test-marina@mail.com')).toBe(true);
  });

  it(`should return 'true' for the valid email 
    contains character "_"`, () => {
    expect(validateEmail('test_marina@mail.com')).toBe(true);
  });

  it(`should return 'true' for the valid email 
    contains digits`, () => {
    expect(validateEmail('123456789@mail.com')).toBe(true);
  });

  it(`should return 'true' for the valid email 
    contains character '.' and it is not first/last character 
    or not come one after the other`, () => {
    expect(validateEmail('test.test.test@mail.com')).toBe(true);
  });

  it(`should return 'false' for the email without "@"`
    , () => {
      expect(validateEmail('testmail.com')).toBe(false);
    });

  it(`should return 'false' for the email 
    where personal_info starts with '.'`, () => {
    expect(validateEmail('.test@mail.com')).toBe(false);
  });

  it(`should return 'false' for the email 
    where domain starts with '.'`, () => {
    expect(validateEmail('test@.mail.com')).toBe(false);
  });

  it(`should return 'false' for the email 
    contains cyrillic letter`, () => {
    expect(validateEmail('Жest@mail.com')).toBe(false);
  });

  it(`should return 'false' for the email 
    contains ":" in personal_info part`, () => {
    expect(validateEmail('te:st@mail.com')).toBe(false);
  });

  it(`should return 'false' for the email 
    contains ".." in personal_info part`, () => {
    expect(validateEmail('te..st@mail.com')).toBe(false);
  });

  it(`should return 'false' for the email 
    contains "$" `, () => {
    expect(validateEmail('te$st@mail.com')).toBe(false);
    // we can do the same for all characters:
    //! $ % & ' * + / = ? ^ { | } ~
  });

  it(`should return 'false' for the email 
    where domain does not contain "." `, () => {
    expect(validateEmail('test@mail')).toBe(false);
    // we can do the same for all characters:
    //! $ % & ' * + / = ? ^ { | } ~
  });
});
