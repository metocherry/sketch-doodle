import Task from "composite/todo/Task";

describe("사용자는 태스크를 추가, 삭제, 완료, 정렬할 수 있다.", () => {
  describe("# 2개의 태스크가 등록되어 있다.", () => {
    let task: Task;
    let task_1: Task;
    let task_2: Task;

    beforeEach(() => {
      task = new Task("나의 할일");
      task_1 = task.add("디자인패턴");
      task_2 = task.add("알고리즘");
    });

    it("태스크를 추가하면, 태스크 사이즈는 3이다.", () => {
      task.add("자료구조");
      expect(task.size).toBe(3);
    });

    it("태스크를 삭제하면, 태스크 사이즈는 1이다.", () => {
      task.delete(task_1);
      expect(task.size).toBe(1);
    });

    it("태스크가 등록된 태스크에 존재한다면, true를 리턴한다.", () => {
      expect(task.has(task_2)).toBe(true);
    });

    it("태스크가 등록된 태스크에 존재하지 않는다면, false를 리턴한다.", () => {
      expect(task.has(new Task("태스크 체크"))).toBe(false);
    });

    it("모든 태스크를 삭제하면, 태스크 사이즈는 0이다.", () => {
      task.clear();
      expect(task.size).toBe(0);
    });

    it("태스크가 완료되지 않았다면, false를 리턴한다.", () => {
      expect(task_1.isComplete()).toBe(false);
    });

    it("태스크가 완료되었다면, true를 리턴한다.", () => {
      task_1.toggle();
      expect(task_1.isComplete()).toBe(true);
    });
  });

  // describe("태스크를 완료할 수 있다.", () => {

  // });

  // describe("태스크를 정렬할 수 있다.", () => {

  // });
});
