'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it('should be declared', () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it('should return boolean', () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
  });

  it('should return true for valid emails', () => {
    const validEmails = [
      'test@mail.com',
      't@q.c',
      'user.name_123@domain.com',
      'a-b_c.d@sub.domain.com',
      'user@mail.com.', // końcowa kropka w domenie jest dozwolona
    ];

    validEmails.forEach(email => {
      expect(validateEmail(email)).toBeTruthy();
    });
  });

  it('should return false for invalid emails', () => {
    // brak @
    expect(validateEmail('testmail.com')).toBeFalsy();
    // wiele @
    expect(validateEmail('a@b@c.com')).toBeFalsy();
    // brak kropki w domenie
    expect(validateEmail('false@email')).toBeFalsy();

    // zakazane znaki w personal_info
    const forbiddenChars = "!$%&'*+/=?^{}|~";

    forbiddenChars.split('').forEach(char => {
      expect(validateEmail(`user${char}name@mail.com`)).toBeFalsy();
    });

    // kropka na początku/końcu personal_info
    expect(validateEmail('.username@mail.com')).toBeFalsy();
    expect(validateEmail('username.@mail.com')).toBeFalsy();

    // podwójne kropki w personal_info
    expect(validateEmail('user..name@mail.com')).toBeFalsy();

    // domena z niedozwolonym znakiem
    expect(validateEmail('user@mail!.com')).toBeFalsy();
    expect(validateEmail('user@ma#il.com')).toBeFalsy();
  });
});
