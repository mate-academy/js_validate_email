"use strict";

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require("./validateEmail");

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = validateEmail("");

    expect(typeof result).toBe("boolean");
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail("test838@gmail.com.")).toBeTruthy();
  });

  it(`should return 'false' for the invalid email`, () => {
    expect(validateEmail("")).toBeFalsy();
  });

  it(`should return 'false' for the invalid email that
  contains not allowed chars
  ! $ % & ' * + / = ? ^ { | } ~ :
  `, () => {
    expect(validateEmail("test83!8@gmail.com")).toBeFalsy();
  });

  it(`should return 'false' if in domain part is not '@' char
  `, () => {
    expect(validateEmail("test838gmail.com")).toBeFalsy();
  });

  it(`should return 'false' if in domain part
  is not include dot char`, () => {
    expect(validateEmail("test838@gmailcom")).toBeFalsy();
  });

  it(`should return 'false' if in dots are at the beginning
  or at the end of the string`, () => {
    expect(validateEmail(".test838@gmail.com.")).toBeFalsy();
  });
});
