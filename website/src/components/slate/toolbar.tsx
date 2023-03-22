"use client";

import { forwardRef, ForwardRefRenderFunction, useEffect, useRef } from "react";
import Menu from "./menu";

interface ToolbarProps {
  // Props for Toolbar component
  children: React.ReactNode;
}

const Toolbar: React.FC<ToolbarProps> = (props) => {
  const menuRef = useRef<HTMLDivElement>(null);

  return (
    <div className="menu">
      {/* Menu content goes here */}
      <Menu ref={menuRef}>{props.children}</Menu>
    </div>
  );
};

export default Toolbar;
