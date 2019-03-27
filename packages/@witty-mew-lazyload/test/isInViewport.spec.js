import isInViewport from "isInViewport";

// document default viewport : 800x600

describe("사용자는 element가 viewport 안쪽에 위치하는지 판단할 수 있다.", () => {
  describe("element는 viewport 바깥쪽에 위치한다.", () => {
    it("element가 viewport 보다 위쪽에 있을 때, false를 리턴한다.", () => {
      const div = document.createElement("div");
      spyOn(div, "getBoundingClientRect").and.callFake(() => ({
        top: -150,
        bottom: -50,
        left: 0,
        right: 100,
        width: 100,
        height: 100
      }));
      expect(isInViewport(div)).toBe(false);
    });

    it("element가 viewport 보다 아래쪽에 있을 때, false를 리턴한다.", () => {
      const div = document.createElement("div");
      spyOn(div, "getBoundingClientRect").and.callFake(() => ({
        top: 650,
        bottom: 750,
        left: 0,
        right: 100,
        width: 100,
        height: 100
      }));
      expect(isInViewport(div)).toBe(false);
    });

    it("element가 viewport 보다 왼쪽에 있을 때, false를 리턴한다.", () => {
      const div = document.createElement("div");
      spyOn(div, "getBoundingClientRect").and.callFake(() => ({
        top: 0,
        bottom: 100,
        left: -150,
        right: -50,
        width: 100,
        height: 100
      }));
      expect(isInViewport(div)).toBe(false);
    });

    it("element가 viewport 보다 오른쪽에 있을 때, false를 리턴한다.", () => {
      const div = document.createElement("div");
      spyOn(div, "getBoundingClientRect").and.callFake(() => ({
        top: 0,
        bottom: 100,
        left: 850,
        right: 950,
        width: 100,
        height: 100
      }));
      expect(isInViewport(div)).toBe(false);
    });
  });

  describe("element는 viewport 안쪽에 위치한다.", () => {
    it("element가 viewport 안쪽에 있을 때, true를 리턴한다..", () => {
      const div = document.createElement("div");
      const spy = spyOn(div, "getBoundingClientRect").and.callFake(() => ({
        top: -50,
        bottom: 50,
        left: 0,
        right: 100,
        width: 100,
        height: 100
      }));
      expect(isInViewport(div)).toBe(true);

      spy.and.callFake(() => ({
        top: 500,
        bottom: 600,
        left: 0,
        right: 100,
        width: 100,
        height: 100
      }));
      expect(isInViewport(div)).toBe(true);
    });
  });
});
