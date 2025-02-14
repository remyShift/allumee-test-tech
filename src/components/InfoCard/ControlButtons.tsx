"use client"

import { useShow } from '@/context/show';
import Show from '@/models/Show';
import Scene from '@/models/Scene';
import Transition from '@/models/Transition';
import { useState } from 'react';

interface SceneData {
    name: string;
    duration: number;
}

interface TransitionData {
    name: string;
    duration: number;
}

export default function ControlButtons() {
    const { show, setShow } = useShow();
    const [loadStatus, setLoadStatus] = useState('Load');
    const [saveStatus, setSaveStatus] = useState('Save');
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

    const handleReset = () => {
        setShow(new Show());
    };

    const handleLoad = () => {
        fetch(`${API_URL}/api/scenography`)
            .then(res => res.json())
            .then(data => {
                const newShow = new Show();
                
                newShow.scenes = [];
                newShow.transitions = [];
                newShow.scenography = [];
                newShow.duration = 0;
                
                data.scenes.forEach((sceneData: SceneData) => {
                    const scene = new Scene(sceneData.name, sceneData.duration);
                    newShow.scenes.push(scene);
                    newShow.scenography.push(scene);
                    newShow.duration += scene.duration;
                });
                
                data.transitions.forEach((transitionData: TransitionData, index: number) => {
                    const scene1 = newShow.scenes[index];
                    const scene2 = newShow.scenes[index + 1];
                    const transition = new Transition(scene1.name, scene2.name);
                    transition.updateDuration = transitionData.duration;
                    
                    newShow.transitions.push(transition);
                    const position = (index * 2) + 1;
                    newShow.scenography.splice(position, 0, transition);
                    newShow.duration += transition.duration;
                });
                
                setShow(newShow);
                setLoadStatus('Loaded');
                setTimeout(() => {
                    setLoadStatus('Load');
                }, 1500);
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

        fetch(`${API_URL}/api/scenography`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(() => {
            setSaveStatus('Saved');
            setTimeout(() => {
                setSaveStatus('Save');
            }, 1500);
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
                {loadStatus}
            </button>
            <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md transition-colors"
            >
                {saveStatus}
            </button>
        </div>
    );
} 