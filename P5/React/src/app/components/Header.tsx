import { useNavigate, useLocation } from 'react-router';
import { ShoppingCart, Search } from 'lucide-react';
import { useState } from 'react';
import imgChatGptImage3May20261706571 from "../../imports/InicioHome/8b14e85faeb819665e72427ca7deda5fa5b6f1ae.png";
import { useCart } from '../context/CartContext';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const { getTotalItems } = useCart();

  const isActive = (path: string) => location.pathname === path;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/buscar?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="sticky bg-[#f4f1de] h-[99px] left-0 right-0 top-0 w-screen flex items-center justify-between px-[72px] z-10">
      {/* Logo y Nombre */}
      <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('/')}>
        <div className="size-[99px]">
          <div className="size-full overflow-hidden pointer-events-none">
            <img alt="Logo" className="max-w-none size-full" src={imgChatGptImage3May20261706571} />
          </div>
        </div>
        <h1 className="font-['Merriweather:Regular',sans-serif] font-bold text-[24px] text-[#51362a]" style={{ fontVariationSettings: "'wdth' 100" }}>
          GRANÁ EN GRANO
        </h1>
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex-1 max-w-[400px] mx-8">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar cafés..."
            className="w-full rounded-[8px] px-4 py-2 pr-10 text-[16px] border-2 border-[#51362a] focus:border-[#e07a5f] outline-none transition-colors font-['Inter:Regular',sans-serif]"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-[#51362a] hover:text-[#e07a5f] transition-colors"
          >
            <Search size={20} />
          </button>
        </div>
      </form>

      {/* Navigation */}
      <nav className="flex items-center gap-8">
        <button
          onClick={() => navigate('/tienda')}
          className={`font-['Merriweather:Regular',sans-serif] text-[20px] transition-colors cursor-pointer ${
            isActive('/tienda')
              ? 'text-[#e07a5f]'
              : 'text-black hover:text-[#e07a5f]'
          }`}
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Tienda
        </button>
        <button
          onClick={() => navigate('/espacios')}
          className={`font-['Merriweather:Regular',sans-serif] text-[20px] transition-colors cursor-pointer ${
            isActive('/espacios')
              ? 'text-[#e07a5f]'
              : 'text-black hover:text-[#e07a5f]'
          }`}
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Espacios
        </button>
        <button
          onClick={() => navigate('/nosotros')}
          className={`font-['Merriweather:Regular',sans-serif] text-[20px] transition-colors cursor-pointer ${
            isActive('/nosotros')
              ? 'text-[#e07a5f]'
              : 'text-black hover:text-[#e07a5f]'
          }`}
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Nosotros
        </button>
        <button
          onClick={() => navigate('/compra')}
          className="flex items-center gap-2 text-black hover:text-[#e07a5f] transition-colors cursor-pointer relative"
        >
          <div className="relative">
            <ShoppingCart size={28} />
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#e07a5f] text-white rounded-full w-5 h-5 flex items-center justify-center text-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold">
                {getTotalItems()}
              </span>
            )}
          </div>
          <span className="font-['Merriweather:Regular',sans-serif] text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Carrito
          </span>
        </button>
      </nav>
    </div>
  );
}
