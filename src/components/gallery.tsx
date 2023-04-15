import styles from "@/styles/gallery.module.css";
import { MasonryDesktop } from "./masonry/desktop";
import { MasonryTablet } from "./masonry/tablet";
import useMediaQuery from "@/lib/useMediaQuery";
import Thumbnail from "./thumbnail";
import { useEffect, useState } from "react";

export default function Gallery({ paintings }: GalleryProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const tablet = useMediaQuery("(min-width: 768px)");
  const desktop = useMediaQuery("(min-width: 1440px)");

  const items = paintings.map((painting) => (
    <li key={painting.name}>
      <Thumbnail painting={painting} />
    </li>
  ));

  // return null on server
  if (!isMounted) return null;

  return (
    <div className="grid place-content-center">
      {desktop ? (
        <MasonryDesktop data={paintings} />
      ) : tablet ? (
        <MasonryTablet data={paintings} />
      ) : (
        <ul className={styles.phone}>{items}</ul>
      )}
    </div>
  );
}
