'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('true@mail.com!'))
      .toBe('boolean');
  });

  it(`should return 'true' for the valid email test@mail.com`, () => {
    expect(validateEmail('test@mail.com'))
      .toBe(true);
  });

  it(`should return 'true' for the valid email test25@mail.com`, () => {
    expect(validateEmail('test25@mail.com'))
      .toBe(true);
  });

  it(`should return 'true' for the valid email t@q1.c`, () => {
    expect(validateEmail('t@q1.c'))
      .toBe(true);
  });

  it(`should return 'false' for the email without @ symbol tq1.c`, () => {
    expect(validateEmail('tq1.c'))
      .toBe(false);
  });

  it(`should return 'false' for the email where @ symbol stands after domain
   tq1.c@`, () => {
    expect(validateEmail('tq1.c@'))
      .toBe(false);
  });

  it(`should return 'false' for the email with double dots
   test:72@mail.com`, () => {
    expect(validateEmail('test:72@mail.com'))
      .toBe(false);
  });

  it(`should return 'true' for the valid email td_25@q1.c`, () => {
    expect(validateEmail('td_25@q1.c'))
      .toBe(true);
  });

  it(`should return 'false' for the email which begin  with dot .test23@aasd.com
   test:72@mail.com`, () => {
    expect(validateEmail('.test23@aasd.com'))
      .toBe(false);
  });

  it(`should return 'false' for the email where domain start with dot
   test72@.mail.com`, () => {
    expect(validateEmail('test72@.mail.com'))
      .toBe(false);
  });
});
