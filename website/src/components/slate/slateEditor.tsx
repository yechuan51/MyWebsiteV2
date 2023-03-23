"use client";

import React, { useCallback, useMemo, useState } from "react";
import { createEditor, BaseEditor, Descendant } from "slate";

import {
  Slate,
  Editable,
  withReact,
  ReactEditor,
  RenderLeafProps,
} from "slate-react";
import { withHistory } from "slate-history";
import Toolbar from "./toolbar";
import { MarkButton } from "./button";
import Leaf from "./leaf";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import CodeIcon from "@mui/icons-material/Code";

type CustomElement = { type: "paragraph"; children: CustomText[] };
type CustomText = {
  text: string;
  bold?: boolean;
  code?: boolean;
  italic?: boolean;
  underline?: boolean;
};

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
  const hello = <p>Hello</p>;

  const renderLeaf = useCallback(
    (props: RenderLeafProps) => <Leaf {...props} />,
    []
  );

  // Render the Slate context.
  return (
    <div className="border border-gray-300 bg-gray-100 rounded-md p-2">
      <Slate editor={editor} value={initialValue}>
        <Toolbar className="text-blue-700 flex flex-container">
          <MarkButton format="bold" icon={<FormatBoldIcon />} />
          <MarkButton format="italic" icon={<FormatItalicIcon />} />
          <MarkButton format="underline" icon={<FormatUnderlinedIcon />} />
          <MarkButton format="code" icon={<CodeIcon />} />
        </Toolbar>
        <Editable
          renderLeaf={renderLeaf}
          className="bg-white border border-gray-300 p-2 rounded-md"
          placeholder="Enter some plain text..."
        />
      </Slate>
    </div>
  );
};

export default SlateEditorComp;
