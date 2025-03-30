'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {});

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.')).toBeTruthy();
  });

  // write more tests here
  it(`email can contain number`, () => {
    expect(validateEmail('monkey12@gm.com')).toBeTruthy();
    expect(validateEmail('monkey99@gm.com')).toBeTruthy();
    expect(validateEmail('monkey45@gm.com')).toBeTruthy();
  });

  it(`email can contain letters (Aa-Zz)`, () => {
    expect(validateEmail('monk@gm.com')).toBeTruthy();
    expect(validateEmail('ashura@gm.com')).toBeTruthy();
    expect(validateEmail('starcitizen@gm.com')).toBeTruthy();
  });

  it(`should return false for email without @ symbol`, () => {
    expect(validateEmail('monkeygmail.com')).toBeFalsy();
  });

  it(`should return false for email without domain part`, () => {
    expect(validateEmail('monkey')).toBeFalsy();
  });

  it(`should return true for email with @ symbol in proper place `, () => {
    expect(validateEmail('monkey@gm.com')).toBeTruthy();
  });

  it(`charakter . should not to be first or last provided character`, () => {
    expect(validateEmail('.monkey@gm.com')).toBeFalsy();
    expect(validateEmail('monkey.@gm.com')).toBeFalsy();
  });

  it(`personal_info and domain can not start with dot .`, () => {
    expect(validateEmail('.monkey@gm.com')).toBeFalsy();
    expect(validateEmail('monkey@.gm.com')).toBeFalsy();
  });

  it(`double dots are not allowed in personal_info part`, () => {
    expect(validateEmail('monkey..@gm.com')).toBeFalsy();
  });

  it(`not allowed characters: ! $ % & ' * + / = ? ^ { | } ~`, () => {
    expect(validateEmail('mon!key12@gm.com')).toBeFalsy();
    expect(validateEmail('mon$key12@gm.com')).toBeFalsy();
    expect(validateEmail('mon%key12@gm.com')).toBeFalsy();
    expect(validateEmail('mon&key12@gm.com')).toBeFalsy();
    expect(validateEmail("mon'key12@gm.com")).toBeFalsy();
    expect(validateEmail('mon*key12@gm.com')).toBeFalsy();
    expect(validateEmail('mon+key12@gm.com')).toBeFalsy();
    expect(validateEmail('mon/key12@gm.com')).toBeFalsy();
    expect(validateEmail('mon=key12@gm.com')).toBeFalsy();
    expect(validateEmail('mon?key12@gm.com')).toBeFalsy();
    expect(validateEmail('mon^key12@gm.com')).toBeFalsy();
    expect(validateEmail('mon{key12@gm.com')).toBeFalsy();
    expect(validateEmail('mon|key12@gm.com')).toBeFalsy();
    expect(validateEmail('mon}key12@gm.com')).toBeFalsy();
    expect(validateEmail('mon~key12@gm.com')).toBeFalsy();
  });

  it('should return true for a valid email with - symbol in domain', () => {
    expect(validateEmail('monkey@gm-island.com')).toBeTruthy();
  });

  it('domain name part contains letters, digits, hyphens, and dots.', () => {
    expect(validateEmail('monkey@gm-island.com')).toBeTruthy();
    expect(validateEmail('monkey1234@gm-island.com')).toBeTruthy();
    expect(validateEmail('mon-key@gm-island.com')).toBeTruthy();
    expect(validateEmail('mon.key@gm-island.com')).toBeTruthy();
  });
});
