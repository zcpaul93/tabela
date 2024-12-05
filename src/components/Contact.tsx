import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const phoneNumber = "+905336223016"; // Replace with your actual phone number
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">İletişim</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Florya, Sefaköy ve Şenlikköy bölgelerinde tabela imalat ve montaj hizmetleri için
          bizimle iletişime geçin. Ücretsiz keşif ve fiyat teklifi sunuyoruz.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Bize Ulaşın</h3>
            <div className="flex items-center space-x-4">
              <Phone className="text-blue-600" />
              <a href={`tel:${phoneNumber}`} className="text-gray-600 hover:text-blue-600">
                {phoneNumber}
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-600" />
              <a href="mailto:info@tabelaimalat.com" className="text-gray-600 hover:text-blue-600">
                egereklam@hotmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-blue-600" />
              <span className="text-gray-600">
                Florya / Bakırköy, İstanbul
              </span>
            </div>
            <div className="space-y-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300"
              >
                <MessageCircle />
                <span>WhatsApp ile Mesaj Gönder</span>
              </a>
              <p className="text-sm text-gray-500">
                7/24 WhatsApp üzerinden bize ulaşabilirsiniz
              </p>
            </div>
          </div>
          
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1505.796351415439!2d28.78132205815884!3d40.99039869482565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x14caa3c2483d1ad9:0x59fec1a354e7530c!2zQ2VubmV0LCBFZ2UgUmVrbGFtIChUYWJlbGEpLCBZYXZ1eiBTZWxpbSBDZC4gNTEvQSwgMzQyOTAgS8O8w6fDvGvDp2VrbWVjZS_EsHN0YW5idWw!3m2!1d40.9903987!2d28.7824164!5e0!3m2!1str!2str!4v1516629370587"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tabela İmalat Konum"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}