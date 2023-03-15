import KittyFinder from "@/components/kittyDb/finder";

export default async function TestPage() {
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-3xl mt-4">Kitty creator</h1>
      <input
        type="text"
        className="border-solid border-4 border-gray-300 p-1 rounded w-96"
        placeholder="Enter a name for your kitty"
      />
      <KittyFinder />
    </div>
  );
}
