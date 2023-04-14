import styles from "@/styles/gallery.module.css";
import useMediaQuery from "@/lib/useMediaQuery";
import { MasonryDesktop } from "./masonry/desktop";
import { MasonryTablet } from "./masonry/tablet";
import Thumbnail from "./thumbnail";

export default function Gallery({ paintings }: GalleryProps) {
  const tablet = useMediaQuery("(min-width: 768px)");
  const desktop = useMediaQuery("(min-width: 1440px)");

  const items = paintings.map((painting) => (
    <li key={painting.name}>
      <Thumbnail painting={painting} />
    </li>
  ));

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
