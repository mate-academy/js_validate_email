'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = validateEmail('');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.'))
      .toBeTruthy();
  });

  it(`should return 'false' for email with non English letters`, () => {
    const result = validateEmail('пest@mail.com');

    expect(result).toBeFalsy();
  });

  it(`should return 'false' for email without @`, () => {
    const result = validateEmail('testmail.com');

    expect(result).toBeFalsy();
  });

  it(`should return 'false' for email without '.'`, () => {
    const result = validateEmail('test@mailcom');

    expect(result).toBeFalsy();
  });

  it(`should return 'false' for email with '.' the first character`, () => {
    const result = validateEmail('.test@mail.com');

    expect(result).toBeFalsy();
  });

  // it(`should return 'false' for email with '.' the last character`, () => {
  //   const result = validateEmail('test@mail.com.');

  //   expect(result).toBeFalsy();
  // });

  it(`should return 'false' for email if domain start with '.'`, () => {
    const result = validateEmail('test@.mail.com');

    expect(result).toBeFalsy();
  });

  it(`should return 'false' for email with '!' character`, () => {
    const result = validateEmail('tes!t@mail.com');

    expect(result).toBeFalsy();
  });

  it(`should return 'true' for email with '-' and digits`, () => {
    const result = validateEmail('test-1@mail.com');

    expect(result).toBeTruthy();
  });
});
