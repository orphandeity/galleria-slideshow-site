import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.svg";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header className="mx-auto max-w-[1360px]">
        <div className="mx-6 flex items-center justify-between py-6 md:mx-10 md:py-7 lg:mx-0 lg:py-10">
          <Link href={"/"}>
            <Image
              priority
              src={Logo}
              alt=""
              className="h-8 w-[113px] lg:h-12 lg:w-[170px]"
            />
          </Link>
          <button className="text-link-2 font-bold uppercase leading-link-2 tracking-link-2 md:text-link-1 md:leading-link-1 md:tracking-link-1">
            start slideshow
          </button>
        </div>
        <hr />
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
}
