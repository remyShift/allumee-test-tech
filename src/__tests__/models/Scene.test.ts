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
});