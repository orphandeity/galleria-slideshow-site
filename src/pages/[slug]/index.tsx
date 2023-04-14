import type { GetStaticPaths, GetStaticProps } from "next";
import data from "@/lib/data.json";
import Image from "next/image";
import useMediaQuery from "@/lib/useMediaQuery";

export const getStaticPaths: GetStaticPaths = () => {
  const paths = data.map((painting) => ({
    params: { slug: painting.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = (context) => {
  const slug = context.params?.slug;
  console.log(slug);

  const [painting] = data.filter((d) => d.slug === slug);

  return {
    props: {
      painting,
    },
  };
};

export default function DetailsPage({ painting }: DetailsPageProps) {
  const tablet = useMediaQuery("(min-width: 768px)");

  const heroImage = tablet
    ? painting.images.hero.large.image
    : painting.images.hero.small.image;

  const heroWidth = tablet
    ? painting.images.hero.large.size.width / 2
    : painting.images.hero.small.size.width;

  const heroHeight = tablet
    ? painting.images.hero.large.size.height / 2
    : painting.images.hero.small.size.height;

  return (
    <div className="m-6 flex flex-col items-center">
      <div className="relative">
        <Image
          src={heroImage}
          alt=""
          width={heroWidth}
          height={heroHeight}
          className="h-[280px] w-[327px]"
        />

        <div className="absolute -bottom-28">
          <div className="flex w-[280px] flex-col gap-2 bg-white p-6 md:w-[445px] md:gap-6 md:px-16 md:pt-0">
            <h1 className="text-heading-2 font-bold leading-heading-2 md:text-heading-1 md:leading-heading-1">
              {painting.name}
            </h1>
            <p className="text-subhead-2 text-_gray-300">
              {painting.artist.name}
            </p>
          </div>
          <Image
            src={painting.artist.image}
            alt=""
            width={128}
            height={128}
            className="h-16 w-16 translate-x-5 md:h-32 md:w-32"
          />
        </div>
      </div>

      <div className="mt-[98px] flex flex-col text-_gray-300">
        <span className="self-end text-[100px] leading-[100px] text-_gray-100 md:text-display md:leading-display">
          {painting.year}
        </span>
        <p className="-translate-y-6 text-sm font-bold leading-7">
          {painting.description}
        </p>
        <a
          href={painting.source}
          className="mt-[68px] text-link-2 font-bold uppercase tracking-link-2"
        >
          go to source
        </a>
      </div>
    </div>
  );
}
