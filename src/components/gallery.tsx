import { MasonryDesktop } from "./masonry/desktop";

export default function Gallery({ paintings }: GalleryProps) {
  return (
    <div className="grid place-content-center">
      <MasonryDesktop data={paintings} />
    </div>
  );
}
