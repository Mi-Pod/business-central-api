const helloNpm = require("../index");

test(`Log the default message`, () => {
  expect(helloNpm()).toBe("hello NPM");
});
