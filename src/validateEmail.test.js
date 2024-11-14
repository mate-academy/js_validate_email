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

  // write more tests here

  it('should return "false" non-english letters', () => {
    expect(validateEmail('bąk@doom.com'))
      .toBe(false);
  });

  it('should return "true" for digits in email', () => {
    expect(validateEmail('email123@mail123.com123'))
      .toBeTruthy();
  });

  it('should return "true" for only digits email', () => {
    expect(validateEmail('12424@342.234'))
      .toBeTruthy();
  });

  it('should return "true" for "_" in email', () => {
    expect(validateEmail('e_mail@test.com'))
      .toBeTruthy();
  });

  it('should return "true" for "-" in email', () => {
    expect(validateEmail('e-mail@test.com'))
      .toBeTruthy();
  });

  it('should return "false" if "." or "," is on begening of email', () => {
    const mail1 = '.email@test.com.';
    const mail2 = ',email@test.com.';

    expect(validateEmail(mail1))
      .toBe(false);

    expect(validateEmail(mail2))
      .toBe(false);
  });

  it('should return "false" if ",," or ".." is in email', () => {
    const mail1 = 'ema,,il@test.com.';
    const mail2 = 'em..ail@test.com.';

    expect(validateEmail(mail1))
      .toBe(false);

    expect(validateEmail(mail2))
      .toBe(false);
  });

  it('should return "false" if "@" is not in email', () => {
    expect(validateEmail('email2test.com'))
      .toBe(false);
  });

  it(`should return "false" if invalid characters "! $ % & ' * + / = ? ^ { | } ~" are in email`, () => {
    const mail1 = 'email!@test.com';
    const mail2 = 'email$@test.com';
    const mail3 = 'email%@test.com';
    const mail4 = 'email&@test.com';
    const mail5 = "email'@test.com";
    const mail6 = 'email*@test.com';
    const mail7 = 'email+@test.com';
    const mail8 = 'email/@test.com';
    const mail9 = 'email=@test.com';
    const mail10 = 'email?@test.com';
    const mail11 = 'email^@test.com';
    const mail12 = 'email{@test.com';
    const mail13 = 'email|@test.com';
    const mail14 = 'email}@test.com';
    const mail15 = 'email~@test.com';
  
    expect(validateEmail(mail1)).toBe(false);
    expect(validateEmail(mail2)).toBe(false);
    expect(validateEmail(mail3)).toBe(false);
    expect(validateEmail(mail4)).toBe(false);
    expect(validateEmail(mail5)).toBe(false);
    expect(validateEmail(mail6)).toBe(false);
    expect(validateEmail(mail7)).toBe(false);
    expect(validateEmail(mail8)).toBe(false);
    expect(validateEmail(mail9)).toBe(false);
    expect(validateEmail(mail10)).toBe(false);
    expect(validateEmail(mail11)).toBe(false);
    expect(validateEmail(mail12)).toBe(false);
    expect(validateEmail(mail13)).toBe(false);
    expect(validateEmail(mail14)).toBe(false);
    expect(validateEmail(mail15)).toBe(false);
  });
  
  it('should return  "false" for email without personal-info', () => {
    expect(validateEmail('@Test.com'))
      .toBe(false);
  });

  it('should return "false" for email without mail server', () => {
    expect(validateEmail('email.com'))
      .toBe(false);
  });

  it('should return "false" for email without domain', () => {
    expect(validateEmail('email@test'))
      .toBe(false);
  });

  it(`should return 'false' for the email with dot at the end
    of the personal_info part`, () => {
    expect(validateEmail('test652.@gmail.com'))
      .toBe(false);
  });

  it(`should return "false" for email with "." 
    on start of email server`, () => {
    expect(validateEmail(`email@.test.com.`))
      .toBe(false);
  });
});
