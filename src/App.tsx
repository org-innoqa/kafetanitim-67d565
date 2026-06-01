import React from 'react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';

const menuItems = [
  { name: 'Espresso', price: '45 TL', image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&q=80&w=400' },
  { name: 'Americano', price: '55 TL', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=400' },
  { name: 'Latte', price: '65 TL', image: 'https://images.unsplash.com/photo-1570968915860-54da5c3081b7?auto=format&fit=crop&q=80&w=400' },
  { name: 'Cappuccino', price: '65 TL', image: 'https://images.unsplash.com/photo-1534778101976-62847bb82c01?auto=format&fit=crop&q=80&w=400' },
  { name: 'Filtre Kahve', price: '50 TL', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=400' },
  { name: 'Ev Yapımı Kek', price: '70 TL', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400' },
];

export default function App() {
  return (
    <div className="min-h-screen p-4 md:p-8 max-w-5xl mx-auto">
      <header className="text-center py-12">
        <h1 className="text-4xl font-light tracking-widest mb-4">MODERN KAFE</h1>
        <p className="text-stone-500">Taze kahve, huzurlu ortam.</p>
      </header>

      <section className="mb-16">
        <h2 className="text-2xl font-light mb-8 border-b pb-2">Menü</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4 flex justify-between items-center">
                <span className="text-lg font-medium">{item.name}</span>
                <span className="text-stone-600">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-sm border border-stone-100">
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