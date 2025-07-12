'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('Te_st-8.38@gmail1-3.com'))
      .toBeTruthy();
  });

  it(`should return 'false' if domain part doesn't consist dot`, () => {
    expect(validateEmail('test838@gmail'))
      .toBeFalsy();
  });

  it(`should return 'false' if personal_info consist $`, () => {
    expect(validateEmail('test$838@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' if personal_info consist ..`, () => {
    expect(validateEmail('test..838@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' if personal_info consist %`, () => {
    expect(validateEmail('test%838@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' if personal_info consist =`, () => {
    expect(validateEmail('test=838@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' if personal_info consist ?`, () => {
    expect(validateEmail('test?838@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' if personal_info consist ^`, () => {
    expect(validateEmail('test^838@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' if personal_info consist /`, () => {
    expect(validateEmail('test/838@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' if personal_info consist +`, () => {
    expect(validateEmail('test+838@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' if personal_info consist *`, () => {
    expect(validateEmail('test*838@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' if personal_info consist }`, () => {
    expect(validateEmail('test}838@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' if personal_info consist ~`, () => {
    expect(validateEmail('test~838@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' if personal_info consist |`, () => {
    expect(validateEmail('test|838@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' if personal_info consist {`, () => {
    expect(validateEmail('test{838@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' if email doesn't consist @`, () => {
    expect(validateEmail('test838gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' if personal_info part starts with .`, () => {
    expect(validateEmail('.test838@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' if personal_info consist '`, () => {
    expect(validateEmail('test\'838@gmail.com'))
      .toBeFalsy();
  });
});
