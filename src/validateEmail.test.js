'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail)
      .toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@gmail.com'))
      .toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test@gmail.com'))
      .toBeTruthy();
  });

  it(`should return 'true' for email with digits`, () => {
    expect(validateEmail('test123@gmail123.com'))
      .toBeTruthy();
  });

  it(`should return 'true' for email with '-'`, () => {
    expect(validateEmail('test-123@gmail-123.com'))
      .toBeTruthy();
  });

  it(`should return 'true' for email with '_'`, () => {
    expect(validateEmail('test_123@gmail_123.com'))
      .toBeTruthy();
  });

  it(`should return 'true' for email with '.'`, () => {
    expect(validateEmail('test.123@gmail.123.com'))
      .toBeTruthy();
  });

  it(`should return 'false' for email
   with symbols not from the Latin alphabet`, () => {
    expect(validateEmail('мій@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for email with whitespace`, () => {
    expect(validateEmail('te st@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for email without '@'`, () => {
    expect(validateEmail('testgmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for email without 'personal_info'`, () => {
    expect(validateEmail('@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for email without 'domain'`, () => {
    expect(validateEmail('test@'))
      .toBeFalsy();
  });

  it(`should return 'false' for email without '.' in domain`, () => {
    expect(validateEmail('test@gmailcom'))
      .toBeFalsy();
  });

  it(`should return 'false' for email
   where personal_info or domain start with dot '.'`, () => {
    expect(validateEmail('.test@gmail.com'))
      .toBeFalsy();

    expect(validateEmail('test@.gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for email
   where personal_info ends with dot '.'`, () => {
    expect(validateEmail('test.@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for email
   where dot '.' come one after the other`, () => {
    expect(validateEmail('test..123@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for email
   witch include some of this chars: !#$%&'*+/=?^:{|}~`, () => {
    expect(validateEmail(`test!#$%&'*+/=?^:{|}~123@gmail.com`))
      .toBeFalsy();
  });
});
