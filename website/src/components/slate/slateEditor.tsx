"use client";

import React, { useMemo, useState } from "react";
import { createEditor, BaseEditor, Descendant } from "slate";

import { Slate, Editable, withReact, ReactEditor } from "slate-react";
import { withHistory } from "slate-history";
import Toolbar from "./toolbar";
import { Button } from "@/app/ui/mt/mt";

type CustomElement = { type: "paragraph"; children: CustomText[] };
type CustomText = { text: string };

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [
      { text: "This is editable plain text, just like a <textarea>!" },
    ],
  },
];

const SlateEditorComp = () => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const hello = <Button>Hello</Button>;

  // Render the Slate context.
  return (
    <div className="border border-gray-300 bg-gray-100 rounded-md p-2">
      <Slate editor={editor} value={initialValue}>
        <Toolbar>{hello}</Toolbar>
        <Editable
          className="bg-white border border-gray-300 p-2 rounded-md"
          placeholder="Enter some plain text..."
        />
      </Slate>
    </div>
  );
};

export default SlateEditorComp;
