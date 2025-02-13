import Show from "@/models/Show";

describe("Show", () => {
    it("should create a show with empty scenes and transitions and so empty events and duration 0", () => {
        const show = new Show();

        expect(show.scenes).toEqual([]);
        expect(show.transitions).toEqual([]);
        expect(show.events).toEqual([]);
        expect(show.duration).toEqual(0);
    });
});