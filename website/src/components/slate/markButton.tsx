"use client";

import { ReactEditor, useSlate } from "slate-react";
import { BaseEditor, Editor } from "slate";
import Icon from "./icon";
import { ReactNode } from "react";
import Button from "./button";

type MarkButtonProps = {
  format: string;
  icon: ReactNode;
};

const isMarkActive = (editor: BaseEditor & ReactEditor, format: string) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format as keyof typeof marks] === true : false;
};

const toggleMark = (editor: BaseEditor & ReactEditor, format: string) => {
  const isActive = isMarkActive(editor, format);
  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

export default function MarkButton({ format, icon }: MarkButtonProps) {
  const editor = useSlate();
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={(event: { preventDefault: () => void }) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      <Icon icon={icon}></Icon>
    </Button>
  );
}
