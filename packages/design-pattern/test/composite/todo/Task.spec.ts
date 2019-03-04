import Task from "composite/todo/Task";

describe("사용자는 태스크를 추가, 삭제, 완료, 정렬할 수 있다.", () => {
  describe("태스크는 비어있다.", () => {
    it("태스크를 추가하면, 태스크 사이즈는 1이다.", () => {
      const task: Task = new Task("나의 할일");
      const size: number = task.add("디자인패턴");
      expect(size).toBe(1);
    });
  });

  // describe("태스크를 삭제할 수 있다.", () => {

  // });

  // describe("태스크를 완료할 수 있다.", () => {

  // });

  // describe("태스크를 정렬할 수 있다.", () => {

  // });
});
