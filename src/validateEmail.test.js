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

  it(`should return 'false' for an email without domain`, () => {
    const result = validateEmail('test@');

    expect(result).toBe(false);
  });

  it(`should return 'false' for an email without username`, () => {
    const result = validateEmail('@example.com');

    expect(result).toBe(false);
  });

  it(`should return 'false' for an email without @ symbol`, () => {
    const result = validateEmail('testexample.com');

    expect(result).toBe(false);
  });

  it(`should return 'false' for an email with invalid characters`, () => {
    const result = validateEmail('test@example!com');

    expect(result).toBe(false);
  });

  it(`should return 'false' for an email with multiple @ symbols`, () => {
    const result = validateEmail('test@example@com');

    expect(result).toBe(false);
  });

  it(`should return 'false' for an email with dot as the
   first character`, () => {
    const result = validateEmail('.test@example.com');

    expect(result).toBe(false);
  });

  it(`should return 'false' for an email with consecutive 
  dots in personal_info`, () => {
    const result = validateEmail('test..example@example.com');

    expect(result).toBe(false);
  });

  it(`should return 'false' for an email with dot as
   the last character in personal_info`, () => {
    const result = validateEmail('test.@example.com');

    expect(result).toBe(false);
  });

  it(`should return 'false' for an email with invalid
   characters in personal_info`, () => {
    const result = validateEmail('test$example@example.com');

    expect(result).toBe(false);
  });

  it(`should return 'false' for an email with not allowed characters`, () => {
    const notAllowedCharacters = ['!', '$', '%', '&', '\'', '*',
      '+', '/', '=', '?', '^', '{', '|', '}', '~'];

    for (const character of notAllowedCharacters) {
      const email = `test${character}example@example.com`;
      const result = validateEmail(email);

      expect(result).toBe(false);
    }
  });

  it(`should return 'false' for an email with Cyrillic 
  characters in personal_info`, () => {
    const result = validateEmail('тест@example.com');

    expect(result).toBe(false);
  });

  it(`should return 'true' for an email with hyphens in personal_info`, () => {
    const result = validateEmail('test-hyphen@example.com');

    expect(result).toBe(true);
  });

  it(`should return 'true' for an email with underscores 
  in personal_info`, () => {
    const result = validateEmail('test_underscore@example.com');

    expect(result).toBe(true);
  });

  it(`should return 'true' for an email with valid dots
   in personal_info`, () => {
    const result = validateEmail('t.e.s.t@example.com');

    expect(result).toBe(true);
  });

  it(`should return 'true' for an email with digits in domain`, () => {
    const result = validateEmail('test@example123.com');

    expect(result).toBe(true);
  });
});
