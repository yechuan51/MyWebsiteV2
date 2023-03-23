"use client";

import React, { useCallback, useMemo } from "react";
import { createEditor, BaseEditor, Descendant } from "slate";
import {
  Slate,
  Editable,
  withReact,
  ReactEditor,
  RenderLeafProps,
} from "slate-react";
import { withHistory } from "slate-history";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import SaveIcon from "@mui/icons-material/Save";
import CodeIcon from "@mui/icons-material/Code";
import Toolbar from "./toolbar";
import MarkButton from "./markButton";
import Leaf from "./leaf";
import CustomButton from "./customButton";
import { saveBlogToDb } from "./utils/dbUtils";

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
  const editor = useMemo(() => withReact(withHistory(createEditor())), []);

  const renderLeaf = useCallback(
    (props: RenderLeafProps) => <Leaf {...props} />,
    []
  );

  // Render the Slate context.
  return (
    <div className="border border-gray-300 bg-gray-100 rounded-md p-2">
      <Slate editor={editor} value={initialValue}>
        <Toolbar className="flex flex-container">
          <MarkButton format="bold" icon={<FormatBoldIcon />} />
          <MarkButton format="italic" icon={<FormatItalicIcon />} />
          <MarkButton format="underline" icon={<FormatUnderlinedIcon />} />
          <MarkButton format="code" icon={<CodeIcon />} />
          <CustomButton
            icon={<SaveIcon />}
            onClick={() => {
              console.log("Pressed");
              saveBlogToDb("title", "content");
            }}
          />
        </Toolbar>
        <Editable
          renderLeaf={renderLeaf}
          className="bg-white border border-gray-300 p-2 rounded-md"
          placeholder="Enter some plain text..."
          autoFocus
          spellCheck
        />
      </Slate>
    </div>
  );
};

export default SlateEditorComp;
