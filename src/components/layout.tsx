import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { useContext } from "react";
import { SlideshowContext } from "@/lib/context";
import { motion } from "framer-motion";
import Transition from "./transition";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  const slideshow = useContext(SlideshowContext);

  function handleStartSlideshow() {
    slideshow?.setIsPlaying(true);
    router.push("/starry-night");
  }

  function handleStopSlideshow() {
    slideshow?.setIsPlaying(false);
    router.push("/");
  }

  if (!slideshow) return null;

  return (
    <>
      <header className="mx-auto max-w-[1360px]">
        <div className="mx-6 flex items-center justify-between py-6 md:mx-10 md:py-7 lg:mx-0 lg:py-10">
          <Image
            priority
            src={Logo}
            alt=""
            className="h-8 w-[113px] lg:h-12 lg:w-[170px]"
            role="button"
            onClick={() => {
              slideshow.setIsPlaying(false);
              router.push("/");
            }}
          />
          <button
            onClick={
              slideshow.isPlaying ? handleStopSlideshow : handleStartSlideshow
            }
            className="text-link-2 font-bold uppercase leading-link-2 tracking-link-2 text-_gray-300 hover:text-black md:text-link-1 md:leading-link-1 md:tracking-link-1"
          >
            {slideshow.isPlaying ? "stop slideshow" : "start slideshow"}
          </button>
        </div>
        <hr />
      </header>
      <main>
        <Transition>{children}</Transition>
      </main>
    </>
  );
}
