"use client";

import { forwardRef, PropsWithChildren, ReactNode } from "react";
import { ReactEditor, useSlate } from "slate-react";
import { BaseEditor, Editor } from "slate";
import Icon from "./icon";

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
  icon: ReactNode;
};

const Button = forwardRef<HTMLSpanElement, PropsWithChildren<ButtonProps>>(
  ({ className, active, reversed, ...props }, ref) => {
    const additionalClassName = reversed
      ? active
        ? "text-white"
        : "#aaa"
      : active
      ? "text-black"
      : "text-gray-500";
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
      {...rest}
      active={isMarkActive(editor, format)}
      onMouseDown={(event: { preventDefault: () => void }) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      <Icon icon={icon}></Icon>
    </Button>
  );
};
