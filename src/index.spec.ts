import sum from "./index";

describe("typescript test", () => {
  it("should correctly sum", () => {
    expect(sum(0, 0)).toBe(0);
    expect(sum(0, 1)).toBe(1);
  });
});
