import styles from "@/styles/gallery.module.css";
import { MasonryColumn } from "./column";

interface MasonryDesktopProps {
  data: Painting[];
}

export function MasonryDesktop({ data }: MasonryDesktopProps) {
  /**
   *  In order to achieve a natural looking masonry layout
   *  Divide the content into columns represented by empty arrays and
   *  loop through the data, pushing one item into each array as you
   *  cycle through them.
   */
  let desktopColumn1: Painting[] = [];
  let desktopColumn2: Painting[] = [];
  let desktopColumn3: Painting[] = [];
  let desktopColumn4: Painting[] = [];

  data.forEach((entry: Painting, index: number) => {
    switch (index + 1) {
      case 1:
        //row 1 pos 1
        desktopColumn1.push(entry);
        break;
      case 2:
        //row 2 pos 1
        desktopColumn2.push(entry);
        break;
      case 3:
        //row 3 pos 1
        desktopColumn3.push(entry);
        break;
      case 4:
        //row 4 pos 1
        desktopColumn4.push(entry);
        break;
      case 5:
        //row 1 pos 2
        desktopColumn1.push(entry);
        break;

      case 6:
        //row 2 pos 2
        desktopColumn2.push(entry);
        break;
      case 7:
        //row 3 pos 2
        desktopColumn3.push(entry);
        break;
      case 8:
        //row 4 pos 2
        desktopColumn4.push(entry);
        break;
      case 9:
        //row 1 pos 3
        desktopColumn1.push(entry);
        break;
      case 10:
        //row 2 pos 3
        desktopColumn2.push(entry);
        break;
      case 11:
        // row 4 pos 3
        desktopColumn4.push(entry);
        break;
      case 12:
        //row 1 pos 4
        desktopColumn1.push(entry);
        break;
      case 13:
        // row 2 pos 4
        desktopColumn2.push(entry);
        break;
      case 14:
        //row 3 pos 3
        desktopColumn3.push(entry);
        break;
      case 15:
        desktopColumn4.push(entry);
        break;
      default:
        break;
    }
  });

  return (
    <div className={styles.desktop}>
      <MasonryColumn columnArray={desktopColumn1} />
      <MasonryColumn columnArray={desktopColumn2} />
      <MasonryColumn columnArray={desktopColumn3} />
      <MasonryColumn columnArray={desktopColumn4} />
    </div>
  );
}
