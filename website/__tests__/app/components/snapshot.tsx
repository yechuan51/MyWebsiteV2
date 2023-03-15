import NavBarComp, { NavBarItemType } from "@/components/main_nav_bar/navBar";
import { render } from "@testing-library/react";

it("render unchanged", () => {
  // First, create a list of two dummy items for NavBarCompPropsType.
  const items: NavBarItemType[] = [
    { key: "item1", displayText: "Item 1", href: "/item1" },
    { key: "item2", displayText: "Item 2", href: "/item2" },
  ];
  // Create a NavBarComp with the items using render function.
  const { asFragment } = render(<NavBarComp items={items} />);
  // expect the result to match snapshot.
  expect(asFragment()).toMatchSnapshot();
});
