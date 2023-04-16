import { createContext, useState } from "react";

type SlideshowContextType = {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SlideshowContext = createContext<SlideshowContextType | null>(
  null
);

export const SlideshowContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <SlideshowContext.Provider value={{ isPlaying, setIsPlaying }}>
      {children}
    </SlideshowContext.Provider>
  );
};

export default SlideshowContextProvider;
