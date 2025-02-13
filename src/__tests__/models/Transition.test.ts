import Transition from "@/models/Transition";
import Scene from "@/models/Scene";

describe("Transition", () => {
    it("should create a transition with a name corresponding to the name of 2 scenes", () => {
        const scene1 = new Scene('Torche', 30);
        const scene2 = new Scene('Torche 2', 30);
        const transition = new Transition(scene1.name, scene2.name);

        expect(transition.name).toBe(`${scene1.name} > ${scene2.name}`);
    });

    it("should throw an error if the name of one of the scene is not provided", () => {
        const scene1 = new Scene('Torche', 30);
        
        expect(() => new Transition(scene1.name, '')).toThrow('Need 2 scenes to create a transition');
    });

    it("should create a transition with a default duration of 10 seconds", () => {
        const scene1 = new Scene('Torche', 30);
        const scene2 = new Scene('Torche 2', 30);
        const transition = new Transition(scene1.name, scene2.name);

        expect(transition.duration).toBe(10);
    });

    it("should update the duration of the transition", () => {
        const scene1 = new Scene('Torche', 30);
        const scene2 = new Scene('Torche 2', 30);
        const transition = new Transition(scene1.name, scene2.name);

        transition.updateDuration = 20;

        expect(transition.duration).toBe(20);
    });
});