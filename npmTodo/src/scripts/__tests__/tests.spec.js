import { createNewTaskObj } from "../createNewTask";
import { getData } from "../serverData";

it("test 1", () => {
  expect(createNewTaskObj("task 1")).toEqual({
    text: "task 1",
    done: false,
  });
});
