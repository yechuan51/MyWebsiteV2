import styles from "./navBar.module.css";
import { NextPage } from "next";
import Link from "next/link";

export type NavBarItemType = {
  key: string;
  displayText: string;
  href: string;
};

export type NavBarCompPropsType = {
  items: NavBarItemType[];
};

export default function NavBarComp(props: NavBarCompPropsType) {
  const items = props.items;
  return (
    <nav className="flex flex-row justify-between items-center py-4 px-6 bg-white border-b border-gray-400">
      <p>
        <Link href="/" title="Logo">
          My website
        </Link>
      </p>
      <ul className="flex flex-row items-center">
        {items.map((item) => (
          <li className="mr-4 font-sfPro" key={item.key}>
            <Link href={item.href} className="hover:bg-gray-200 text-xl">
              {item.displayText}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
