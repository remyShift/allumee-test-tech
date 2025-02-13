export default class Scene {
    name: string;
    duration: number;

    constructor(name: string, duration: number) {
        this.name = name;
        this.duration = duration;

        if (duration <= 0) {
            throw new Error('Duration must be greater than 0');
        }
    }

    set updateName(newName: string) {
        this.name = newName;
    }

    set updateDuration(newDuration: number) {
        this.duration = newDuration;
    }
}