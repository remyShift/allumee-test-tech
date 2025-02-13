import React from 'react';
import Transition from '@/models/Transition';

interface TransitionProps {
    transition: Transition;
    onUpdateDuration: (newDuration: number) => void;
}

export default function TransitionComponent({ transition, onUpdateDuration }: TransitionProps) {
    return (
        <div className="flex items-center gap-4 p-4 bg-background border border-foreground rounded">
            <span>TR {transition.name}</span>
            <input 
                type="number"
                value={transition.duration}
                onChange={(e) => onUpdateDuration(parseInt(e.target.value))}
                className="border p-2 w-24"
            />
        </div>
    );
}
