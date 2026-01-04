import { Box } from "@/components/ui/box";
import { CarouselSlide } from "@/features/carousel/types/carousel-slide";
import { FC } from "react";

interface DisplayProps {
  slide: CarouselSlide;
}

export const CarouselDisplay: FC<DisplayProps> = ({slide}) => (
  <div className="transform-gpu flex-none w-full min-w-0 pl-4 aspect-video">
    <Box className="w-full h-full">
      {slide.type === 'image' && (
        <img
          src={slide.url}
          className="h-full w-full object-contain"
          alt={"slide"}/>
      )}

      {slide.type === 'video' && (
        <video
          src={slide.url}
          controls
          className="h-full w-full object-contain"
        />
      )}

      {slide.type === 'youtube' && (
        <iframe
          src={slide.url}
          className="h-full w-full"
          title="YouTube video player"
          allow='autoplay; encrypted-media'
          allowFullScreen
        />
      )}
    </Box>
  </div>
);