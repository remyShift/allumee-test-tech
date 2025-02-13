import Scene from "@/models/Scene";

describe("Scene", () => {
    let scene: Scene;

    beforeEach(() => {
        scene = new Scene('Torche', 30);
    });

    it("should initialize with correct name and duration", () => {
        expect(scene.name).toBe('Torche');
        expect(scene.duration).toBe(30);
    });

    it("should throw an error if name is not provided", () => {
        expect(() => new Scene('', 30)).toThrow('Name is required');
    });

    it("should throw an error if duration is not provided", () => {
        expect(() => new Scene('Torche', 0)).toThrow('Duration must be greater than 0');
    });
    
    it("should update the name", () => {
        scene.updateName = 'Torche Toto';
        expect(scene.name).toBe('Torche Toto');
    });

    it("should update the duration", () => {
        scene.updateDuration = 45;
        expect(scene.duration).toBe(45);
    });
});