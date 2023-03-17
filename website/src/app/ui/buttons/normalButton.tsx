import { DocumentPlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "../mt/mt";

interface NormalButtonProps {
  text: string;
  href?: string;
  icon?: JSX.Element;
}

export default function NormalButton(props: NormalButtonProps) {
  return (
    <Link href={props.href || "/"}>
      <Button className="flex items-center space-x-2">
        {props.icon ? props.icon : <></>}
        <span>{props.text}</span>
      </Button>
    </Link>
  );
}
