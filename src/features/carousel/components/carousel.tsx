"use client";
import { Box } from "@/components/ui/box";
import { CarouselDisplay } from "@/features/carousel/components/carousel-display";
import { CarouselThumbnail } from "@/features/carousel/components/carousel-thumbnail";
import { CarouselSlide } from "@/features/carousel/types/carousel-slide";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { FC, useCallback, useEffect, useState } from "react";

interface CarouselProps {
  slides: CarouselSlide[];
  options?: EmblaOptionsType
}

export const Carousel: FC<CarouselProps> = (props) => {
  const { slides, options } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  })

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()

    emblaMainApi.on('select', onSelect).on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div className="flex flex-col gap-2">
      <div className="overflow-hidden" ref={emblaMainRef}>
        <div className="flex touch-pan-y touch-pinch-zoom -ml-4">
          {slides.map((slide, index) => (
            <CarouselDisplay slide={slide} key={`slide_${index}`} />
          ))}
        </div>
      </div>

      {
        slides.length > 1 &&
          <Box className="w-full py-2">
              <div className="relative w-full overflow-hidden py-2 px-2 -ml-2" ref={emblaThumbsRef}>
                  <div className="flex flex-row">
                    {slides.map((slide, index) => (
                      <CarouselThumbnail
                        key={index}
                        onClick={() => onThumbClick(index)}
                        selected={index === selectedIndex}
                        slide={slide}
                      />
                    ))}
                  </div>
              </div>
          </Box>
      }
    </div>
  );
}