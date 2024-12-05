import React from 'react';
import { Menu, X, TableProperties } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <TableProperties className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Florya Tabela İmalat</span>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600">Ana Sayfa</a>
            <a href="#gallery" className="text-gray-600 hover:text-blue-600">Galeri</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">İletişim</a>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-600 hover:text-blue-600">Ana Sayfa</a>
              <a href="#gallery" className="text-gray-600 hover:text-blue-600">Galeri</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">İletişim</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}