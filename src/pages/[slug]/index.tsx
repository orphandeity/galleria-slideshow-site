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
    <div>
      <div>
        <div className="flex flex-col gap-2 md:gap-6">
          <h1 className="text-heading-2 font-bold leading-heading-2 md:text-heading-1 md:leading-heading-1">
            {painting.name}
          </h1>
          <p className="text-subhead-2 text-_gray-300">
            {painting.artist.name}
          </p>
        </div>
        <Image src={heroImage} alt="" width={heroWidth} height={heroHeight} />
        <Image
          src={painting.artist.image}
          alt=""
          width={128}
          height={128}
          className="h-16 w-16 md:h-32 md:w-32"
        />
      </div>

      <div className="text-_gray-300">
        <span className="text-[100px] leading-[100px] text-_gray-100 md:text-display md:leading-display">
          {painting.year}
        </span>
        <p className="text-sm font-bold leading-7">{painting.description}</p>
        <a
          href={painting.source}
          className="text-link-2 font-bold uppercase tracking-link-2"
        >
          go to source
        </a>
      </div>
    </div>
  );
}
