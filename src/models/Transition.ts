export default class Transition {
    name: string;
    duration: number;

    constructor(scene1Name: string, scene2Name: string) {
        this.name = `${scene1Name} > ${scene2Name}`;
        this.duration = 10;
    }

    set updateDuration(newDuration: number) {
        this.duration = newDuration;
    }
}