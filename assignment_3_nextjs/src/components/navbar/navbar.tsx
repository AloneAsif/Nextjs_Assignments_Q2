import Link from "next/link";

export default function NavbarComponent() {
    return (
      <nav className="bg-gray-800 w-full flex h-16 items-center text-white">
        <div className="flex justify-between w-full mx-8">
          <div>Logo</div>
          <div className="hidden sm:flex w-full px-4 gap-8 justify-center">
            <Link href={"/"}><div>Home</div></Link>
            <Link href={"/pages/about"}><div>About Us</div></Link>
            <Link href={"/pages/contact"}><div>Contact</div></Link>
          </div>
          <div>Icon</div>
        </div>
      </nav>
    );
  }
  