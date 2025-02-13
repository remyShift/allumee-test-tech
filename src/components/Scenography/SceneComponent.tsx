import React from 'react';
import Scene from '@/models/Scene';
import { useShow } from '@/context/show';

interface SceneProps {
    scene: Scene;
    isLast: boolean;
    onAdd: () => void;
}

export default function SceneComponent({ scene, isLast, onAdd }: SceneProps) {
    const { show } = useShow();

    return (
        <div className="flex items-center gap-4 p-4 bg-background border border-foreground rounded">
            <span>Scene {show.scenography.indexOf(scene) + 1}</span>
            <input 
                type="text"
                value={scene.name}
                onChange={(e) => scene.updateName = e.target.value}
                className="border p-2"
            />
            <input 
                type="number"
                value={scene.duration}
                onChange={(e) => scene.updateDuration = parseInt(e.target.value)}
                className="border p-2 w-24"
            />
            {isLast && (
                <button 
                    onClick={onAdd}
                    className="p-2 border"
                >
                    +
                </button>
            )}
        </div>
    );
}
