'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('')).toEqual('boolean');
  });

  it(`should return 'true' email with valid data`, () => {
    expect(validateEmail('ol0loh_ka.oloLo-vich@gmail.com'))
      .toBeTruthy();
  });

  it(`should return 'false' if personal_info starts with a dot`, () => {
    expect(validateEmail('.ololoshka.ololovich@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' if personal_info ends with a dot`, () => {
    expect(validateEmail('ololoshka.ololovich.@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' if personal_info has double dot`, () => {
    expect(validateEmail('ololoshka..ololovich@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' if domein starts with dot`, () => {
    expect(validateEmail('ololoshka.ololovich@.gmail.com')).toBeFalsy();
  });

  it(`should return 'false' if domein gas double dot`, () => {
    expect(validateEmail('ololoshka.ololovich@..gmail.com')).toBeFalsy();
  });
});
