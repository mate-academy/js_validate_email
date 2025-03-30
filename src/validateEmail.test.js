'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = validateEmail('apple@dog.com');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'false' for the email with Cyrillic characters`, () => {
    expect(validateEmail('тест838@gmail.com.'))
      .toBeFalsy();
  });

  it(`should return 'false' for empty email`, () => {
    expect(validateEmail(''))
      .toBeFalsy();
  });

  it(`should return 'false' if email without '@'`, () => {
    expect(validateEmail('mailgmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' if two dots come one after the other`, () => {
    expect(validateEmail('ma..il@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' if personal_info starts of dot`, () => {
    expect(validateEmail('.mail@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' if domain starts of dot`, () => {
    expect(validateEmail('mail@.gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' if personal_info has double dots`, () => {
    expect(validateEmail('ma:il@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' if email 
  has specific characters '! $ % & ' * + / = ? ^ { | } ~' `, () => {
    const emails = ['ma+il@gmail.com', 'm/ail@gmail.com',
      'm!ail@gmail.com', 'mail@gma$il.com', 'm%ail@gmail.com',
      'm&ail@gmail.com', `m'ail@gmail.com`, 'm*ail@gmail.com',
      'm=ail@gmail.com', 'm?ail@gmail.com', 'm^ail@gmail.com',
      'm{ail@gmail.com', 'm}ail@gmail.com', 'm|ail@gmail.com',
      'ma~il@gmail.com'];

    for (const email in emails) {
      const result = validateEmail(email);

      expect(result).toBeFalsy();
    }
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.'))
      .toBeTruthy();
  });

  it(`should return 'true' for personal_info consisting only of digits`, () => {
    expect(validateEmail('838@gmail.com.'))
      .toBeTruthy();
  });

  it(`should return 'true' for personal_info consisting only of '-_'`, () => {
    expect(validateEmail('-_@gmail.com.'))
      .toBeTruthy();
  });
});
