import KittyFinder from "@/components/kittyDb/finder";
import KittyMaker from "@/components/kittyDb/maker";

export default async function TestPage() {
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-3xl mt-4">Kitty creator</h1>
      <KittyMaker />
      <KittyFinder />
    </div>
  );
}
