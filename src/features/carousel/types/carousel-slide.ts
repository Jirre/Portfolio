export type MediaType = 'image' | 'video' | 'youtube';

export type CarouselSlide = {
  type: MediaType;
  url: string;
  thumbnailUrl: string;
}

export const createSlide = ({type, url}: {type: MediaType, url: string}) => ({
  type,
  url: type === 'youtube' ? `https://www.youtube.com/embed/${url}` : `/projects/${url}`,
  thumbnailUrl: type === 'youtube' ? `https://img.youtube.com/vi/${url}/0.jpg` : `/projects/${url}`
})