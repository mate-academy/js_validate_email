'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = validateEmail('test@test.mate');

    expect(typeof result).toBe('boolean');
  });

  describe(`should return 'true' for `, () => {
    it(`email that contain personal and domain`
      + ` parts separated by @`, () => {
      const result = validateEmail('test@test.mate');

      expect(result).toBe(true);
    });

    it(`email that contain digits`, () => {
      expect(validateEmail('test@test1.mate')).toBe(true);
      expect(validateEmail('test1@test.mate')).toBe(true);
    });

    it(`email that contain symbol '_'`, () => {
      expect(validateEmail('test2@te_st.mate')).toBe(true);
      expect(validateEmail('_test3@test.mate')).toBe(true);
    });

    it(`email that contain symbol '.' in the permissive position`
      + `of the personal part`, () => {
      const result = validateEmail('test.4@test.mate');

      expect(result).toBe(true);
    });

    it(`email that contain symbol  '-'`, () => {
      expect(validateEmail('test5-with-hyphen-personal-part@test.mate'))
        .toBe(true);
      expect(validateEmail('test5@with-hyphen-domain-part.com')).toBe(true);
    });
  });

  describe(`should return 'false' for `, () => {
    it(`email with missed @ symbol`, () => {
      const result = validateEmail('invalid.example.com');

      expect(result).toBe(false);
    });

    it(`email with double dot`, () => {
      expect(validateEmail('invalid..email@example.com')).toBe(false);
    });

    it(`email that starts with dot in personal and domain parts`, () => {
      expect(validateEmail('.invalid@example.com')).toBe(false);
      expect(validateEmail('invalid@.example.com')).toBe(false);
    });

    it(`email that ends with dot in personal part`, () => {
      expect(validateEmail('invalid.@example.com')).toBe(false);
    });

    it(`email that have invalid characters`, () => {
      expect(validateEmail('invalid!example@example.com')).toBe(false);
      expect(validateEmail('invalidexample@example!.com')).toBe(false);
      expect(validateEmail('invalid$example@example.com')).toBe(false);
      expect(validateEmail('invalidexample@example$.com')).toBe(false);
      expect(validateEmail('invalid%example@example.com')).toBe(false);
      expect(validateEmail('invalidexample@example%.com')).toBe(false);
      expect(validateEmail('invalid&example@example.com')).toBe(false);
      expect(validateEmail('invalidexample@example&.com')).toBe(false);
      expect(validateEmail(`invalid'example@example.com`)).toBe(false);
      expect(validateEmail(`invalidexample@example'.com`)).toBe(false);
      expect(validateEmail('invalid*example@example.com')).toBe(false);
      expect(validateEmail('invalidexample@example*.com')).toBe(false);
      expect(validateEmail('invalid+example@example.com')).toBe(false);
      expect(validateEmail('invalidexample@example+.com')).toBe(false);
      expect(validateEmail('invalid/example@example.com')).toBe(false);
      expect(validateEmail('invalidexample@example/.com')).toBe(false);
      expect(validateEmail(`invalid=example@example.com`)).toBe(false);
      expect(validateEmail(`invalidexample@example=.com`)).toBe(false);
      expect(validateEmail('invalid?example@example.com')).toBe(false);
      expect(validateEmail('invalidexample@example?.com')).toBe(false);
      expect(validateEmail('invalid^example@example.com')).toBe(false);
      expect(validateEmail('invalidexample@example^.com')).toBe(false);
      expect(validateEmail('invalid{example@example.com')).toBe(false);
      expect(validateEmail('invalidexample@example{.com')).toBe(false);
      expect(validateEmail('invalid|example@example.com')).toBe(false);
      expect(validateEmail('invalidexample@example|.com')).toBe(false);
      expect(validateEmail(`invalid}example@example.com`)).toBe(false);
      expect(validateEmail(`invalidexample@example}.com`)).toBe(false);
      expect(validateEmail('invalid~example@example.com')).toBe(false);
      expect(validateEmail('invalidexample@example~.com')).toBe(false);
    });
  });
});
