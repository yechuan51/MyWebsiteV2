"use client";

import { useState } from "react";

export default function KittyFinder() {
  const [kittyCount, setKittyCount] = useState(0);

  async function getKitty() {
    const response = await fetch("/api/kitty");
    const data = await response.json();
    setKittyCount(data.count);
  }

  return (
    <div className="flex justify-center flex-col items-center">
      <button
        onClick={() => {
          getKitty();
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
      >
        Get kitty count
      </button>
      {kittyCount <= 0 ? (
        <p>Click on the button above to see the current kitty count</p>
      ) : (
        <p>The current kitty count is {kittyCount}</p>
      )}
    </div>
  );
}
