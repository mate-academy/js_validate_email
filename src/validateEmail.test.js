/* eslint-disable max-len */
/* eslint-disable quotes */
"use strict";

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require("./validateEmail");

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail("test@mail.com")).toBe("boolean");
  });

  it(`valid email with digits`, () => {
    expect(validateEmail("test@mail.com")).toBe(true);
  });

  it(`valid email with digits`, () => {
    expect(validateEmail("test838@mail.com")).toBeTruthy();
  });

  it(`valid email with character "_"`, () => {
    expect(validateEmail("test_one@mail.com")).toBeTruthy();
  });

  it(`valid email with character "-"`, () => {
    expect(validateEmail("test-two@mail.com")).toBeTruthy();
  });

  it(`valid email with one letter in personal_info and a domain`, () => {
    expect(validateEmail("t@q.c")).toBeTruthy();
  });

  it(`valid email with dot "." in personal_info`, () => {
    expect(validateEmail("test.email@test.com")).toBeTruthy();
  });

  it(`not-valid email with not allowed chars like "! $ % & ' * + / = ? ^ { | } ~"`, () => {
    expect(validateEmail("t$est!t&#w=o@mail.com")).toBeFalsy();
  });

  it(`not-valid email with double dots ".."`, () => {
    expect(validateEmail("tte..st@mail.com")).toBeFalsy();
  });

  it(`not-valid email with not only Latin letters`, () => {
    expect(validateEmail("test-тест@mail.com")).toBeFalsy();
  });

  it(`not-valid email without @`, () => {
    expect(validateEmail("test.mail.com")).toBeFalsy();
  });

  it(`not-valid email without domain`, () => {
    expect(validateEmail("false@email")).toBeFalsy();
  });

  it(`not-valid email where personal_info start from dot "."`, () => {
    expect(validateEmail(".test@mail.com")).toBeFalsy();
  });

  it(`not-valid email where personal_info ends with "."`, () => {
    expect(validateEmail("test.@mail.com")).toBeFalsy();
  });

  it(`not-valid email where domain start from dot "."`, () => {
    expect(validateEmail("test@.mail.com")).toBeFalsy();
  });
});
