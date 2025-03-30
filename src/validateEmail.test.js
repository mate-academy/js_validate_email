'use strict';

const { validateEmail } = require('./validateEmail');

describe(`Function 'validateEmail':`, () => {
  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@mail.com'))
      .toBe('boolean');
  });

  describe(`should return 'true' for the valid email:`, () => {
    it(`with digits in the 'personal_info' part`, () => {
      expect(validateEmail('test838@gmail.com'))
        .toBeTruthy();
    });

    it(`with hyphen '-' in the 'personal_info' part`, () => {
      expect(validateEmail('test-user@gmail.com'))
        .toBeTruthy();
    });

    it(`with underline '_' in the 'personal_info' part`, () => {
      expect(validateEmail('test_user@gmail.com'))
        .toBeTruthy();
    });

    it(`with digits in the 'domain' part`, () => {
      expect(validateEmail('test_user@123mail.com'))
        .toBeTruthy();
    });

    it(`with hyphens in the 'domain' part`, () => {
      expect(validateEmail('test_user@example-mail.com'))
        .toBeTruthy();
    });

    it(`with dots in the 'domain' part using 'subdomain'`, () => {
      expect(validateEmail('test_user@example.mail.com'))
        .toBeTruthy();
    });
  });

  describe(`should return 'false' for the invalid email:`, () => {
    it(`with '.' at the beginning of the 'personal_info' part`, () => {
      expect(validateEmail('.test@gmail.com'))
        .toBeFalsy();
    });

    it(`with '.' at the end of the 'personal_info' part`, () => {
      expect(validateEmail('test.@gmail.com'))
        .toBeFalsy();
    });

    it(`with sequential dots in the 'personal_info' part`, () => {
      expect(validateEmail('test..user@gmail.com'))
        .toBeFalsy();
    });

    it(`with '.' at the beginning of the 'domain' part`, () => {
      expect(validateEmail('test@.gmail.com'))
        .toBeFalsy();
    });

    it(`without '@' symbol`, () => {
      expect(validateEmail('testgmail.com'))
        .toBeFalsy();
    });

    /*
    I have added this test for the next requirement:
    [double dots are not allowed in personal_info part]
    But, I think, it will be better to use 'colon' word
    to emphasize the using of ':' symbol because the 'double dots' phrase
    is a bit confusing due to the avalability of that requirement:
    [character `.` ( period, dot or fullstop) ...
    it will not come one after the other] :)
    */
    it(`with ':' symbol in the 'personal_info' part`, () => {
      expect(validateEmail('test:user@gmail.com'))
        .toBeFalsy();
    });

    describe(`with not allowed characters in 'personal_info' part:`, () => {
      const notAllowedChar = [
        '!', '$', '%', '&',
        "'", '*', '+', '/',
        '=', '?', '^', '{',
        '|', '}', '~',
      ];

      for (const char of notAllowedChar) {
        it(`with ${char}`, () => {
          const invalidEmail = `test${char}user@mail.com`;

          expect(validateEmail(invalidEmail))
            .toBeFalsy();
        });
      }
    });
  });
});
