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
    <nav className="bg-gray-900 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-white font-bold text-xl">
              My Blog
            </a>
          </div>
          <div className="hidden sm:flex items-baseline">
            <ul className="ml-10 flex items-baseline space-x-4">
              {items.map((item) => (
                <li className="mr-4 font-sfPro" key={item.key}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.displayText}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
