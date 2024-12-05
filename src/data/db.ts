import { GalleryItem, Category } from '../types/gallery';

export const categories: Category[] = [
  { id: 1, name: 'Modern Işıklı Tabela' },
  { id: 2, name: 'Kutu Harf Tabela' },
  { id: 3, name: 'LED Tabela' },
  { id: 4, name: 'Totem Tabela' },
  { id: 5, name: 'Dijital Baskı' },
  { id: 6, name: 'Araç Giydirme' }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Modern Işıklı Tabela',
    category: 'Modern Işıklı Tabela',
    thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&q=80&w=800'
    ]
  },
  // ... (previous gallery items remain the same)
];