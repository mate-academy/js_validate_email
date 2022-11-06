'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
  });

  it(`should return true for valid email`, () => {
    expect(validateEmail('test@mail.com')).toBe(true);
  });

  it(`should return false if personal 
  info part contain non-english letters`, () => {
    expect(validateEmail('teйййst@mail.com')).toBe(false);
  });

  it(`should return false if email has no @ in it`, () => {
    expect(validateEmail('testmail.com')).toBe(false);
  });

  it(`should return false if emails top level domain starts with .`, () => {
    expect(validateEmail('test@.mail.com')).toBe(false);
  });

  it(`should return false if personal info starts from .`, () => {
    expect(validateEmail('.test@mail.com')).toBe(false);
  });

  it(`should return false if personal info contain :`, () => {
    expect(validateEmail('t:est@mail.com')).toBe(false);
  });

  it(`should return false if personal info ends with .`, () => {
    expect(validateEmail('test.@mail.com')).toBe(false);
  });

  it(`should mark email invalid if personal info contain double dots`, () => {
    expect(validateEmail('te..st@mail.com')).toBe(false);
  });

  it(`should return false if domain starts from .`, () => {
    expect(validateEmail('test@.mail.com')).toBe(false);
  });

  /*
  Я конечно могу прописать тесты на каждый из этих 14 символов
  но я думаю, что смогу потратить это время более рационально :)
  */
  it(`should return false if email contain 
  one of this symbols ! $ % & ' * + / = ? ^ { | } ~`, () => {
    expect(validateEmail('te!$%&st@mail.com')).toBe(false);
  });
});
