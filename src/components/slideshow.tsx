import Image from "next/image";
import { useRouter } from "next/router";
import BackIcon from "@/assets/icon-back-button.svg";
import NextIcon from "@/assets/icon-next-button.svg";
import * as Progress from "@radix-ui/react-progress";
import { useEffect, useContext } from "react";
import { SlideshowContext } from "@/lib/context";

export default function Slideshow({ painting, paintingIndex }: SlideshowProps) {
  // access router to navigate pages programatically
  const router = useRouter();

  const slideshow = useContext(SlideshowContext);

  useEffect(() => {
    function handleTransition() {
      if (painting.nav.next) {
        router.push(painting.nav.next);
      } else {
        router.push("/");
        slideshow?.setIsPlaying(false);
      }
    }

    if (slideshow!.isPlaying) {
      const timeoutId = setTimeout(handleTransition, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [slideshow, painting.nav.next, router]);

  // slideshow progress
  const progress =
    (paintingIndex.indexOf(painting.nav.slug) + 1) / paintingIndex.length;

  // previous painting
  function handlePrev() {
    if (painting.nav.prev) {
      router.push(painting.nav.prev);
    }
  }

  // next painting
  function handleNext() {
    if (painting.nav.next) {
      router.push(painting.nav.next);
    }
  }

  return (
    <>
      <Progress.Root
        value={progress}
        max={paintingIndex.length}
        className="relative h-[1px] w-full overflow-hidden bg-_gray-200"
      >
        <Progress.Indicator
          className="ease-[cubic-bezier(0.65, 0, 0.35, 1)] h-full w-full bg-black transition-transform duration-700"
          style={{
            transform: `translateX(-${100 - progress * 100}%)`,
          }}
        />
      </Progress.Root>

      <div className="flex items-center justify-between px-6 py-4 md:px-10 md:py-6 lg:mx-auto lg:max-w-[1440px]">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-bold md:text-lg">{painting.name}</span>
          <span className="text-[10px] md:text-[13px]">
            {painting.artist.name}
          </span>
        </div>

        <fieldset className="flex gap-6 md:gap-10">
          <button
            onClick={handlePrev}
            disabled={!painting.nav.prev}
            className="group"
          >
            <Image
              src={BackIcon}
              alt=""
              className="h-4 w-auto transition-opacity hover:opacity-50 group-disabled:opacity-[15%] group-disabled:hover:opacity-[15%] md:h-6"
            />
          </button>
          <button
            onClick={handleNext}
            disabled={!painting.nav.next}
            className="group"
          >
            <Image
              src={NextIcon}
              alt=""
              className="h-4 w-auto transition-opacity hover:opacity-50 group-disabled:opacity-[15%] group-disabled:hover:opacity-[15%] md:h-6"
            />
          </button>
        </fieldset>
      </div>
    </>
  );
}
