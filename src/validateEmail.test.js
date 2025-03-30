"use strict";

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require("./validateEmail");

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const checkReturnType = typeof validateEmail("test@mail.com");

    expect(checkReturnType).toBe("boolean");
  });

  it(`should be 'false' if not only Latin letters`, () => {
    const returnInvalidEmail = validateEmail("тест@mail.com");

    expect(returnInvalidEmail).toBeFalsy();
  });

  it(`should be 'true' if email included numbers`, () => {
    const returnValidEmail = validateEmail("te11st@mail.com");

    expect(returnValidEmail).toBeTruthy();
  });

  it(`should be 'false' if email included '!$%&'*+/=?^{|}~'`, () => {
    const returnInvalidEmail = validateEmail("!$%&*+/=?^{|}~test@mail.com");

    expect(returnInvalidEmail).toBeFalsy();
  });

  it(`should be 'true' if email included '-_'`, () => {
    const returnValidEmail = validateEmail("t-e_st@mail.com");

    expect(returnValidEmail).toBeTruthy();
  });

  it(`should be 'false' if email included ':'`, () => {
    const returnInvalidEmail = validateEmail("tes:t@mail.com");

    expect(returnInvalidEmail).toBeFalsy();
  });

  it(`should be 'false' if email included dot in start or the end`, () => {
    const returnInvalidEmail = validateEmail(".test@mail.com");

    expect(returnInvalidEmail).toBeFalsy();
  });

  it(`should be 'false' if email not included @`, () => {
    const returnInvalidEmail = validateEmail("test.mail.com");

    expect(returnInvalidEmail).toBeFalsy();
  });
});
