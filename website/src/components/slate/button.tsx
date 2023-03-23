"use client";

import { forwardRef, PropsWithChildren } from "react";

interface BaseProps {
  className?: string;
  [key: string]: unknown;
}

type ButtonProps = {
  className?: string;
  active: boolean;
} & BaseProps;

const Button = forwardRef<HTMLSpanElement, PropsWithChildren<ButtonProps>>(
  ({ className, active, ...props }, ref) => {
    const additionalClassName = active ? "text-black" : "text-gray-500";
    return (
      <span
        {...props}
        ref={ref}
        className={`cursor-pointer ${
          props.className || ""
        } ${additionalClassName}`}
      />
    );
  }
);

Button.displayName = "Button";
export default Button;
