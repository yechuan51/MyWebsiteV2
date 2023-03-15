import styles from "./layout.module.css";
import { NextPage } from "next";
import NavBarComp, { NavBarItemType } from "@/components/main_nav_bar/navBar";

type LayoutPropsType = {
  children: React.ReactNode;
};

const Layout: NextPage<LayoutPropsType> = (props: LayoutPropsType) => {
  const navBarItems: NavBarItemType[] = [
    { key: "blog", displayText: "Blog", href: "/blogs" },
    { key: "about", displayText: "About", href: "/about" },
  ];

  return (
    <div className={styles.container}>
      <header>
        <NavBarComp items={navBarItems} />
      </header>
      {props.children}
    </div>
  );
};

export default Layout;
