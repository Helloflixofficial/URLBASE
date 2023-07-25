import Image from "next/image";
import Link from "next/link";
export const Navbar = () => {
  return (
    <>
      <nav className="flexBetween navbar">
        <div>
          <Link href="/">
            <Image src="./logo.svg" width={115} height={43} alt="flexibble" />
          </Link>
          <ul className="xl:flex hidden text-small gap-7"></ul>
        </div>
      </nav>
    </>
  );
};
