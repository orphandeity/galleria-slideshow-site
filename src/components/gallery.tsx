import Image from "next/image";
import styles from "@/styles/gallery.module.css";
import Thumbnail from "./thumbnail";

export default function Gallery({ paintings }: GalleryProps) {
  // convert data to JSX elements
  const items = paintings.map((painting) => (
    <Thumbnail key={painting.name} painting={painting} />
  ));

  return <div className="flex flex-wrap">{items}</div>;
}
