import { NextPage } from "next";
import NavBarComp, { NavBarItemType } from "@/components/main_nav_bar/navBar";
import { ThemeProvider } from "@/app/ui/mt/mt";

type LayoutPropsType = {
  children: React.ReactNode;
};

const Layout: NextPage<LayoutPropsType> = (props: LayoutPropsType) => {
  const navBarItems: NavBarItemType[] = [
    { key: "blog", displayText: "Blog", href: "/blogs" },
    { key: "about", displayText: "About", href: "/about" },
  ];

  return (
    <ThemeProvider>
      <header>
        <NavBarComp items={navBarItems} />
      </header>
      <div className="flex-container-column h-screen p-2.5">
        {props.children}
      </div>
    </ThemeProvider>
  );
};

export default Layout;
