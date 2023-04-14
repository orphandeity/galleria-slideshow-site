import Image from "next/image";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header className="mx-auto max-w-[1360px]">
        <div className="mx-6 flex items-center justify-between py-6 md:mx-10 md:py-7 lg:mx-0 lg:py-10">
          <Link href={"/"}>
            <Image
              src={"./logo.svg"}
              alt=""
              width={170}
              height={48}
              className="h-8 w-[113px] lg:h-12 lg:w-[170px]"
            />
          </Link>
          <span className="text-link-2 font-bold uppercase leading-link-2 tracking-link-2 md:text-link-1 md:leading-link-1 md:tracking-link-1">
            start slideshow
          </span>
        </div>
        <hr />
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
}
