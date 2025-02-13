import Scene from "./Scene";
import Transition from "./Transition";

export default class Show {
    scenes: Scene[];
    transitions: Transition[];
    scenography: (Scene | Transition)[];
    duration: number;

    constructor() {
        this.scenes = [];
        this.transitions = [];
        this.scenography = [];
        this.duration = 0;
    }

    addScene(newScene: Scene) {
        if (this.scenes.length > 0) {
            const lastScene = this.scenes[this.scenes.length - 1];
            const transition = new Transition(lastScene.name, newScene.name);

            this.transitions.push(transition);
            this.scenography.push(transition);
            this.duration += transition.duration;
        }

        this.scenes.push(newScene);
        this.duration += newScene.duration;
        this.scenography.push(newScene);
    }

    getScenographyDuration() {
        return this.scenography.reduce((acc, item) => acc + item.duration, 0);
    }

    getTransitionsDuration() {
        return this.transitions.reduce((acc, item) => acc + item.duration, 0);
    }

    getScenesDuration() {
        return this.scenes.reduce((acc, item) => acc + item.duration, 0);
    }
}
