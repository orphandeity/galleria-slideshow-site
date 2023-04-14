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
}
