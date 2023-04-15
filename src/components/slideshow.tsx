import Image from "next/image";
import { useRouter } from "next/router";
import BackIcon from "@/assets/icon-back-button.svg";
import NextIcon from "@/assets/icon-next-button.svg";

export default function Slideshow({ painting }: SlideshowProps) {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between border-t px-6 py-4 md:px-10 md:py-6">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-bold md:text-lg">{painting.name}</span>
        <span className="text-[10px] md:text-[13px]">
          {painting.artist.name}
        </span>
      </div>
      <fieldset className="flex gap-6">
        <button onClick={() => router.push(painting.nav.prev)}>
          <Image src={BackIcon} alt="" className="h-4 w-auto md:h-6" />
        </button>
        <button onClick={() => router.push(painting.nav.next)}>
          <Image src={NextIcon} alt="" className="h-4 w-auto md:h-6" />
        </button>
      </fieldset>
    </div>
  );
}
