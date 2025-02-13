import Scene from "./Scene";
import Transition from "./Transition";

export default class Show {
    scenes: Scene[];
    transitions: Transition[];
    events: (Scene | Transition)[];
    duration: number;

    constructor() {
        this.scenes = [];
        this.transitions = [];
        this.events = [];
        this.duration = 0;
    }

    addScene(newScene: Scene) {
        if (this.scenes.length > 0) {
            const lastScene = this.scenes[this.scenes.length - 1];
            const transition = new Transition(lastScene.name, newScene.name);

            this.transitions.push(transition);
            this.events.push(transition);
            this.duration += transition.duration;
        }

        this.scenes.push(newScene);
        this.duration += newScene.duration;
        this.events.push(newScene);
    }
}
