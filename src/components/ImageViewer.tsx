import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageViewerProps {
  image: string;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export default function ImageViewer({ image, onNext, onPrev, hasNext, hasPrev }: ImageViewerProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <img
        src={image}
        alt=""
        className="max-w-full max-h-[80vh] object-contain"
      />
      
      {hasPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
      )}
      
      {hasNext && (
        <button
          onClick={onNext}
          className="absolute right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      )}
    </div>
  );
}