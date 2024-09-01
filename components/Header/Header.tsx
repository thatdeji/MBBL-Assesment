import Link from "next/link";
import { navigation } from "./Header.data";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-6 absolute top-0 left-0 w-full text-white z-[1000] bg-transparent bg-opacity-90 backdrop-blur-[15px] h-[72px]">
      <div className="main-container flex items-center justify-between ">
        <Link href={"/"} className="h-6 w-[80px] relative">
          <Image
            fill
            src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725202419/Screenshot_2024-09-01_at_3.53.30_PM_x5kyjw.png"
            alt=""
            className="object-cover"
          />
        </Link>
        <nav className=" hidden lg:flex justify-center items-center gap-8">
          {navigation.map((navItem) => (
            <Link
              href={navItem.href}
              key={navItem.title}
              className="text-base font-normal text-white"
            >
              {navItem.title}
            </Link>
          ))}
        </nav>
        <div className=" hidden lg:flex items-center gap-8">
          <Link href={"#"} className="text-base font-normal text-white">
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
