"use client";

import { useSlate } from "slate-react";

export async function saveBlogToDb(title: string, content: string) {
  const response = await fetch("/api/blog", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content }),
  });
  const data = await response.json();
  console.log(data);
}
