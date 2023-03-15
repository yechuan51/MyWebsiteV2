import NavBarComp from "@/components/main_nav_bar/navBar";
import { render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";

describe("NavBarTest", () => {
  it("renders a nav", () => {
    render(<NavBarComp items={[]} />);
    const navBar = screen.getByRole("navigation");
    expect(navBar).toBeTruthy();
  });

  it("has a title", () => {
    render(<NavBarComp items={[]} />);
    const titleElement = screen.getByText("My website");
    expect(titleElement).toBeTruthy();
    expect(titleElement.tagName).toBe("A");
    expect(titleElement.parentElement).toBeTruthy();
    expect(titleElement.parentElement!.tagName).toBe("P");
    expect(titleElement.parentElement!.classList.contains("title"));
  });

  it("Renders menu", () => {
    render(
      <NavBarComp
        items={[
          { key: "item1", displayText: "Item 1", href: "/item1" },
          { key: "item2", displayText: "Item 2", href: "/item2" },
        ]}
      />
    );
    const menuList = screen.getByRole("list");
    expect(menuList).toBeTruthy();

    const menuItems = screen.getAllByRole("listitem");
    expect(menuItems).toBeTruthy();
    expect(menuItems.length).toBe(2);
    expect(menuItems[0].textContent).toBe("Item 1");
    expect(menuItems[1].textContent).toBe("Item 2");
  });
});
