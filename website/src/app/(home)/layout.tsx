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
    <>
      <header>
        <NavBarComp items={navBarItems} />
      </header>
      <div className="flex-container-column h-screen p-2.5">
        {props.children}
      </div>
    </>
  );
};

export default Layout;
