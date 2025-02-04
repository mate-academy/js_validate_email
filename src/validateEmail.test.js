'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@test.com')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.')).toBeTruthy();
    expect(validateEmail('Test.8-3_8@test1-server.com')).toBeTruthy();
  });

  it(`should return 'false' for email without '@'`, () => {
    expect(validateEmail('test838gmail.com')).toBeFalsy();
  });

  it(
    `should return 'false' for personal_info starting or ending with a dot`,
    () => {
      expect(validateEmail('.test@gmail.com')).toBeFalsy();
      expect(validateEmail('test.@gmail.com')).toBeFalsy();
    }
  );

  it(`should return 'false' for personal_info containing double dots`, () => {
    expect(validateEmail('test..@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' for pesonal_info containing special `
    + `characters '! $ % & ' * + / = ? ^ { | } ~'`,
  () => {
    expect(validateEmail('~tes!t@gmail.com')).toBeFalsy();
    expect(validateEmail('te$t@gmail.com')).toBeFalsy();
    expect(validateEmail('zero%@gmail.com')).toBeFalsy();
    expect(validateEmail('chip&dale@gmail.com')).toBeFalsy();
    expect(validateEmail(`guns'n'roses@gmail.com`)).toBeFalsy();
    expect(validateEmail('two*two@four.com')).toBeFalsy();
    expect(validateEmail('two+two@four.com')).toBeFalsy();
    expect(validateEmail('marty/doc@gmail.com')).toBeFalsy();
    expect(validateEmail('e=mc^2@gmail.com')).toBeFalsy();
    expect(validateEmail('what?@gmail.com')).toBeFalsy();
    expect(validateEmail('{ania|wojtek}@gmail.com')).toBeFalsy();
  }
  );
});
