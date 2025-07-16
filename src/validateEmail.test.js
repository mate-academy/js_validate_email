'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test838@gmail.com.'))
      .toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.'))
      .toBeTruthy();
  });

  it(`should return 'true' for email contains the English letters`, () => {
    expect(validateEmail('test838@gmail.com.')).toBe(true);
  });

  it(`should return "true" for emails
    whose personal_info part contains at least one digit`, () => {
    expect(validateEmail('test8@gmail.com.')).toBe(true);
  });

  it(`should return "true" for emails
    whose personal_info part contains an underscore`, () => {
    expect(validateEmail('test_8@gmail.com.')).toBe(true);
  });

  it(`should return "true" for emails
    whose personal_info part contains hyphen`, () => {
    expect(validateEmail('test-8@gmail.com.')).toBe(true);
  });

  it(`should return "false" for emails
    whose personal_info part contains dot at the beginning`, () => {
    expect(validateEmail('.test-8@gmail.com.')).toBe(false);
  });

  it(`should return "false" for emails
    whose domain part contains dot at the beginning`, () => {
    expect(validateEmail('test-8@.gmail.com.')).toBe(false);
  });

  it(`should return "false" for emails
  whose personal_info part contains a period at the end`, () => {
    expect(validateEmail('test-8.@gmail.com.')).toBe(false);
  });

  it(`should return "false" for emails
  whose personal_info part contains consecutive periods`, () => {
    expect(validateEmail('test-8..@gmail.com.')).toBe(false);
  });

  it(`should return "false" for emails without @`, () => {
    expect(validateEmail('test-8gmail.com.')).toBe(false);
  });

  it(`should return "true" for emails
  whose domain name part contains letters`, () => {
    expect(validateEmail('test-8@gmail.com.')).toBe(true);
  });

  it(`should return "true" for emails
  whose domain name part contains digits`, () => {
    expect(validateEmail('test-8@gmail6.com.')).toBe(true);
  });

  it(`should return "true" for emails
  whose domain name part contains hyphens`, () => {
    expect(validateEmail('test-8@gmail-6.com.')).toBe(true);
  });

  it(`should return "true" for emails
  whose domain name part contains dots`, () => {
    expect(validateEmail('test-8@gmail.6.com.')).toBe(true);
  });

  it(`should return "false" for emails
  with special characters`, () => {
    expect(validateEmail('tes$t-8@gmail.6.com.')).toBe(false);
  });

  // write more tests here
});
