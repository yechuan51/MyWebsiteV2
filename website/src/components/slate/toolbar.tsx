"use client";

import {
  forwardRef,
  ForwardRefRenderFunction,
  PropsWithChildren,
  useEffect,
  useRef,
} from "react";
import Menu from "./menu";

type ToolbarProps = {
  // Props for Toolbar component
  className?: string;
};

const Toolbar: React.FC<PropsWithChildren<ToolbarProps>> = (props) => {
  const menuRef = useRef<HTMLDivElement>(null);

  return (
    <div className="menu">
      <Menu {...props} ref={menuRef} />
    </div>
  );
};

export default Toolbar;
