import hello from "../src/hello";

describe("sample", () => {
    it("hello", () => {
        hello();
        expect(document.body.textContent).toBe("hello");
    });
});
