'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@gmail.com')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test-838@gmail.com'))
      .toBeTruthy();
  });
  
  it(`should return 'false' for email without @`, () => {
    expect(validateEmail('testgmail.com'))
      .toBeFalsy();
  });
  
  it(`should return 'false' for email with cyrillic letters`, () => {
    expect(validateEmail('емейл@gmail.com'))
      .toBeFalsy();
  });
  
  it(`should return 'false' for email with double dots`, () => {
    expect(validateEmail('test:dots@gmail.com'))
      .toBeFalsy();
  });
  
  it(`should return 'false' for email that begins with dot`, () => {
    expect(validateEmail('.test@gmail.com'))
      .toBeFalsy();
  });
  
  it(`should return 'false' for email that ends with dot`, () => {
    expect(validateEmail('test@gmail.com.'))
      .toBeFalsy();
  });
  
  it(`should return 'false' for email with 'domain' part that begins with dot`, () => {
    expect(validateEmail('test@.gmail.com'))
      .toBeFalsy();
  });
  
  it(`should return 'false' for email that contains two consecutive dots`, () => {
    expect(validateEmail('test..q@gmail.com'))
      .toBeFalsy();
  });
  
  it(`should return 'false' for email without 'personal_info' part`, () => {
    expect(validateEmail('@gmail.com'))
      .toBeFalsy();
  });
  
  it(`should return 'false' for email without 'domain' part`, () => {
    expect(validateEmail('test@.com'))
      .toBeFalsy();
  });
  
  it(`should return 'false' for email that contains not allowed characters`, () => {
    expect(validateEmail('test!test@gmail.com'))
      .toBeFalsy();
  });

  // write more tests here
});
