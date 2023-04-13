import Image from "next/image";
import styles from "@/styles/thumbnail.module.css";

interface ThumbnailProps {
  painting: Painting;
}

export default function Thumbnail({ painting }: ThumbnailProps) {
  return (
    <figure key={painting.name} className={styles.figure}>
      <Image
        src={painting.images.thumbnail.image}
        alt={`"${painting.name}" by ${painting.artist.name}`}
        width={painting.images.thumbnail.size.width}
        height={painting.images.thumbnail.size.height}
      />
      <figcaption>
        <p className="text-heading-2">{painting.name}</p>
        <p className="text-subhead-2">{painting.artist.name}</p>
      </figcaption>
    </figure>
  );
}
