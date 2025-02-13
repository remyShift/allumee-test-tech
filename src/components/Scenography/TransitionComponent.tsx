import React from 'react';
import Transition from '@/models/Transition';

interface TransitionProps {
    transition: Transition;
    onUpdateDuration: (newDuration: number) => void;
}

export default function TransitionComponent({ transition, onUpdateDuration }: TransitionProps) {
    return (
        <div className='flex flex-col gap-4 p-4'>
            <div className='w-1/2 h-[3px] bg-gray-700 rounded-full translate-x-1/2'></div>

            <div className="flex justify-between items-center gap-4">
                <span className="italic">TR {transition.name}</span>
                <input 
                    type="number"
                    value={transition.duration}
                    onChange={(e) => onUpdateDuration(parseInt(e.target.value))}
                    className="p-2 text-sm bg-transparent border w-24 rounded-sm"
                />
            </div>

            <div className='w-1/2 h-[3px] bg-gray-700 rounded-full translate-x-1/2'></div>
        </div>
    );
}
