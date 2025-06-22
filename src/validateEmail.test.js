'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  describe('valid email', () => {
    it('only letters', () => {
      expect(validateEmail('test@mail.com')).toBeTruthy();
    });

    it('only digits', () => {
      expect(validateEmail('1234@mail.com')).toBeTruthy();
    });

    it('complex email', () => {
      expect(validateEmail('my.personal_info-2@mail-1.com')).toBeTruthy();
    });
  });

  describe('personal info', () => {
    it('starts with dot', () => {
      expect(validateEmail('.test@mail.com')).toBeFalsy();
    });

    it('double dots', () => {
      expect(validateEmail('te..st@mail.com')).toBeFalsy();
    });

    it('ends with dot', () => {
      expect(validateEmail('test.@mail.com')).toBeFalsy();
    });

    it('not english letters', () => {
      expect(validateEmail('тest@mail.com')).toBeFalsy();
    });

    it('with special char', () => {
      const chars = `!$%&'*+/=?^{|}~`;

      for (const ch of chars) {
        expect(validateEmail(`te${ch}st@mail!.com`)).toBeFalsy();
      }
    });
  });

  it('without @', () => {
    expect(validateEmail('testmail.com')).toBeFalsy();
  });

  describe('domain', () => {
    it('starts with dot', () => {
      expect(validateEmail('test@.mail.com')).toBeFalsy();
    });

    it('with special char', () => {
      const chars = `!$%&'*+/=?^{|}~`;

      for (const ch of chars) {
        expect(validateEmail(`test@ma${ch}il.com`)).toBeFalsy();
      }
    });
  });
});
