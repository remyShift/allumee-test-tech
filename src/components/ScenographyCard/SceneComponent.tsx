import React, { useEffect, useState } from 'react';
import Scene from '@/models/Scene';
import { useShow } from '@/context/show';
import { AddBtn } from '../ui/AddBtn';
import { RemoveBtn } from '../ui/RemoveBtn';

interface SceneProps {
    scene: Scene;
    onAdd: () => void;
    onDelete: () => void;
    onUpdateName: (newName: string) => void;
    onUpdateDuration: (newDuration: number) => void;
}

export default function SceneComponent({ scene, onAdd, onDelete, onUpdateName, onUpdateDuration }: SceneProps) {
    const { show } = useShow();
    const [isLastScene, setIsLastScene] = useState(false);
    const [isFirstScene, setIsFirstScene] = useState(false);
    
    useEffect(() => {
        const scenes = show.scenes;
        setIsLastScene(scenes[scenes.length - 1] === scene);
        setIsFirstScene(scenes[0] === scene);
    }, [show, scene]);

    return (
        <div className="flex w-full justify-between items-center p-4">
            <span className="text-lg font-bold underline">
                Scene {show.scenography.filter(item => item instanceof Scene).indexOf(scene) + 1}
            </span>
            <input 
                type="text"
                value={scene.name}
                onChange={(e) => onUpdateName(e.target.value)}
                className="p-2 text-sm bg-transparent border rounded-sm"
            />
            <input 
                type="number"
                value={scene.duration}
                onChange={(e) => onUpdateDuration(parseInt(e.target.value))}
                className="p-2 text-sm bg-transparent border w-24 rounded-sm"
            />
            {isLastScene ? (
                <div className="flex gap-2">
                    <AddBtn onClick={onAdd} />
                    {!isFirstScene && <RemoveBtn onClick={onDelete} />}
                </div>
            ) : (
                !isFirstScene && <RemoveBtn onClick={onDelete} />
            )}
        </div>
    );
}
