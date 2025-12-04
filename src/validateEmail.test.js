'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = validateEmail('test838@gmail.com');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'true' for the valid 'email'`, () => {
    let result = validateEmail('t@q.c');

    expect(result).toBeTruthy();

    result = validateEmail('test@mail.com');

    expect(result).toBeTruthy();
  });

  it(`should return 'false' for the invalid 'email'`, () => {
    expect(validateEmail('testgmail.com')).toBeFalsy();
  });

  it(`should be'false' for 'personal_info' with non-Latin characters`, () => {
    expect(validateEmail('тест838@gmail.com.')).toBeFalsy();
  });

  it(`should be 'false' for 'personal_info' without number`, () => {
    expect(validateEmail('test@gmail.com.')).toBeFalsy();
  });

  it(`should return false if 'personal_info' starts with dot`, () => {
    expect(validateEmail('.test838@gmail.com')).toBeFalsy();
  });

  it(`should return false if 'domain' starts with dot`, () => {
    expect(validateEmail('test838@.gmail.com')).toBeFalsy();
  });

  it(`should return false if 'personal_info' ends with dot`, () => {
    expect(validateEmail('test838.@gmail.com')).toBeFalsy();
  });

  it(`should return false if 'personal_info' has consecutive dots`, () => {
    expect(validateEmail('test..838@gmail.com')).toBeFalsy();
  });

  it(`should return false if 'personal_info' not include '@'`, () => {
    expect(validateEmail('test838gmail.com')).toBeFalsy();
  });

  it(`should return false if 'personal_info' not include ':'`, () => {
    expect(validateEmail('test:838@gmail.com')).toBeFalsy();
  });

  it(`should return false if 'personal_info' not allowed characters`, () => {
    expect(validateEmail('test$%838@gmail.com')).toBeFalsy();
  });

  it(`should return false if 'domain' without letters`, () => {
    expect(validateEmail('test838@')).toBeFalsy();
  });

  it(`should return false if 'domain' without dot`, () => {
    expect(validateEmail('false@email')).toBeFalsy();
  });

  it(`should return true if 'domain' with number`, () => {
    expect(validateEmail('test838@gma1il.com')).toBeTruthy();
  });

  it(`should return true if 'personal_info' with '-'`, () => {
    expect(validateEmail('test-838@gmail.com')).toBeTruthy();
  });

  it(`should return true if 'personal_info' with '_'`, () => {
    expect(validateEmail('tes_t838@gmail.com')).toBeTruthy();
  });
});
