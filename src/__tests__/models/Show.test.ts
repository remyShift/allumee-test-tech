import Scene from "@/models/Scene";
import Show from "@/models/Show";
import Transition from "@/models/Transition";

describe("Show", () => {
    it("should create a show with empty scenes and transitions and so empty events and duration 0", () => {
        const show = new Show();

        expect(show.scenes).toEqual([]);
        expect(show.transitions).toEqual([]);
        expect(show.events).toEqual([]);
        expect(show.duration).toEqual(0);
    });

    it("should add a scene to the show and update the duration", () => {
        const show = new Show();
        const scene = new Scene('Torche', 30);

        show.addScene(scene);

        expect(show.scenes).toEqual([scene]);
        expect(show.duration).toEqual(30);
        expect(show.transitions).toEqual([]);
        expect(show.events).toEqual([scene]);
    });

    it("should add 2 scenes to the show and put a transition between them and update the duration", () => {
        const show = new Show();
        const scene1 = new Scene('Torche', 30);
        const scene2 = new Scene('Torche 2', 30);

        show.addScene(scene1);
        show.addScene(scene2);

        expect(show.scenes).toEqual([scene1, scene2]);
        expect(show.duration).toEqual(70);
        expect(show.transitions).toEqual([new Transition(scene1.name, scene2.name)]);
        expect(show.events).toEqual([scene1, new Transition(scene1.name, scene2.name), scene2]);
    });
});