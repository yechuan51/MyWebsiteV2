"use client";

import { useState } from "react";

export default function KittyMaker() {
  const [newName, setNewName] = useState("");

  async function makeKitty() {
    const response = await fetch("/api/kitty", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newName }),
    });
    const data = await response.json();
    // Log the response data to the console with a message that says response has been received.
    console.log("Response received: ", data);
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <input
        type="text"
        value={newName}
        onChange={handleInputChange}
        className="border-solid border-4 border-gray-300 p-1 rounded w-96"
        placeholder="Enter a name for your kitty"
      />
      <p className="text-center mt-4">Your kitty will be named:</p>
      <p className="text-center text-5xl">{newName}</p>
      <button
        onClick={makeKitty}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded my-4"
      >
        Make new kitty
      </button>
    </div>
  );
}
