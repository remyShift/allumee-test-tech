export default class Transition {
    name: string;

    constructor(scene1Name: string, scene2Name: string) {
        this.name = `${scene1Name} > ${scene2Name}`;
    }
}