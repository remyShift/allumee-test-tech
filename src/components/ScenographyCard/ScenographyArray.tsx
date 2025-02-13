"use client"

import { useShow } from '@/context/show';
import SceneComponent from './SceneComponent';
import TransitionComponent from './TransitionComponent';
import { addScene, updateSceneName, updateSceneDuration, updateTransitionDuration } from '@/utils/handleShow';
import Scene from '@/models/Scene';
import Transition from '@/models/Transition';

export default function ScenographyArray() {
    const { show, setShow } = useShow();

    const handleAddScene = () => {
        const updatedShow = addScene(show);
        setShow(updatedShow);
    };

    const handleUpdateSceneName = (scene: Scene, newName: string) => {
        const updatedShow = updateSceneName(show, scene, newName);
        setShow(updatedShow);
    };

    const handleUpdateSceneDuration = (scene: Scene, newDuration: number) => {
        const updatedShow = updateSceneDuration(show, scene, newDuration);
        setShow(updatedShow);
    };

    const handleUpdateTransitionDuration = (transition: Transition, newDuration: number) => {
        const updatedShow = updateTransitionDuration(show, transition, newDuration);
        setShow(updatedShow);
    };

    return (
        <div className="flex flex-col gap-4 w-full">
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
