"use client";

import Scene from '@/models/Scene';
import Show from '@/models/Show';
import SceneComponent from './SceneComponent';
import TransitionComponent from './TransitionComponent';
import { useShow } from '@/context/show';

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

    return (
        <div className="flex flex-col gap-4">
            {show.scenography.map((item, index) => (
                <div key={index}>
                    {item instanceof Scene ? (
                        <SceneComponent 
                            scene={item}
                            isLast={index === show.scenography.length - 1}
                            onAdd={handleAddScene}
                        />
                    ) : (
                        <TransitionComponent transition={item} />
                    )}
                </div>
            ))}
        </div>
    );
}
