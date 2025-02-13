import React from 'react'
import ScenographyArray from './ScenographyArray'

export default function ScenographyCard() {
    return (
        <div className="flex w-1/2 flex-col items-center gap-6 rounded-lg border border-gray-700 bg-gray-900 p-4">
            <div>
                <h1 className="text-2xl font-bold">Scenography</h1>
            </div>
            <ScenographyArray />
        </div>
    )
}
