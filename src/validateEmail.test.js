'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(validateEmail('')).toEqual(expect.any(Boolean));
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('adolas666@gmail.com')).toBe(true);
  });

  it(`should return 'true' for the email with integers`, () => {
    expect(validateEmail('adolas666@gmail.com')).toBe(true);
  });

  it(`should return 'true' for the email with '_' in 'personal_info' part`, () => {
    expect(validateEmail('adolas6_6_6@gmail.com')).toBe(true);
  });

  it(`should return 'true' for the email '-'`, () => {
    expect(validateEmail('adolas6-6-6@gmail.com')).toBe(true);
  });

  it(`should return 'true' for the email '.'
    if email doesnt start or ends or doeasnt has two dots in row`, () => {
    expect(validateEmail('adolas.666@gmail.com')).toBe(true);
  });

  it(`should return 'true' for the email which domain has:
    -, . and integers`, () => {
    expect(validateEmail('adolas.666@gma1l.com')).toBe(true);
  });

  it(`should return 'true' for the email which domain has - in it `, () => {
    expect(validateEmail('adolas.666@gma-l.com')).toBe(true);
  });

  it(`should return 'true' for the email which domain has . in it `, () => {
    expect(validateEmail('adolas.666@gma.l.com')).toBe(true);
  });

  // Negaive scenario:
  it(`should return 'false' for the email with non ASCII characters`, () => {
    expect(validateEmail('adolasсус@gmail.com')).toBe(false);
  });

  it(`should return 'false' for the email that starts with '.'`, () => {
    expect(validateEmail('.adolas666@gmail.com')).toBe(false);
  });

  it(`should return 'false' for the email that ends with '.'`, () => {
    expect(validateEmail('adolas666.@gmail.com')).toBe(false);
  });

  it(`should return 'false' for the email that has two '.' in row`, () => {
    expect(validateEmail('adola..s666@gmail.com')).toBe(false);
  });

  it(`should return 'false' for the email without '@'`, () => {
    expect(validateEmail('adolas666gmail.com')).toBe(false);
  });

  it(`should return 'false' for the email whitch domain starts with '.'`, () => {
    expect(validateEmail('adolas666@.gmail.com')).toBe(false);
  });

  it(`should return 'false' for the email with at least one of:
  !, $, %, &, ', *, +, /, =, ?, ^, {, |, }, ~`, () => {
    expect(validateEmail('ado!as666@.gmail.com')).toBe(false);
  });

});
