import { createLogger } from "../logger";

it("test 1", () => {
  const logger = createLogger("user login");
  expect(logger.getLogs()).toEqual([]);
});

it("test 2", () => {
  const logger = createLogger("user login");
  logger.log("login succes");
  expect(logger.getLogs()).toEqual(["log - user login - login succes"]);
});

it("test 3", () => {
  const logger = createLogger("user login");
  logger.error("login failed");
  expect(logger.getLogs()).toEqual(["error - user login - login failed"]);
});
