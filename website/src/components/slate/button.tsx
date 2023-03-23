"use client";

import { forwardRef, PropsWithChildren } from "react";
import { ReactEditor, useSlate } from "slate-react";
import { BaseEditor, Editor } from "slate";

interface BaseProps {
  className?: string;
  [key: string]: unknown;
}

type ButtonProps = {
  className?: string;
  active: boolean;
  reversed: boolean;
} & BaseProps;

type MarkButtonProps = {
  format: string;
  icon: string;
};

const Button = forwardRef<HTMLSpanElement, PropsWithChildren<ButtonProps>>(
  ({ className, active, reversed, ...props }, ref) => {
    const additionalClassName = props.reversed
      ? props.active
        ? "text-white"
        : "#aaa"
      : props.active
      ? "text-black"
      : "#ccc";

    return (
      <span
        {...props}
        ref={ref}
        className={`${props.className || ""} ${additionalClassName}`}
      />
    );
  }
);

Button.displayName = "Button";

const isMarkActive = (editor: BaseEditor & ReactEditor, format: string) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format as keyof typeof marks] === true : false;
};

const toggleMark = (editor: BaseEditor & ReactEditor, format: string) => {
  const isActive = isMarkActive(editor, format);
  console.log(isActive);
  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

export const MarkButton = ({ format, icon, ...rest }: MarkButtonProps) => {
  const editor = useSlate();
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={(event: { preventDefault: () => void }) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      <p>{icon}</p>
    </Button>
  );
};
