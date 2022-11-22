// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('function isPhoneNumber', () => {
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
    expect(functions.isPhoneNumber("987-654-3210")).toBe(true);
    expect(functions.isPhoneNumber("1234567890")).toBe(false);
    expect(functions.isPhoneNumber("phonenumber")).toBe(false);
});

test('function isEmail', () => {
    expect(functions.isEmail("h1choi@ucsd.edu")).toBe(true);
    expect(functions.isEmail("email@email.com")).toBe(true);
    expect(functions.isEmail("thisis@Email")).toBe(false);
    expect(functions.isEmail("isThisEmail")).toBe(false);
});

test('function isStrongPassword', () => {
    expect(functions.isStrongPassword("STRongPass123")).toBe(true);
    expect(functions.isStrongPassword("q1w2e3r4t5")).toBe(true);
    expect(functions.isStrongPassword("Morethan15letters")).toBe(false);
    expect(functions.isStrongPassword("123passwordStrong")).toBe(false);
});

test('function isDate', () => {
    expect(functions.isDate("11/21/2022")).toBe(true);
    expect(functions.isDate("5/45/9876")).toBe(true);
    expect(functions.isDate("ab/cd/efgh")).toBe(false);
    expect(functions.isDate("11/21/22")).toBe(false);
});

test('function isHexColor', () => {
    expect(functions.isHexColor("FFFFFF")).toBe(true);
    expect(functions.isHexColor("#0F3")).toBe(true);
    expect(functions.isHexColor("05ab")).toBe(false);
    expect(functions.isHexColor("#HEXCOL")).toBe(false);
});