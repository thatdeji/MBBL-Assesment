import Link from "next/link";
import { navigation } from "./Header.data";

const Header = () => {
  return (
    <header className="py-6 absolute top-0 left-0 w-full text-white z-[1000] bg-main bg-opacity-90 backdrop-blur-[15px]">
      <div className="main-container flex items-center justify-between ">
        <div className="h-6 w-[80px] bg-white" />
        <nav className="flex justify-center items-center gap-8">
          {navigation.map((navItem) => (
            <Link
              href={navItem.href}
              key={navItem.title}
              className="text-lg font-normal text-white"
            >
              {navItem.title}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-8">
          <Link href={"#"} className="text-lg font-normal text-white">
            Login
          </Link>
          <Link href={"#"} className="button">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
