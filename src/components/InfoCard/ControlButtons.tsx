"use client"

import { useShow } from '@/context/show';
import Show from '@/models/Show';
import Scene from '@/models/Scene';

export default function ControlButtons() {
    const { show, setShow } = useShow();

    const handleReset = () => {
        setShow(new Show());
    };

    const handleLoad = () => {
        fetch('http://localhost:8000/api/scenography')
            .then(res => res.json())
            .then(data => {
                const newShow = new Show();
                
                data.scenes.forEach((sceneData: any) => {
                    const scene = new Scene(sceneData.name, sceneData.duration);
                    newShow.addScene(scene);
                });
                
                setShow(newShow);
            });
    };

    const handleSave = () => {
        const data = {
            scenes: show.scenes.map(scene => ({
                name: scene.name,
                duration: scene.duration
            })),
            transitions: show.transitions.map(transition => ({
                name: transition.name,
                duration: transition.duration
            }))
        };

        fetch('http://localhost:8000/api/scenography', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    };

    return (
        <div className="flex gap-4 w-full justify-center">
            <button
                onClick={handleReset}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md transition-colors"
            >
                Reset
            </button>
            <button
                onClick={handleLoad}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
            >
                Load
            </button>
            <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md transition-colors"
            >
                Save
            </button>
        </div>
    );
} 