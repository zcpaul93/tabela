import React, { useState } from 'react';
import GalleryModal from './GalleryModal';

const galleryItems = [
  {
    id: 1,
    title: 'Modern Işıklı Tabela',
    thumbnail: 'https://cennetabela.wordpress.com/wp-content/uploads/2018/01/led-c4b1c59fc4b1klc4b1-pleksiglas-kutu-harfli-tabela1.jpg',
    images: [
      'https://cennetabela.wordpress.com/wp-content/uploads/2018/01/led-c4b1c59fc4b1klc4b1-pleksi-kutu-harfli-tabela3.jpg',
      'https://cennetabela.wordpress.com/wp-content/uploads/2018/01/led-c4b1c59fc4b1klc4b1-pleksiglas-kutu-harfli-kompazit-tabela.jpg',
      'https://cennetabela.wordpress.com/wp-content/uploads/2018/01/led-c4b1c59fc4b1klc4b1-pleksi-kutu-harfli-tabela-1.jpg',
      'https://cennetabela.wordpress.com/wp-content/uploads/2018/01/led-c4b1c59fc4b1klc4b1-pleksiglas-kutu-harfli-tabela1.jpg'
    ]
  },
  {
    id: 2,
    title: 'Kutu Harf Tabela',
    thumbnail: 'https://cennetabela.wordpress.com/wp-content/uploads/2018/01/kompazit-panel-cephe-kaplama-1.jpg',
    images: [
      'https://cennetabela.wordpress.com/wp-content/uploads/2018/01/kompazit-panel-cephe-kaplama-1.jpg',
      'https://cennetabela.wordpress.com/wp-content/uploads/2018/01/kompazit-cephe-kaplamalc4b1-tabela.jpg',
      'https://cennetabela.wordpress.com/wp-content/uploads/2018/01/kompazit-cephe-kaplama.jpg',
      'https://cennetabela.wordpress.com/wp-content/uploads/2018/01/led-c4b1c59fc4b1klc4b1-pleksiglas-kutu-harf-tabela.jpg'
    ]
  },
  {
    id: 3,
    title: 'LED Tabela',
    thumbnail: 'https://cennetabela.wordpress.com/wp-content/uploads/2018/01/led1.jpg',
    images: [
      'https://cennetabela.wordpress.com/wp-content/uploads/2018/01/led2.jpg',
      'https://cennetabela.wordpress.com/wp-content/uploads/2018/01/led1.jpg',
    ]
  },
  {
    id: 4,
    title: 'Cephe Kaplama',
    thumbnail: 'https://cennetabela.wordpress.com/wp-content/uploads/2018/01/kompazit-panelli-cephe-kaplama-tabela.jpg',
    images: [
      'https://cennetabela.wordpress.com/wp-content/uploads/2018/01/kompazit-panelli-cephe-kaplama-tabela.jpg',
      'https://cennetabela.wordpress.com/wp-content/uploads/2018/01/kompazit-zeminli-paslanmaz-kutu-harf-tabela.jpg',
      'https://cennetabela.wordpress.com/wp-content/uploads/2018/01/kompazit-cephe-kaplamalc4b1-tabela.jpg',
    ]
  },
  {
    id: 5,
    title: 'Dijital Baskı',
    thumbnail: 'https://cennetabela.wordpress.com/wp-content/uploads/2018/01/folyo-baskc4b1-3.jpg',
    images: [
      'https://cennetabela.wordpress.com/wp-content/uploads/2018/01/folyo-baskc4b1-3.jpg',
      'https://cennetabela.wordpress.com/wp-content/uploads/2018/01/folyo-baski.jpg',
      'https://cennetabela.wordpress.com/wp-content/uploads/2018/01/vinil-tabela.jpg',
    ]
  },
  {
    id: 6,
    title: 'Kutu Harf',
    thumbnail: 'https://cennetabela.wordpress.com/wp-content/uploads/2018/01/led-c4b1c59fc4b1klc4b1-pleksi-kutu-harf-tabela.jpg',
    images: [
      'https://cennetabela.wordpress.com/wp-content/uploads/2018/01/fleli-bakc4b1r-paslanmaz-kutu-harf.jpg',
      'https://cennetabela.wordpress.com/wp-content/uploads/2018/01/fleli-paslanmaz-kutu-harf.jpg',
      'https://cennetabela.wordpress.com/wp-content/uploads/2018/01/led-c4b1c59fc4b1klc4b1-pleksi-harf.jpg',
      'https://cennetabela.wordpress.com/wp-content/uploads/2018/01/led-c4b1c59fc4b1klc4b1-pleksi-kutu-harf-tabela.jpg'
    ]
  }
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Çalışmalarımız</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mt-2">
                  {item.images.length} fotoğraf görüntüle
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <GalleryModal
          images={selectedItem.images}
          title={selectedItem.title}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>
  );
}