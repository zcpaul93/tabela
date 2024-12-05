export interface GalleryItem {
  id: number;
  title: string;
  thumbnail: string;
  images: string[];
  category: string;
}

export interface Category {
  id: number;
  name: string;
}