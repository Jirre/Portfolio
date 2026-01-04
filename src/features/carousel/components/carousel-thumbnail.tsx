import { Button } from "@/components/ui/buttons";
import { CarouselSlide } from "@/features/carousel/types/carousel-slide";
import { FC } from "react";
import { FaPlay } from "react-icons/fa";

interface ThumbnailProps {
  selected: boolean;
  slide: CarouselSlide;
  onClick: () => void;
}

export const CarouselThumbnail: FC<ThumbnailProps> = (props) => {
  const { selected, slide, onClick } = props;
  const displayThumb = slide.thumbnailUrl || slide.url;

  return (
    // This wrapper is crucial for Embla and Flexbox containment
    <div className="flex-none basis-[22%] min-w-0 pl-3 sm:basis-[15%]">
      <Button
        onClick={onClick}
        variant={selected ? 'highlight' : 'default'}
        // Remove fixed w-32, use w-full so it fills the basis defined above
        className="relative h-20 w-full overflow-hidden p-0"
      >
        <img
          src={displayThumb}
          className="h-full w-full object-cover"
          alt=""
        />
        {slide.type !== 'image' && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <FaPlay size={24} className="text-white" />
          </div>
        )}
      </Button>
    </div>
  );
}