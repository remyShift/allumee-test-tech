import Scene from '@/models/Scene';
import Show from '@/models/Show';
import Transition from '@/models/Transition';

export const addScene = (show: Show) => {
    const newScene = new Scene('New Scene', 30);
    const updatedShow = new Show();
    
    updatedShow.scenes = show.scenes.map(s => new Scene(s.name, s.duration));

    updatedShow.transitions = show.transitions.map(t => {
        const newTransition = new Transition(t.name.split(' > ')[0], t.name.split(' > ')[1]);
        newTransition.updateDuration = t.duration;
        return newTransition;
    });

    updatedShow.scenography = show.scenography.map(item => {
        if (item instanceof Scene) {
            return new Scene(item.name, item.duration);
        }
        const newTransition = new Transition(item.name.split(' > ')[0], item.name.split(' > ')[1]);
        newTransition.updateDuration = item.duration;
        return newTransition;
    });
    
    updatedShow.duration = show.duration;
    
    updatedShow.addScene(newScene);
    
    return updatedShow;
};

export const updateSceneName = (show: Show, scene: Scene, newName: string) => {
    const sceneIndex = show.scenes.findIndex(s => s.name === scene.name && s.duration === scene.duration);
    const updatedShow = new Show();

    const updatedScenes = show.scenes.map((s, index) =>
        index === sceneIndex ? new Scene(newName, s.duration) : new Scene(s.name, s.duration)
    );
    updatedShow.scenes = updatedScenes;

    const transitionMap = new Map();
    
    const updatedTransitions = show.transitions.map(t => {
        const [firstScene, secondScene] = t.name.split(' > ');
        
        if (firstScene !== scene.name && secondScene !== scene.name) {
            transitionMap.set(t.name, t);
            return t;
        }
        
        const newTransitionName = `${firstScene === scene.name ? newName : firstScene} > ${secondScene === scene.name ? newName : secondScene}`;
        const newTransition = new Transition(
            firstScene === scene.name ? newName : firstScene,
            secondScene === scene.name ? newName : secondScene
        );
        newTransition.updateDuration = t.duration;
        transitionMap.set(newTransitionName, newTransition);
        return newTransition;
    });
    updatedShow.transitions = updatedTransitions;

    updatedShow.scenography = show.scenography.map(item => {
        if (item instanceof Scene) {
            return item.name === scene.name ? updatedScenes[sceneIndex] : item;
        }
        
        const [firstScene, secondScene] = item.name.split(' > ');
        if (firstScene !== scene.name && secondScene !== scene.name) {
            return item;
        }
        
        const newTransitionName = `${firstScene === scene.name ? newName : firstScene} > ${secondScene === scene.name ? newName : secondScene}`;
        return transitionMap.get(newTransitionName) || item;
    });

    updatedShow.duration = show.duration;
    return updatedShow;
};

export const updateSceneDuration = (show: Show, scene: Scene, newDuration: number) => {
    const updatedShow = new Show();
    updatedShow.scenes = show.scenes.map(s =>
        s === scene ? new Scene(s.name, newDuration) : new Scene(s.name, s.duration)
    );
    updatedShow.transitions = show.transitions.map(t => {
        const newTransition = new Transition(t.name.split(' > ')[0], t.name.split(' > ')[1]);
        newTransition.updateDuration = t.duration;
        return newTransition;
    });
    updatedShow.scenography = show.scenography.map(item => {
        if (item instanceof Scene) {
            return item === scene ? new Scene(scene.name, newDuration) : new Scene(item.name, item.duration);
        }
        return item;
    });
    updatedShow.duration = updatedShow.getScenographyDuration();
    return updatedShow;
};

export const updateTransitionDuration = (show: Show, transition: Transition, newDuration: number) => {
    const updatedShow = new Show();
    updatedShow.scenes = show.scenes.map(s => new Scene(s.name, s.duration));
    updatedShow.transitions = show.transitions.map(t => {
        if (t === transition) {
            const newTransition = new Transition(t.name.split(' > ')[0], t.name.split(' > ')[1]);
            newTransition.updateDuration = newDuration;
            return newTransition;
        }
        const newTransition = new Transition(t.name.split(' > ')[0], t.name.split(' > ')[1]);
        newTransition.updateDuration = t.duration;
        return newTransition;
    });
    updatedShow.scenography = show.scenography.map(item => {
        if (item instanceof Scene) {
            return new Scene(item.name, item.duration);
        }
        if (item === transition) {
            const newTransition = new Transition(item.name.split(' > ')[0], item.name.split(' > ')[1]);
            newTransition.updateDuration = newDuration;
            return newTransition;
        }
        return item;
    });
    updatedShow.duration = updatedShow.getScenographyDuration();
    return updatedShow;
};
