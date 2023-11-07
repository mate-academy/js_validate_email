'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test838@gmail.com')).toBe('boolean');
  });

  describe(`should return 'true'`, () => {
    it(`should return 'true' for the valid email`, () => {
      expect(validateEmail('test838@gmail.com'))
        .toBeTruthy();
    });

    it(`should return 'true' for the valid email
    and domain with digit`, () => {
      expect(validateEmail('test838@f22.com'))
        .toBeTruthy();
    });

    it(`should return 'true' for the valid email
    and domain with (-) symbol`, () => {
      expect(validateEmail('test838@f-f.com'))
        .toBeTruthy();
    });

    it(`should return 'true' for the valid email
    and domain with (_) symbol`, () => {
      expect(validateEmail('test838@f_f.com'))
        .toBeTruthy();
    });
  });

  describe(`should return 'false'`, () => {
    it(`should return 'false' for the email
    without name part`, () => {
      expect(validateEmail('@gmail.com'))
        .toBeFalsy();
    });

    it(`should return 'false' for the email
    without domain part`, () => {
      expect(validateEmail('name@.com'))
        .toBeFalsy();
    });

    it(`should return 'false' for the email
    without TLD part`, () => {
      expect(validateEmail('name@gmail'))
        .toBeFalsy();
    });

    it(`should return 'false' for the email
    without @ symbol`, () => {
      expect(validateEmail('namegmail.com'))
        .toBeFalsy();
    });

    it(`should return 'false' for the email
    with Cyrillics symbol`, () => {
      expect(validateEmail('тест@gmail.com'))
        .toBeFalsy();
    });

    it(`should return 'false' if the email name
    starts with dot`, () => {
      expect(validateEmail('.test838@gmail.com'))
        .toBe(false);
    });

    it(`should return 'false' if email domain
    starts with dot`, () => {
      expect(validateEmail('test838@.gmail.com'))
        .toBe(false);
    });

    it(`should return 'false' for the email name
    with double dots`, () => {
      expect(validateEmail('test..838@gmail.com'))
        .toBe(false);
    });

    it(`should return 'false' for the email name
    with special char (except . - _)`, () => {
      expect(validateEmail('te$&:st838@gmail.com'))
        .toBe(false);
    });
  });
});
