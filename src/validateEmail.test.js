'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof validateEmail('zhukipauki@gmail.com')).toBe('boolean');
  });

  it(`should return 'true' for the valid email 
  with capital letter in 'personal_info' part`, () => {
    expect(validateEmail('Zhukipauki@gmail.com')).toBe(true);
  });

  it(`should return 'true' for the valid email with 
  digit in 'personal_info' part.`, () => {
    expect(validateEmail('Zhukipauki1@gmail.com')).toBe(true);
  });

  it(`should return 'true' for the valid email with 
  '.' in 'personal_info' part if it is not 
  the first or last character.`, () => {
    expect(validateEmail('Zhuk.ipauki@gmail.com')).toBe(true);
  });

  it(`should return 'false' for the email without '@'`, () => {
    expect(validateEmail('Zhukipaukigmail.com')).toBe(false);
  });

  it(`should return 'false' for the valid email with 
  '.' in 'personal_info' part if it is  
  the first character.`, () => {
    expect(validateEmail('.Zhukipauki@gmail.com')).toBe(false);
  });

  it(`should return 'false' for the valid email with 
  '.' in 'personal_info' part if it is  
  the last character.`, () => {
    expect(validateEmail('Zhukipauki.@gmail.com')).toBe(false);
  });

  it(`should return 'false' for the valid email with 
  '.' at the start of 'domain' part`, () => {
    expect(validateEmail('Zhukipauki@.gmail.com')).toBe(false);
  });

  it(`should return 'false' for the valid email with double
  '.' in 'personal_info' part.`, () => {
    expect(validateEmail('Zhukip..auki@gmail.com')).toBe(false);
  });

  it(`should return 'true' for the valid email 
  with digit in the 'domain' part`, () => {
    expect(validateEmail('Zhukipauki@gma6il.com')).toBe(true);
  });

  it(`should return 'true' for the valid email 
  with hyphens in the 'domain' part`, () => {
    expect(validateEmail('Zhukipauki@gma-il.com')).toBe(true);
  });

  it(`should return 'true' for the valid email 
  with dots in the 'domain' part`, () => {
    expect(validateEmail('Zhukipauki@gma.il.com')).toBe(true);
  });
});
