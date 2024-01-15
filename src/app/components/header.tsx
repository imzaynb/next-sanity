import Link from "next/link";
import Navbar from "./navbar";

const Header = async () => {

  return (
    <>
      <header className="border-b border-gray-500 flex items-center justify-between py-5">
        <Link
          href="/"
          className="text-lg font-bold hover:scale-110 transition"
        >
          Zayn
        </Link>
        <Navbar />
      </header>
    </>
  );
}

export default Header;