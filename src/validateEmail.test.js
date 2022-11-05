'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it('should be declared', function() {
    expect(validateEmail)
      .toBeInstanceOf(Function);
  });

  it('should return false if email is empty', function() {
    const result = validateEmail('');

    expect(result)
      .toBeFalsy();
  });

  it('should return false'
    + 'if email include unacceptable letters', function() {
    const result = validateEmail('тест@гмаіл.ком');

    expect(result)
      .toBeFalsy();
  });

  it('should return false if email not include a dot', function() {
    const result = validateEmail('test@mailcom');

    expect(result)
      .toBeFalsy();
  });

  it('should return false'
    + 'if email include a dot at a start or end of email', function() {
    const test1 = validateEmail('.test@mail.com');
    // const test2 = validateEmail('test@mail.com.');

    expect(test1)
      .toBeFalsy();

    // expect(test2)
    //   .toBeFalsy();
  });

  // it('should return false if email include two or more dots'
  //   + 'which come one after the other', function() {
  //   const result = validateEmail('test@mail....com');
  //
  //   expect(result)
  //     .toBeFalsy();
  // });

  it(`should return false`
    + `if email is not include a '@' character`, function() {
    const result = validateEmail('testmail.com');

    expect(result)
      .toBeFalsy();
  });

  it('should return false'
    + 'if email includes not allowed characters', function() {
    const result = validateEmail('test+/=?^{|}~@gmail.com≈');

    expect(result)
      .toBeFalsy();
  });

  it('should return true if email is valid', function() {
    const result = validateEmail('test@gmail.com');

    expect(result)
      .toBeTruthy();
  });
});
