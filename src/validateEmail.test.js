'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');
  const emails = [
    'testemail@gmail.com',
    'тестимейл@gmail.com',
    'testemai👴l@gmail.com',
    'Testemail@gmail.com',
    'TESTEMAIL@gmail.com',
    'testemail123@gmail.com',
    'test!email@gmail.com',
    'test.email@gmail.com',
    'test..email@gmail.com',
    '.testemail@gmail.com',
    'testemail.@gmail.com',
    'testemail.gmail.com',
    'testemail@@gmail.com',
    'testemail@com',
    'testemail@gmail',
    'testemail@gmail..com',
    'testemail@gmailcom',
  ];

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const validationResult = validateEmail('');

    expect(typeof validationResult).toBe('boolean');
  });

  it(`should return false for empty input`, () => {
    const validationResult = validateEmail('');

    expect(validationResult).toBe(false);
  });

  it(`should return error for email with Cyrillic symbols`, () => {
    const validationResult = validateEmail(emails[1]);

    expect(validationResult).toBe(false);
  });

  it(`should return error for email with non-ASCII symbols`, () => {
    const validationResult = validateEmail(emails[2]);

    expect(validationResult).toBe(false);
  });

  it(`should return success for email with capital letters`, () => {
    const validationResult = validateEmail(emails[3]);

    expect(validationResult).toBe(true);
  });

  it(`should return success for email without lowercase letters`, () => {
    const validationResult = validateEmail(emails[4]);

    expect(validationResult).toBe(true);
  });

  it(`should return success for email with numbers`, () => {
    const validationResult = validateEmail(emails[5]);

    expect(validationResult).toBe(true);
  });

  it(`should return success for email with a dot`, () => {
    const validationResult = validateEmail(emails[7]);

    expect(validationResult).toBe(true);
  });

  it(`should return error for email with double dot`, () => {
    const validationResult = validateEmail(emails[8]);

    expect(validationResult).toBe(false);
  });

  it(`should return error for email with dot at the start`, () => {
    const validationResult = validateEmail(emails[9]);

    expect(validationResult).toBe(false);
  });

  it(`should return error for email with dot at the end`, () => {
    const validationResult = validateEmail(emails[10]);

    expect(validationResult).toBe(false);
  });

  it(`should return error for email without @ symbol`, () => {
    const validationResult = validateEmail(emails[11]);

    expect(validationResult).toBe(false);
  });

  it(`should return error for email with double @ symbol`, () => {
    const validationResult = validateEmail(emails[12]);

    expect(validationResult).toBe(false);
  });

  it(`should return error for email without domain`, () => {
    const validationResult = validateEmail(emails[13]);

    expect(validationResult).toBe(false);
  });

  it(`should return error for email without top-domain`, () => {
    const validationResult = validateEmail(emails[14]);

    expect(validationResult).toBe(false);
  });

  it(`should return error for email without a dot in the domain`, () => {
    const validationResult = validateEmail(emails[16]);

    expect(validationResult).toBe(false);
  });
});
