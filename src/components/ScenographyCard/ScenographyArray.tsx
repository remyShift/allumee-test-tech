"use client"

import { useShow } from '@/context/show';
import SceneComponent from './SceneComponent';
import TransitionComponent from './TransitionComponent';
import { updateSceneName, updateSceneDuration, updateTransitionDuration, addSceneAfter, deleteScene } from '@/utils/handleShow';
import Scene from '@/models/Scene';
import Transition from '@/models/Transition';

export default function ScenographyArray() {
    const { show, setShow } = useShow();

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

    const handleAddAfterScene = (scene: Scene) => {
        const updatedShow = addSceneAfter(show, scene);
        setShow(updatedShow);
    };

    const handleDeleteScene = (scene: Scene) => {
        if (show.scenes.length <= 1) return;
        const updatedShow = deleteScene(show, scene);
        setShow(updatedShow);
    };

    return (
        <div className="flex flex-col gap-4 w-full">
            {show.scenography.map((item, index) => (
                <div key={index}>
                    {item instanceof Scene ? (
                        <SceneComponent
                            scene={item}
                            onAdd={() => handleAddAfterScene(item)}
                            onDelete={() => handleDeleteScene(item)}
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
