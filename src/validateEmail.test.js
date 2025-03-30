'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('YTst876@gmail.com.')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.'))
      .toBeTruthy();

    expect(validateEmail('TeSt1-_.y@gmail.com.'))
      .toBeTruthy();
  });

  it(`should return 'false' for the email without @`, () => {
    expect(validateEmail('test838gmail.com.'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email with . as first character`, () => {
    expect(validateEmail('.tes-t@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email with . as last character`, () => {
    expect(validateEmail('tes-1t.@gmail.com.'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email with double dots`, () => {
    expect(validateEmail('tes1:-t@gmail.com.'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email with 
   not allowed characters`, () => {
    expect(validateEmail('tes1!$%+-t@gmail.com.'))
      .toBeFalsy();
  });
});
