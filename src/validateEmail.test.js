'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it('should be declared', () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it('should return boolean', () => {
    const result = validateEmail('test@mail.com');

    expect(typeof result).toBe('boolean');
  });

  describe(`Email validation with valid input`, () => {
    it(`should return 'true' for the valid email`, () => {
      expect(validateEmail('test@mail.com'))
        .toBeTruthy();
    });

    it(`should return 'true' for email with underscore '_'`
       + `in personal_info part`, () => {
      expect(validateEmail('john_doe@mail.com'))
        .toBeTruthy();
    });

    it(`should return 'true' for email with hyphen '-'`
       + `in personal_info part`, () => {
      expect(validateEmail('john-doe@mail.com'))
        .toBeTruthy();
    });

    it(`should return 'true' for email with digits`
       + `in personal_info part`, () => {
      expect(validateEmail('johndoe123@mail.com'))
        .toBeTruthy();
    });

    it(`should return 'true' for email with dot '.'`
       + `in personal_info part`, () => {
      expect(validateEmail('john.doe@mail.com'))
        .toBeTruthy();
    });

    it(`should return 'true' for email with hyphen '-'`
       + `in domain name part`, () => {
      expect(validateEmail('johndoe@my-mail.com'))
        .toBeTruthy();
    });
  });

  describe(`Email validation with invalid input`, () => {
    it(`should return 'false' for email that`
       + `personal_info part start with '.'`, () => {
      expect(validateEmail('.johndoe@mail.com'))
        .toBeFalsy();
    });

    it(`should return 'false' for email with cyrillic letters`, () => {
      expect(validateEmail('.тест@mail.com'))
        .toBeFalsy();
    });

    it(`should return 'false' for email with '.' as last char`
       + `in personal_info part`, () => {
      expect(validateEmail('johndoe.@mail.com'))
        .toBeFalsy();
    });

    it(`should return 'false' for email with double dots '..'`
       + `in personal_info part`, () => {
      expect(validateEmail('john..doe@mail.com'))
        .toBeFalsy();
    });

    it(`should return 'false' for email without '@'`, () => {
      expect(validateEmail('johndoemail.com'))
        .toBeFalsy();
    });

    it(`should return 'false' for email that`
       + `domain name part start with '.'`, () => {
      expect(validateEmail('johndoe@.mail.com'))
        .toBeFalsy();
    });

    it(`should return 'false' for email with '!'`
       + `in personal_info part`, () => {
      expect(validateEmail('john!doe@mail.com'))
        .toBeFalsy();
    });

    it(`should return 'false' for email with '!'`
       + `in domain name part`, () => {
      expect(validateEmail('johndoe@mail!.com'))
        .toBeFalsy();
    });

    it(`should return 'false' for email with '?'`
       + `in personal_info part`, () => {
      expect(validateEmail('john?doe@mail.com'))
        .toBeFalsy();
    });

    it(`should return 'false' for email with '?'`
       + `in domain name part`, () => {
      expect(validateEmail('johndoe@mail?.com'))
        .toBeFalsy();
    });

    it(`should return 'false' for email with '/'`
       + `in personal_info part`, () => {
      expect(validateEmail('john/doe@mail.com'))
        .toBeFalsy();
    });

    it(`should return 'false' for email with '/'`
       + `in domain name part`, () => {
      expect(validateEmail('johndoe@mai/.com'))
        .toBeFalsy();
    });

    it(`should return 'false' for email with '~'`
       + `in personal_info part`, () => {
      expect(validateEmail('john~doe@mail.com'))
        .toBeFalsy();
    });

    it(`should return 'false' for email with '~'`
       + `in domain name part`, () => {
      expect(validateEmail('johndoe@mail~.com'))
        .toBeFalsy();
    });

    it(`should return 'false' for email without '.'`
       + `in domain name part`, () => {
      expect(validateEmail('johndoe@mail'))
        .toBeFalsy();
    });
  });
});
