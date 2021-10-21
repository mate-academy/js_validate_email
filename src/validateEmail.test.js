'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('pap1ap1a@papa.pap')).toBe('boolean');
  });

  it(`should return 'true' for the valid email - pap1apa@papa.pap`, () => {
    expect(validateEmail('pap1ap1a@papa.pap')).toBeTruthy();
  });

  it(`should return 'true' for the valid email - t@q.c`, () => {
    expect(validateEmail('t@q.c')).toBeTruthy();
  });

  it(`should return 'false' for the unvalid email - papapapapa.pap`, () => {
    expect(validateEmail('papapapapa.pap')).toBeFalsy();
  });

  it(`should return 'false' for the unvalid email - .papapa@papa.pap`, () => {
    expect(validateEmail('.papapa@papa.pap')).toBeFalsy();
  });

  it(`should return 'false' for the unvalid email - papapa@.pap`, () => {
    expect(validateEmail('papapa@.pap')).toBeFalsy();
  });

  it(`should return 'false' for the unvalid email - papapa@pap`, () => {
    expect(validateEmail('papapa@pap')).toBeFalsy();
  });

  it(`should return 'false' for the unvalid email - papapa@`, () => {
    expect(validateEmail('papapa@')).toBeFalsy();
  });
  // write more tests here
});
