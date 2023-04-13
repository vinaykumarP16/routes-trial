import ApiCall from "./ApiCall";
const MOCK_PRICES = [50, 47, 53, 50, 49, 51, 52];

describe("dd", () => {
    it("finds exchange", async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(MOCK_PRICES),
            })
        );
        const rate = await ApiCall("posts");
        expect(rate).not.toBe(null);
        expect(fetch).toBeCalledTimes(1);
    });
    it("dde", async () => {
        global.fetch = jest.fn(() => Promise.reject(null));
        const rate = await ApiCall("posts");
        expect(rate).toBe(null);
    });
});
