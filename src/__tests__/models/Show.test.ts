import Scene from "@/models/Scene";
import Transition from "@/models/Transition";
import Show from "@/models/Show";

describe("Show", () => {
    let show: Show;
    let defaultScene: Scene;

    beforeEach(() => {
        defaultScene = new Scene('Update Me', 20);
        show = new Show();
    });

    it("should create a show with a default scene", () => {
        expect(show.scenes).toEqual([defaultScene]);
        expect(show.transitions).toEqual([]);
        expect(show.scenography).toEqual([defaultScene]);
        expect(show.duration).toEqual(20);
    });

    it("should add a scenes to the show and put a transition between the default scene and the new scene and update the duration", () => {
        const show = new Show();
        const scene1 = new Scene('Torche', 30);

        show.addScene(scene1);

        expect(show.scenes).toEqual([defaultScene, scene1]);
        expect(show.duration).toEqual(60);
        expect(show.transitions).toEqual([new Transition(defaultScene.name, scene1.name)]);
        expect(show.scenography).toEqual([defaultScene, new Transition(defaultScene.name, scene1.name), scene1]);
    });

    it("should return the scenography duration of the show", () => {
        const show = new Show();
        const scene1 = new Scene('Torche', 30);

        show.addScene(scene1);

        expect(show.getScenographyDuration()).toEqual(60);
    });

    it("should return the transitions duration of the show", () => {
        const show = new Show();
        const scene1 = new Scene('Torche', 30);

        show.addScene(scene1);

        expect(show.getTransitionsDuration()).toEqual(10);
    });

    it("should return the scenes duration of the show", () => {
        const show = new Show();

        expect(show.getScenesDuration()).toEqual(20);
    });
});
