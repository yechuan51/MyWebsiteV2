"use client";

import { forwardRef, PropsWithChildren, ReactNode } from "react";

type IconProps = {
  icon?: ReactNode;
};

const Icon = forwardRef<HTMLDivElement, PropsWithChildren<IconProps>>(
  (props, ref) => {
    return <div ref={ref}>{props.icon}</div>;
  }
);

Icon.displayName = "Icon";
export default Icon;
