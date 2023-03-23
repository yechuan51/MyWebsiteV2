"use client";

import React, { forwardRef, PropsWithChildren } from "react";

type MenuProps = {
  className?: string;
};

const Menu = forwardRef<HTMLDivElement, PropsWithChildren<MenuProps>>(
  (props, ref) => {
    return (
      <div ref={ref} className={props.className || undefined}>
        {props.children}
      </div>
    );
  }
);

Menu.displayName = "Menu";
export default Menu;
