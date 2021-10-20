'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('')).toEqual('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('quality_21@gmail.com')).toEqual(true);
  });

  it(`should return 'false' for the invalid email
    (does not contain required character '@')`, () => {
    expect(validateEmail('quaility21_gmail.com')).toEqual(false);
  });

  it(`should return 'false' for the invalid email
    (contain non-printable characters)`, () => {
    expect(validateEmail('quality21 _ @gmail.com')).toEqual(false);
  });

  it(`should return 'false' for the invalid email
    (only Latin letters)`, () => {
    expect(validateEmail('qыlity21_gmail.com')).toEqual(false);
  });

  it(`should return 'false' for the invalid email
    (special characters for
    'personal_info' part only: '!$%&'*+-/=?^_{|}~')`, () => {
    expect(validateEmail('qa:lity21@gmail.com')).toEqual(false);
  });

  it(`should return 'false' for the invalid email
    ('.' cannot be the first symbol in the 'personal_info' part)`, () => {
    expect(validateEmail('.quality21@gmail.com')).toEqual(false);
  });

  it(`should return 'false' for the invalid email
    ('.' cannot be the last symbol in the 'personal_info' part)`, () => {
    expect(validateEmail('quality21.@gmail.com')).toEqual(false);
  });

  it(`should return 'false' for the invalid email
    ('.' cannot be the first symbol in the 'domain' part)`, () => {
    expect(validateEmail('quality21@.gmail.com')).toEqual(false);
  });

  it(`should return 'false' for the invalid email
    (cannot include '..')`, () => {
    expect(validateEmail('q..ality21@gmail.com')).toEqual(false);
  });
});
