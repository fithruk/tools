import { sum, mult } from "../calculator";

it("test 1", () => {
  expect(sum(2, 2)).toEqual(4);
});

it("test 2", () => {
  expect(mult(2, 2)).toEqual(4);
});
