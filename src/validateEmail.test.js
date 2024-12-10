"use strict";

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require("./validateEmail");

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail("abc")).toBe("boolean");
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail("test838@gmail.com")).toBe(true);
    expect(validateEmail("Test838@gmail.com")).toBe(true);
  });

  it(`should return 'true' for a valid email
    with a single character domain`, () => {
    expect(validateEmail("t@q.c")).toBe(true);
  });

  it(`should return 'false' for emails with a dot at the start`, () => {
    expect(validateEmail(".test838@gmail.com")).toBe(false);
  });

  it(`should return 'false' for an email with a dot at the end`, () => {
    expect(validateEmail("test838.@gmail.com")).toBe(false);
  });

  it(`should return 'false' for an email without '@'`, () => {
    expect(validateEmail("test838gmail.com")).toBe(false);
  });

  it(`should return 'false' for an email with 'not allowed characters'`, () => {
    expect(validateEmail("test838!$%^&*{|}@gmail.com")).toBe(false);
  });
});
