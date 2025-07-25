'use strict';

function generateTestEmail(personalInfo, domain) {
  return `${personalInfo}@${domain}`;
}

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const isReturnBolean = typeof validateEmail('jarek32@onet.pl');

    expect(isReturnBolean)
      .toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('-_test838@34gm--..ail.com.'))
      .toBeTruthy();
  });

  it(`should return 'false' if `
    + `"personal_info" consist of at least one forbiden character`, () => {
    const forbidenEmail = Array.from(`!$%&'*+=?^{|}~`);

    forbidenEmail.forEach((letter, i) => {
      const userPartOfEmail = 'Janusz' + letter;
      const emailToTest = generateTestEmail(userPartOfEmail, 'gmail.com');

      expect(validateEmail(emailToTest))
        .toBeFalsy();
    });
  });

  it(`should return 'false' if `
    + `"personal_info" consist of double dots`, () => {
    const forbidenEmail = ['.'];

    forbidenEmail.forEach((letter, i) => {
      const userPartOfEmail = 'Janusz.' + letter;
      const userPartOfEmail2 = 'Jan.usz' + letter;
      const emailToTest = generateTestEmail(userPartOfEmail, 'gmail.com');
      const emailToTest2 = generateTestEmail(userPartOfEmail2, 'gmail.com');

      expect(validateEmail(emailToTest))
        .toBeFalsy();

      expect(validateEmail(emailToTest2))
        .toBeFalsy();
    });
  });

  it(`should return 'false' if `
    + `"personal_info" or "domain" start with dot`, () => {
    const forbidenEmail = ['.'];

    forbidenEmail.forEach((letter, i) => {
      const userPartOfEmail = letter + 'Janusz';
      const userPartOfEmail2 = 'Janusz';
      const emailToTest = generateTestEmail(userPartOfEmail, 'gmail.com');
      const emailToTest2 = generateTestEmail(userPartOfEmail2, '.gmail.com');

      expect(validateEmail(emailToTest))
        .toBeFalsy();

      expect(validateEmail(emailToTest2))
        .toBeFalsy();
    });
  });

  it(`should return 'false' if `
    + `"personal_info" end with dot`, () => {
    const forbidenEmail = ['.'];

    forbidenEmail.forEach((letter, i) => {
      const userPartOfEmail = 'Janusz' + letter;
      const emailToTest = generateTestEmail(userPartOfEmail, 'gmail.com');

      expect(validateEmail(emailToTest))
        .toBeFalsy();
    });
  });

  it(`should return 'false' if `
    + `"personal_info" consist of at least one non-English letter`, () => {
    const forbidenEmail = Array.from(`łćöüəšź`);

    forbidenEmail.forEach((letter, i) => {
      const userPartOfEmail = 'Janusz' + letter;
      const emailToTest = generateTestEmail(userPartOfEmail, 'gmail.com');

      expect(validateEmail(emailToTest))
        .toBeFalsy();
    });
  });

  it(`should return 'false' if `
    + `"personal_info" and "domein" aren't separated by "@" `, () => {
    const emailToTest = 'Janusz32gmail.com';

    expect(validateEmail(emailToTest))
      .toBeFalsy();
  });

  it(`should return 'false' if `
    + `"domain" consist of at least one special`
    + `or whitespace character`, () => {
    const forbidenEmail = Array.from(' $!(*:>');

    forbidenEmail.forEach((domainLetter, i) => {
      const userPartOfEmail = 'Janusz23';
      const domainPartOfEmail = 'gm' + domainLetter + 'il.com';
      const emailToTest = generateTestEmail(userPartOfEmail, domainPartOfEmail);

      expect(validateEmail(emailToTest))
        .toBeFalsy();
    });
  });
});
