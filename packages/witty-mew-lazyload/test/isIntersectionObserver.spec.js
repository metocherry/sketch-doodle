import isIntersectionObserver from "isIntersectionObserver";

describe("IntersectionObserver API", () => {
    it("지원한다면, true를 반환한다.", () => {
        expect(isIntersectionObserver()).toBe(true);
    });
});
