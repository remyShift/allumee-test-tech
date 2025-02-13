import React from 'react';
import Scene from '@/models/Scene';
import { useShow } from '@/context/show';
import { ButtonAdd } from '../ui/ButtonAdd';

interface SceneProps {
    scene: Scene;
    isLast: boolean;
    onAdd: () => void;
    onUpdateName: (newName: string) => void;
    onUpdateDuration: (newDuration: number) => void;
}

export default function SceneComponent({ scene, isLast, onAdd, onUpdateName, onUpdateDuration }: SceneProps) {
    const { show } = useShow();

    return (
        <div className="flex w-full justify-between items-center p-4">
            <span className="font-bold">Scene {show.scenography.indexOf(scene) + 1}</span>
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
            {isLast && (
                <ButtonAdd onClick={onAdd} />
            )}
        </div>
    );
}
