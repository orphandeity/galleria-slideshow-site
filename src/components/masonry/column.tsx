import styles from "@/styles/gallery.module.css";
import Thumbnail from "../thumbnail";

interface MasonryColumnProps {
  columnArray: Painting[];
  handleItemSelect?: () => void;
}

export function MasonryColumn({
  columnArray,
  handleItemSelect,
}: MasonryColumnProps) {
  const paintings = columnArray.map((painting) => {
    return <Thumbnail key={painting.name} painting={painting} />;
  });

  return <div className={styles.column}>{paintings}</div>;
}
