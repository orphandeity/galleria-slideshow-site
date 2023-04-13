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
  hero: Record<string, ImageType>;
  gallery: ImageType;
}

interface Painting {
  name: string;
  year: string;
  description: string;
  source: string;
  artist: Artist;
  images: Images;
}

// page & component prop types
interface HomePageProps {
  data: Painting[];
}

interface GalleryProps {
  paintings: Painting[];
}
