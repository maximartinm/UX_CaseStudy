import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import { useCart } from '../context/CartContext';
import { Check } from 'lucide-react';

interface Coffee {
  id: string;
  name: string;
  price: number;
  tag: string;
  description: string;
  bgColor: string;
  tagBgColor: string;
  textColor: string;
}

export default function Tienda() {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [selectedFilter, setSelectedFilter] = useState<string>('Todos');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const coffees: Coffee[] = [
    {
      id: 'etiopia',
      name: 'Origen Etiopía Yirgacheffe',
      price: 4.50,
      tag: 'Novedad',
      description: 'Tueste ligero. Notas a jazmín, lima y bergamota. Un café elegante y floral.',
      bgColor: '#e9c46a',
      tagBgColor: '#51362a',
      textColor: '#51362a'
    },
    {
      id: 'colombia',
      name: 'Finca La Colombia',
      price: 4.50,
      tag: 'Clásico',
      description: 'Tueste medio. Notas a caramelo, chocolate con leche y manzana roja. Acogedor.',
      bgColor: 'rgba(81,54,42,0.87)',
      tagBgColor: '#f4f1de',
      textColor: 'white'
    },
    {
      id: 'espresso',
      name: 'Espresso "Doble Potencia"',
      price: 3.50,
      tag: 'Pre-entreno',
      description: 'Blend Robusta/Arábica. Alta concentración de cafeína (150mg) para picos de esfuerzo.',
      bgColor: '#e07a5f',
      tagBgColor: '#f4f1de',
      textColor: 'white'
    },
    {
      id: 'nitro',
      name: 'Nitro Cold Brew',
      price: 4.00,
      tag: 'Resistencia',
      description: 'Infusionado en frío 24h. Cero acidez para tu estómago durante las rutas largas.',
      bgColor: '#e07a5f',
      tagBgColor: '#f4f1de',
      textColor: 'white'
    }
  ];

  const handleAñadirClick = (cafe: { id: string; name: string; price: number; tag: string }) => {
    addItem(cafe);
    setToastMessage(`${cafe.name} añadido al carrito`);
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const filters = ['Todos', 'Novedad', 'Clásico', 'Deportistas'];

  const filteredCoffees = selectedFilter === 'Todos'
    ? coffees
    : selectedFilter === 'Deportistas'
    ? coffees.filter(coffee => coffee.tag === 'Pre-entreno' || coffee.tag === 'Resistencia')
    : coffees.filter(coffee => coffee.tag === selectedFilter);

  return (
    <div className="bg-white min-h-screen flex flex-col" data-name="Tienda">
      <Header />
      <div className="flex-1">

      {/* Hero Section */}
      <div className="pt-[150px] px-[72px] pb-[60px]">
        <h1 className="font-['Merriweather:Regular',sans-serif] text-[64px] text-black text-center mb-4" style={{ fontVariationSettings: "'wdth' 100" }}>
          Nuestra Selección de Cafés
        </h1>
        <p className="font-['Inter:Regular',sans-serif] text-[20px] text-center text-gray-600 max-w-[800px] mx-auto">
          Cafés de origen único, tostados artesanalmente para cada momento de tu día
        </p>
      </div>

      {/* Filters */}
      <div className="px-[72px] mb-[40px]">
        <div className="flex items-center gap-4 justify-center">
          <span className="font-['Merriweather:Regular',sans-serif] text-[20px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
            Filtrar por:
          </span>
          <div className="flex gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-2 rounded-[8px] font-['Inter:Regular',sans-serif] text-[16px] transition-colors cursor-pointer ${
                  selectedFilter === filter
                    ? 'bg-[#e07a5f] text-white'
                    : 'bg-[#f4f1de] text-black hover:bg-[#e9c46a]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-[72px] pb-[100px]">
        {filteredCoffees.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-['Inter:Regular',sans-serif] text-[24px] text-gray-600">
              No hay cafés disponibles en esta categoría
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-8">
            {filteredCoffees.map((coffee) => (
              <div key={coffee.id} className="relative">
                <div className="h-[450px] rounded-[10px] p-8 flex flex-col" style={{ backgroundColor: coffee.bgColor }}>
                  <div className="h-[60px] rounded-[10px] mb-6 flex items-center justify-center" style={{ backgroundColor: coffee.tagBgColor }}>
                    <p className="font-['Inter:Regular',sans-serif] text-[24px]" style={{ color: coffee.tag === 'Novedad' ? 'white' : 'black' }}>
                      "{coffee.tag}"
                    </p>
                  </div>

                  <h3 className="font-['Merriweather:Regular',sans-serif] text-[28px] mb-4" style={{ fontVariationSettings: "'wdth' 100", color: coffee.textColor }}>
                    {coffee.name}
                  </h3>

                  <p className="font-['Inter:Regular',sans-serif] text-[15px] mb-auto" style={{ color: coffee.textColor }}>
                    {coffee.description}
                  </p>

                  <button
                    onClick={() => handleAñadirClick({ id: coffee.id, name: coffee.name, price: coffee.price, tag: coffee.tag })}
                    className="bg-white h-[60px] rounded-[10px] font-['Inter:Regular',sans-serif] text-[24px] text-black hover:bg-[#F4F1DE] transition-colors cursor-pointer mt-4"
                  >
                    añadir
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      </div>

      <div className="mt-[120px]">
        <Footer />
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-8 right-8 bg-[#4CAF50] text-white rounded-[10px] px-6 py-4 shadow-lg flex items-center gap-3 animate-slide-up z-50">
          <div className="bg-white rounded-full p-1">
            <Check size={20} className="text-[#4CAF50]" />
          </div>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px]">
            {toastMessage}
          </p>
        </div>
      )}
    </div>
  );
}
