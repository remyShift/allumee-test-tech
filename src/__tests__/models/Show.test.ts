import Scene from "@/models/Scene";
import Show from "@/models/Show";

describe("Show", () => {
    it("should create a show with empty scenes and transitions and so empty events and duration 0", () => {
        const show = new Show();

        expect(show.scenes).toEqual([]);
        expect(show.transitions).toEqual([]);
        expect(show.events).toEqual([]);
        expect(show.duration).toEqual(0);
    });

    it("should add a scene to the show", () => {
        const show = new Show();
        const scene = new Scene('Torche', 30);

        show.addScene(scene);

        expect(show.scenes).toEqual([scene]);
        expect(show.duration).toEqual(30);
        expect(show.transitions).toEqual([]);
        expect(show.events).toEqual([scene]);
    });
});