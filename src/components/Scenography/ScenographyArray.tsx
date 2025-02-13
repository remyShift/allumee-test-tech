"use client";

import Scene from '@/models/Scene';
import Show from '@/models/Show';
import SceneComponent from './SceneComponent';
import TransitionComponent from './TransitionComponent';
import { useShow } from '@/context/show';
import Transition from '@/models/Transition';

export default function ScenographyArray() {
    const { show, setShow } = useShow();

    const handleAddScene = () => {
        const newScene = new Scene('Nouvelle scène', 30);
        const updatedShow = new Show();
        updatedShow.scenes = [...show.scenes];
        updatedShow.transitions = [...show.transitions];
        updatedShow.scenography = [...show.scenography];
        updatedShow.duration = show.duration;
        updatedShow.addScene(newScene);
        setShow(updatedShow);
    };

    const handleUpdateSceneName = (scene: Scene, newName: string) => {
        const sceneIndex = show.scenes.indexOf(scene);
        const updatedShow = new Show();
        
        const updatedScenes = show.scenes.map((s, index) => 
            index === sceneIndex ? new Scene(newName, s.duration) : new Scene(s.name, s.duration)
        );
        updatedShow.scenes = updatedScenes;
        
        const updatedTransitions = show.transitions.map(t => {
            const [firstScene, secondScene] = t.name.split(' > ');
            const newTransition = new Transition(
                firstScene === scene.name ? newName : firstScene,
                secondScene === scene.name ? newName : secondScene
            );
            newTransition.updateDuration = t.duration;
            return newTransition;
        });
        updatedShow.transitions = updatedTransitions;
        
        updatedShow.scenography = show.scenography.map(item => {
            if (item instanceof Scene) {
                return item === scene ? updatedScenes[sceneIndex] : new Scene(item.name, item.duration);
            } else {
                const [firstScene, secondScene] = item.name.split(' > ');
                if (firstScene === scene.name || secondScene === scene.name) {
                    const matchingTransition = updatedTransitions.find(t => 
                        t.name === `${firstScene === scene.name ? newName : firstScene} > ${secondScene === scene.name ? newName : secondScene}`
                    );
                    return matchingTransition || item;
                }
                return item;
            }
        });
        
        updatedShow.duration = show.duration;
        setShow(updatedShow);

        console.log(updatedShow);
    };

    const handleUpdateSceneDuration = (scene: Scene, newDuration: number) => {
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
        setShow(updatedShow);
    };

    const handleUpdateTransitionDuration = (transition: Transition, newDuration: number) => {
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
        setShow(updatedShow);
    };

    return (
        <div className="flex flex-col gap-4">
            {show.scenography.map((item, index) => (
                <div key={index}>
                    {item instanceof Scene ? (
                        <SceneComponent 
                            scene={item}
                            isLast={index === show.scenography.length - 1}
                            onAdd={handleAddScene}
                            onUpdateName={(newName) => handleUpdateSceneName(item, newName)}
                            onUpdateDuration={(newDuration) => handleUpdateSceneDuration(item, newDuration)}
                        />
                    ) : (
                        <TransitionComponent 
                            transition={item} 
                            onUpdateDuration={(newDuration) => handleUpdateTransitionDuration(item, newDuration)}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}
