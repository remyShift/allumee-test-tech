import React from 'react';
import Scene from '@/models/Scene';
import { useShow } from '@/context/show';
import { ButtonAdd } from '../ui/ButtonAdd';

interface SceneProps {
    scene: Scene;
    onAdd: () => void;
    onDelete: () => void;
    onUpdateName: (newName: string) => void;
    onUpdateDuration: (newDuration: number) => void;
}

export default function SceneComponent({ scene, onAdd, onDelete, onUpdateName, onUpdateDuration }: SceneProps) {
    const { show } = useShow();

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
            <div className="flex gap-2">
                <ButtonAdd onClick={onAdd} />
                <button
                    onClick={onDelete}
                    className="p-2 text-red-500 hover:text-red-600 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
