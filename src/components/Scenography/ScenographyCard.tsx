import ScenographyArray from './ScenographyArray'
import ColumnDescription from './ColumnDescription'

export default function ScenographyCard() {
    return (
        <div className="flex w-1/2 flex-col items-center gap-4 rounded-lg border border-gray-700 bg-gray-900 p-4">
            <div className="flex flex-col items-center gap-6 w-full">
                <h1 className="text-2xl font-bold">Scenography</h1>
                <ColumnDescription />
            </div>
            <ScenographyArray />
        </div>
    )
}
