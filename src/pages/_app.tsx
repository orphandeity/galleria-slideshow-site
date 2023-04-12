import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { Libre_Baskerville } from "next/font/google";
import Layout from "@/components/layout";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${libreBaskerville.variable} font-serif`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
