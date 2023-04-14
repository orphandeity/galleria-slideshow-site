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
  // use appropriate image sizes based on media query
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
    <div className="m-6 flex flex-col items-center gap-[6.125rem] md:m-10 md:gap-[8.6875rem]">
      <div className="relative md:self-start">
        <div className="relative">
          <Image
            priority
            src={heroImage}
            alt={`${painting.name} by ${painting.artist.name}`}
            width={heroWidth}
            height={heroHeight}
            className="h-[280px] w-[327px] md:h-[560px] md:w-[475px]"
          />
          <button className="absolute left-4 top-4 flex w-[9.5rem] items-center justify-between bg-black/75 px-4 py-[0.875rem] text-[0.625rem] uppercase leading-link-2 tracking-[2.14px] text-white md:top-[31.5rem]">
            <Image src={"/icon-view-image.svg"} alt="" width={12} height={12} />
            <span>view image</span>
          </button>
        </div>

        <div className="absolute -bottom-28 flex flex-col md:left-1/2 md:top-0">
          <div className="flex w-[280px] flex-col gap-2 bg-white p-6 md:w-[445px] md:gap-6 md:pb-16 md:pl-16 md:pr-0 md:pt-0">
            <h1 className="text-heading-2 font-bold leading-heading-2 md:text-heading-1 md:leading-heading-1">
              {painting.name}
            </h1>
            <p className="text-subhead-1 text-_gray-300">
              {painting.artist.name}
            </p>
          </div>
          <Image
            src={painting.artist.image}
            alt=""
            width={128}
            height={128}
            className="ml-4 h-16 w-16 md:m-0 md:mr-12 md:h-32 md:w-32 md:self-end"
          />
        </div>
      </div>

      <div className="flex flex-col text-_gray-300 md:relative">
        <span className="self-end text-[6.25rem] font-bold leading-[6.25rem] text-_gray-100 md:absolute md:-left-1/4 md:top-0 md:-translate-y-1/2 md:text-display md:leading-display">
          {painting.year}
        </span>
        <p className="max-w-md -translate-y-[1.625rem] text-sm font-bold leading-7 md:translate-y-0">
          {painting.description}
        </p>
        <a
          href={painting.source}
          className="mt-[4.25rem] text-link-2 font-bold uppercase tracking-link-2"
        >
          go to source
        </a>
      </div>
    </div>
  );
}
