"use client";

import { PropsWithChildren, useRef } from "react";
import Menu from "./menu";

type ToolbarProps = {
  className?: string;
};

const Toolbar: React.FC<PropsWithChildren<ToolbarProps>> = (props) => {
  const menuRef = useRef<HTMLDivElement>(null);

  return (
    <div className="menu">
      <Menu
        ref={menuRef}
        className={`inline-block mx-2 space-x-2 ${props.className}`}
      >
        {props.children}
      </Menu>
    </div>
  );
};

export default Toolbar;
