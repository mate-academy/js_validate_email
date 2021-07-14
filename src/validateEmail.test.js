'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('')).toBe('boolean');
  });

  it(`should return 'true' for the email form
  [name]@[domain].[top domain]`, () => {
    expect(validateEmail('qas@mail.com')).toBe(true);
  });

  it(`should return 'true' for the  email
  [name]@[domain].[top domain]`, () => {
    expect(validateEmail('q@m.c')).toBe(true);
  });

  it(`should return 'false' for the email
  with symbol `, () => {
    expect(validateEmail('*@*.*')).toBe(false);
  });

  it(`should return 'false' for the email
  with Cyrillic letters..`, () => {
    expect(validateEmail('вася@мыло.ком')).toBe(false);
  });

  it(`should return 'true' for the email
  with [name] contain numbers`, () => {
    expect(validateEmail('123@mail.com')).toBe(true);
  });

  it(`should return 'true' for the email
  with [name] & [domain] contain numbers`, () => {
    expect(validateEmail('456@47.com')).toBe(true);
  });

  it(`should return 'false' for the email
  without '@' symbol`, () => {
    expect(validateEmail('qas.mail.com')).toBe(false);
  });

  it(`should return 'false' for the email
  if period in the begginin of [name] .`, () => {
    expect(validateEmail('.qas@mail.com')).toBe(false);
  });

  it(`should return 'true' for the email
  typing in Uppercase`, () => {
    expect(validateEmail('QAS@MAIL.COM')).toBe(true);
  });

  it(`should return 'false' for the email
  if colon in the begginin of [top domain]`, () => {
    expect(validateEmail('qas@mail:com')).toBe(false);
  });

  it(`should return 'false' for the email
 without [top domain]`, () => {
    expect(validateEmail('qas@mail')).toBe(false);
  });

  it(`should return 'false' for the email
  if symbol stay in the begginin of email`, () => {
    expect(validateEmail('!qas@mail.com')).toBe(false);
  });

  it(`should return 'false' for the email
  if [name] contain two dot`, () => {
    expect(validateEmail('qas..das@mail.com')).toBe(false);
  });

  it(`should return 'true' for the email
  contain letters, digits, hyphens, and dots.`, () => {
    expect(validateEmail('qas12_q@mail.com')).toBe(true);
  });
});
