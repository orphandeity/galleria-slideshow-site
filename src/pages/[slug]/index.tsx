import type { GetStaticPaths, GetStaticProps } from "next";
import data from "@/lib/data.json";
import Image from "next/image";
import useMediaQuery from "@/lib/useMediaQuery";
import Modal from "@/components/modal";

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
    <div className="flex flex-col items-center gap-[6.125rem] p-6 md:mx-auto md:max-w-3xl md:gap-[8.6875rem] md:py-10 lg:mt-[6.25rem] lg:max-w-[1360px] lg:flex-row lg:gap-[410px] lg:p-0">
      <div className="relative md:self-start">
        <div className="relative h-[280px] w-[327px] md:h-[560px] md:w-[475px]">
          <Image
            priority
            src={heroImage}
            alt={`${painting.name} by ${painting.artist.name}`}
            fill
            placeholder="blur"
          />
          <Modal painting={painting} />
        </div>

        <div className="absolute -bottom-28 flex flex-col md:left-1/2 md:top-0 lg:left-[410px] lg:h-[560px]">
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
            className="ml-4 h-16 w-16 md:ml-0 md:mr-12 md:h-32 md:w-32 md:self-end lg:absolute lg:bottom-0 lg:left-0 lg:translate-x-3/4 lg:translate-y-1/2"
          />
        </div>
      </div>

      <div className="flex flex-col text-_gray-300 md:relative">
        <span className="self-end text-[6.25rem] font-bold leading-[6.25rem] text-_gray-100 md:absolute md:-left-1/4 md:top-0 md:-translate-x-4 md:-translate-y-1/2 md:text-display md:leading-display lg:static lg:translate-x-0 lg:translate-y-0">
          {painting.year}
        </span>

        <p className="max-w-md -translate-y-[1.625rem] text-sm font-bold leading-7 md:translate-y-0 lg:max-w-[350px] lg:-translate-x-2 lg:-translate-y-9">
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
