"use client";

import { ReactNode } from "react";
import { useSlate } from "slate-react";
import Button from "./button";
import Icon from "./icon";

type CustomButtonProps = {
  icon: ReactNode;
  onClick: () => void;
};

export default function CustomButton({ icon, onClick }: CustomButtonProps) {
  const editor = useSlate();

  return (
    <Button
      active={false}
      onMouseDown={(event: { preventDefault: () => void }) => {
        event.preventDefault();
        onClick();
      }}
    >
      <Icon icon={icon}></Icon>
    </Button>
  );
}
