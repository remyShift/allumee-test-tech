import Transition from "@/models/Transition";
import Scene from "@/models/Scene";

describe("Transition", () => {
    it("should create a transition with a name corresponding to the name of 2 scenes", () => {
        const scene1 = new Scene('Torche', 30);
        const scene2 = new Scene('Torche 2', 30);
        const transition = new Transition(scene1.name, scene2.name);

        expect(transition.name).toBe(`${scene1.name} > ${scene2.name}`);
    });

    it("should create a transition with a default duration of 10 seconds", () => {
        const scene1 = new Scene('Torche', 30);
        const scene2 = new Scene('Torche 2', 30);
        const transition = new Transition(scene1.name, scene2.name);

        expect(transition.duration).toBe(10);
    });
});