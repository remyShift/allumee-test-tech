import ScenographyTime from "./ScenographyTime";
import ControlButtons from "./ControlButtons";

export default function InfoCard() {
    return (
        <div className="flex w-1/2 flex-col items-center gap-4 rounded-lg border border-gray-700 bg-gray-900 p-4">
            <h1 className="text-2xl font-bold">Info</h1>
            <ScenographyTime />
            <ControlButtons />
        </div>
    )
}
