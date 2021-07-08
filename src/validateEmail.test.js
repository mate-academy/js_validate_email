'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('SDF@scom')).toBe('boolean');
  });

  it(`should return 'true' for the valid email: sdf@asdflkj.com`, () => {
    expect(validateEmail('sdf@asdflkj.com')).toBe(true);
  });

  it(`should return 'false' for the invalid email: ЖЖЖ@asdflkj.com`, () => {
    expect(validateEmail('ЖЖЖ@asdflkj.com')).toBe(false);
  });

  it(`should return 'false' if top 
  Level domein start with dot: opa@.com`, () => {
    expect(validateEmail('opa@.com')).toBe(false);
  });

  it(`should return 'false' if email starts with dot: .ghj@asdflkj.com`, () => {
    expect(validateEmail('.ghj@asdflkj.com')).toBe(false);
  });

  it(`should return 'false' if email 
  contains double dots: gh:j@asdflkj.com`, () => {
    expect(validateEmail('gh:j@asdflkj.com')).toBe(false);
  });

  it(`should return 'false' if email dont contain domain : opa@com`, () => {
    expect(validateEmail('opa@com')).toBe(false);
  });
  
    it(`should return 'false' if email don't have @: .ghjsdflkj.com`, () => {
    expect(validateEmail('.ghjsdflkj.com')).toBe(false);
  });

  it(`should return 'false' if email contains 
  space in the beginning:  sdf@asdflkj.com`, () => {
    expect(validateEmail(' sdf@asdflkj.com')).toBe(false);
  });

  it(`should return 'false' if email contains 
  space in the middle: sd f@asdflkj.com`, () => {
    expect(validateEmail('sd f@asdflkj.com')).toBe(false);
  });
});
