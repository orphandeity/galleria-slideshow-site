type ImageType = {
  image: string;
  size: {
    width: number;
    height: number;
  };
};

interface Artist {
  image: string;
  name: string;
}

interface Images {
  thumbnail: ImageType;
  hero: {
    small: ImageType;
    large: ImageType;
  };
  gallery: ImageType;
}

interface Painting {
  name: string;
  year: string;
  description: string;
  source: string;
  artist: Artist;
  images: Images;
  slug: string;
  nav: {
    slug: string;
    next?: string;
    prev?: string;
  };
}

// page & component prop types
interface HomePageProps {
  data: Painting[];
}

interface GalleryProps {
  paintings: Painting[];
}

interface MasonryProps {
  data: Painting[];
}

interface DetailsPageProps {
  painting: Painting;
  paintingIndex: string[];
}

interface ModalProps {
  painting: Painting;
}

interface SlideshowProps {
  painting: Painting;
  paintingIndex: string[];
}
