import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-12 bg-gradient-to-r from-blue-500 to-blue-700">
      <div className="container mx-auto px-6 py-20 text-center text-white">
        <h1 className="text-5xl font-bold mb-6">
          Florya, Sefaköy ve Şenlikköy'de Profesyonel Tabela İmalat
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl mb-4">
            İstanbul'un Florya, Sefaköy ve Şenlikköy bölgelerinde 30 yılı aşkın tecrübemizle
            kaliteli malzeme ve uzman işçilikle tabela imalat ve montaj hizmetleri sunuyoruz.
          </p>
          <p className="text-lg mb-8">
            Modern ışıklı tabela, kutu harf, LED tabela, totem tabela ve araç giydirme çözümlerimizle
            işletmenizin görünürlüğünü artırıyoruz.
          </p>
        </div>
        <div className="space-x-4">
          <a 
            href="#contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
          >
            Bizimle İletişime Geçin
          </a>
          <a 
            href="#gallery"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition duration-300"
          >
            Çalışmalarımızı İnceleyin
          </a>
        </div>
      </div>
    </section>
  );
}