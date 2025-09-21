'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const exampleEmail = 'test@mail.com';
    const result = validateEmail(exampleEmail);

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com'))
      .toBeTruthy();
  });

  it('should have only english letters', () => {
    const result = validateEmail('teść-żółty838@gmail.com');

    expect(result).toBeFalsy();
  });

  it(`should not have any special character
     on the beginning of personal info`, () => {
    const result = validateEmail('!test838@gmail.com');

    expect(result).toBeFalsy();
  });

  it(`should not have any special character
     on the end of personal info`, () => {
    const result = validateEmail('test838?@gmail.com');

    expect(result).toBeFalsy();
  });

  it(`should not have dot or consecutive dots
       on the beginning of the personal_info part`, () => {
    const result = validateEmail('.test838@gmail.com');

    expect(result).toBeFalsy();
  });

  it(`should not have dot or consecutive dots
         on the end of the personal_info part`, () => {
    const result = validateEmail('test838.@gmail.com');

    expect(result).toBeFalsy();
  });

  it(`personal_info and domain_info
     should be seperated on two parts by '@'`, () => {
    const result = validateEmail('test838gmail.com.');

    expect(result).toBeFalsy();
  });
});
