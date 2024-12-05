import React, { useState } from 'react';
import { X, Grid } from 'lucide-react';
import ImageViewer from './ImageViewer';

interface GalleryModalProps {
  images: string[];
  title: string;
  onClose: () => void;
}

export default function GalleryModal({ images, title, onClose }: GalleryModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'grid' | 'single'>('grid');

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="w-full h-full max-w-7xl mx-auto p-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg h-full flex flex-col">
          <div className="p-4 flex justify-between items-center border-b border-white/20">
            <div className="flex items-center space-x-4">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <button
                onClick={() => setViewMode(viewMode === 'grid' ? 'single' : 'grid')}
                className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
                aria-label="Toggle view mode"
              >
                <Grid className="h-5 w-5" />
              </button>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-video cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setViewMode('single');
                    }}
                  >
                    <img
                      src={image}
                      alt={`${title} ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <ImageViewer
                image={images[currentImageIndex]}
                onNext={handleNext}
                onPrev={handlePrev}
                hasNext={currentImageIndex < images.length - 1}
                hasPrev={currentImageIndex > 0}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}