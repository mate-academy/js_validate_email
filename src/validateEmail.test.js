"use strict";

const validateEmail = require("./validateEmail");

describe("validateEmail", () => {
  it("should return true for a valid email", () => {
    expect(validateEmail("test@mail.com")).toBe(true);
    expect(validateEmail("t@q.c")).toBe(true);
  });

  it("should return false for an invalid email", () => {
    expect(validateEmail("false@email")).toBe(false);
    expect(validateEmail("invalid.email@")).toBe(false);
    expect(validateEmail(".start.with.dot@mail.com")).toBe(false);
    expect(validateEmail("double..dots@mail.com")).toBe(false);
    expect(validateEmail("invalid$character@mail.com")).toBe(false);
    expect(validateEmail("test@!invalidcharacter.com")).toBe(false);
  });
});
