export default class Transition {
    name: string;
    duration: number;

    constructor(scene1Name: string, scene2Name: string) {
        if (!scene1Name || !scene2Name) {
            throw new Error('Need 2 scenes to create a transition');
        }

        this.name = `${scene1Name} > ${scene2Name}`;
        this.duration = 10;
    }

    set updateDuration(newDuration: number) {
        this.duration = newDuration;
    }
}