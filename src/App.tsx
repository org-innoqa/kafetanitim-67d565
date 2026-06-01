import React from 'react';
import { Coffee, MapPin, Phone, MessageCircle } from 'lucide-react';

const menuItems = [
  { name: 'Espresso', price: '45 TL' },
  { name: 'Americano', price: '55 TL' },
  { name: 'Latte', price: '65 TL' },
  { name: 'Cappuccino', price: '65 TL' },
  { name: 'Filtre Kahve', price: '50 TL' },
  { name: 'Ev Yapımı Kek', price: '70 TL' },
];

export default function App() {
  return (
    <div className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto">
      <header className="text-center py-12">
        <h1 className="text-4xl font-light tracking-widest mb-4">MODERN KAFE</h1>
        <p className="text-stone-500">Taze kahve, huzurlu ortam.</p>
      </header>

      <section className="mb-16">
        <h2 className="text-2xl font-light mb-8 border-b pb-2">Menü</h2>
        <div className="grid gap-6">
          {menuItems.map((item, i) => (
            <div key={i} className="flex justify-between items-center border-b border-stone-200 pb-2">
              <span className="text-lg">{item.name}</span>
              <span className="font-medium">{item.price}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-sm">
        <h2 className="text-2xl font-light mb-8">İletişim</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <MapPin className="text-stone-400" />
            <span>Kadıköy, İstanbul</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-stone-400" />
            <span>0216 123 45 67</span>
          </div>
          <a 
            href="https://wa.me/905551234567" 
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full mt-4 hover:bg-green-700 transition"
          >
            <MessageCircle size={20} />
            WhatsApp'tan Bize Yazın
          </a>
        </div>
      </section>

      <footer className="text-center py-12 text-stone-400 text-sm">
        © 2024 Modern Kafe. Tüm hakları saklıdır.
      </footer>
    </div>
  );
}