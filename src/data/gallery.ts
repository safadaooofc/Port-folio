export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category?: string;
}

/** Placeholders até Kiover adicionar fotos em public/gallery/ */
export const galleryItems: GalleryItem[] = [
  {
    id: 'placeholder-1',
    src: '/gallery/placeholder.svg',
    alt: 'Capital do MT RP — screenshot em breve',
    caption: 'Capital do MT RP',
    category: 'roblox',
  },
  {
    id: 'placeholder-2',
    src: '/gallery/placeholder.svg',
    alt: 'EB Reuel — screenshot em breve',
    caption: 'Exército Brasileiro Reuel',
    category: 'roblox',
  },
  {
    id: 'placeholder-3',
    src: '/gallery/placeholder.svg',
    alt: 'Site Reuel — screenshot em breve',
    caption: 'Site Reuel',
    category: 'web',
  },
];
