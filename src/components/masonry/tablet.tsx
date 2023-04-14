import styles from "@/styles/gallery.module.css";
import { MasonryColumn } from "./column";

export function MasonryTablet({ data }: MasonryProps) {
  /**
   *  In order to achieve a natural looking masonry layout
   *  Divide the content into columns represented by empty arrays and
   *  loop through the data, pushing one item into each array as you
   *  cycle through them.
   */
  let tabletColumn1: Painting[] = [];
  let tabletColumn2: Painting[] = [];

  data.forEach((entry, index) => {
    switch (index + 1) {
      case 1:
        //row 1 pos 1
        tabletColumn1.push(entry);
        break;
      case 2:
        //row 2 pos 1
        tabletColumn2.push(entry);
        break;
      case 3:
        //row 1 pos 2
        tabletColumn1.push(entry);
        break;
      case 4:
        //row 2 pos 2
        tabletColumn2.push(entry);
        break;
      case 5:
        //row 1 pos 3
        tabletColumn1.push(entry);
        break;
      case 6:
        //row 2 pos 3
        tabletColumn2.push(entry);
        break;
      case 7:
        //row 1 pos 4
        tabletColumn1.push(entry);
        break;
      case 8:
        //row 2 pos 4
        tabletColumn2.push(entry);
        break;
      case 9:
        //row 1 pos 5
        tabletColumn1.push(entry);
        break;
      case 10:
        //row 2 pos 5
        tabletColumn2.push(entry);
        break;
      case 11:
        //row 1 pos 6
        tabletColumn2.push(entry);
        break;
      case 12:
        //row 2 pos 6
        tabletColumn1.push(entry);
        break;
      case 13:
        //row 1 pos 7
        tabletColumn2.push(entry);
        break;
      case 14:
        //row 2 pos 7
        tabletColumn1.push(entry);
        break;
      case 15:
        //row 1 pos 8
        tabletColumn2.push(entry);
        break;

      default:
        break;
    }
  });

  return (
    <div className={styles.tablet}>
      <MasonryColumn columnArray={tabletColumn1} />
      <MasonryColumn columnArray={tabletColumn2} />
    </div>
  );
}
