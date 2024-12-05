import React from 'react';
import { TableProperties } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <TableProperties className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Tabela İmalat</span>
            </div>
            <p className="text-gray-400">
              20 yılı aşkın tecrübemizle Florya, Sefaköy ve Şenlikköy bölgelerinde profesyonel
              tabela imalat ve montaj hizmetleri sunuyoruz.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hizmet Bölgelerimiz</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Florya Tabela İmalat ve Montaj</li>
              <li>Sefaköy Tabela İmalat ve Montaj</li>
              <li>Şenlikköy Tabela İmalat ve Montaj</li>
              <li>İstanbul Tabela Hizmetleri</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Modern Işıklı Tabela</li>
              <li>Kutu Harf Tabela</li>
              <li>LED Tabela</li>
              <li>Totem Tabela</li>
              <li>Dijital Baskı</li>
              <li>Araç Giydirme</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Tabela İmalat. Tüm hakları saklıdır. | Florya, Sefaköy ve Şenlikköy'ün güvenilir tabelacısı
          </p>
        </div>
      </div>
    </footer>
  );
}