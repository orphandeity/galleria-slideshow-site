import Gallery from "@/components/gallery";
import type { GetStaticProps } from "next";
import Head from "next/head";
import data from "@/lib/data.json";

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }: HomePageProps) {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Galleria Slideshow Site</title>
        <meta name="description" content="Frontend Mentor Challenge Project" />
        <link
          rel="shortcut icon"
          href="./favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
      </Head>
      <Gallery paintings={data} />
    </>
  );
}
