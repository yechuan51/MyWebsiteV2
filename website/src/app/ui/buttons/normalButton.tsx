import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "../mt/mt";

interface NormalButtonProps {
  text: string;
  href?: string;
  icon?: ReactNode;
}

export default function NormalButton(props: NormalButtonProps) {
  return (
    <Link href={props.href || "/"}>
      <div className="inline-block">
        <Button className="flex items-center space-x-2 ">
          {props.icon ? <span>{props.icon}</span> : null}
          <span>{props.text}</span>
        </Button>
      </div>
    </Link>
  );
}
