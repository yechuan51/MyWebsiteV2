"use client";

import { CustomEditor } from "../slateEditor";
import { extractMarkdown } from "./remarkParser";

// Save a blog to the database.
export async function saveBlogToDb(title: string, content: string) {
  const response = await fetch("/api/blog", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content }),
  });
  const data = await response.json();
}

export function SaveMarkdownToDb(editor: CustomEditor) {
  const { title, markdown } = extractMarkdown(editor);
  saveBlogToDb(title, markdown);
}
