"use client"

import { useShow } from '@/context/show';
import { formatTimeInMinutes } from '@/utils/formatTimeInMinutes';

export default function ScenographyTime() {
    const { show } = useShow();

    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-between items-center">
                <p>Scenography total duration :</p>
                <p>{formatTimeInMinutes(show.getScenographyDuration())}</p>
            </div>
            <div className="flex justify-between items-center">
                <p>Scenes duration :</p>
                <p>{formatTimeInMinutes(show.getScenesDuration())}</p>
            </div>
            <div className="flex justify-between items-center">
                <p>Transitions duration :</p>
                <p>{formatTimeInMinutes(show.getTransitionsDuration())}</p>
            </div>
        </div>
    )
}
