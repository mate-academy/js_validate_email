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
      const result = validateEmail('test1@test.mate');

      expect(result).toBe(true);
    });

    it(`email that contain '_' symbol in the personal part`, () => {
      const result = validateEmail('_test2@test.mate');

      expect(result).toBe(true);
    });

    it(`email that contain '_' symbol in the domain part`, () => {
      const result = validateEmail('test2@test_test.mate');

      expect(result).toBe(true);
    });

    it(`email that contain allowed '.' symbol in personal part`, () => {
      const result = validateEmail('test.4@test.mate');

      expect(result).toBe(true);
    });

    it(`email that contain '-' symbol in the domain part`, () => {
      const result = validateEmail('other.email@with-hyphen-example.com');

      expect(result).toBe(true);
    });

    it(`email that contain '-' symbol in the personal part`, () => {
      const result = validateEmail('email-with-hyphen@example.com');

      expect(result).toBe(true);
    });
  });

  describe(`should return 'false' for `, () => {
    it(`email with missed @ symbol`, () => {
      const result = validateEmail('invalid.example.com');

      expect(result).toBe(false);
    });

    it('email with double dot in personal_info', () => {
      const result = validateEmail('invalid..email@example.com');

      expect(result).toBe(false);
    });

    it('email that starts with dot in personal_info', () => {
      const result = validateEmail('.invalid@example.com');

      expect(result).toBe(false);
    });
  });
});
