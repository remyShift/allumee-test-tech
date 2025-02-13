import Scene from "@/models/Scene";

describe("Scene", () => {
    let scene: Scene;

    it("should initialize with correct name and duration", () => {
        scene = new Scene('Torche', 30);

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
        const scene = new Scene('Torche', 30);
        scene.updateName = 'Torche Toto';
        expect(scene.name).toBe('Torche Toto');
    });

    it("should update the duration", () => {
        const scene = new Scene('Torche', 30);
        scene.updateDuration = 45;
        expect(scene.duration).toBe(45);
    });
});