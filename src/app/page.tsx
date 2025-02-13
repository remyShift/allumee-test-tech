import ScenographyCard from "@/components/ScenographyCard/ScenographyCard";
import InfoCard from "@/components/InfoCard/InfoCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <ScenographyCard />
      <InfoCard />
    </div>
  );
}
