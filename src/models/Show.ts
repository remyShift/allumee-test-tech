import Scene from "./Scene";
import Transition from "./Transition";

export default class Show {
    scenes: Scene[];
    transitions: Transition[];
    events: Event[];
    duration: number;

    constructor() {
        this.scenes = [];
        this.transitions = [];
        this.events = [];
        this.duration = 0;
    }
}
