"use client";

import { useEffect, useState } from "react";

export function getCurrentTime() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function CurrentTimeComp() {
  const [timeStr, setTimeStr] = useState(getCurrentTime());

  // Update the current time every 5 seconds.
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeStr(getCurrentTime());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-sm mt-4">Current time</h1>
      <h2 className="text-sm mt-4">{timeStr}</h2>
    </div>
  );
}
