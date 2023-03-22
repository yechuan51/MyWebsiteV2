"use client";

import React, { forwardRef, Ref } from "react";

interface MenuProps {
  children: React.ReactNode;
}

const Menu = forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  return <div ref={ref}>{props.children}</div>;
});

Menu.displayName = "Menu";
export default Menu;
