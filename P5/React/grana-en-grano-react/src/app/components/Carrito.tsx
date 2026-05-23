import { useState } from 'react';
import { useNavigate } from 'react-router';
import { CreditCard, Trash2 } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { useCart } from '../context/CartContext';

export default function Carrito() {
  const navigate = useNavigate();
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  const handleComprar = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Compra realizada con éxito!');
    clearCart();
    setShowCheckout(false);
    navigate('/');
  };

  if (showCheckout) {
    return (
      <div className="bg-white min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">
          <div className="max-w-[1200px] mx-auto px-[72px] py-[60px] pt-[140px]">
            <h1 className="font-['Merriweather:Regular',sans-serif] text-[48px] text-black mb-12 text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
              Finalizar Compra
            </h1>
            <div className="grid grid-cols-2 gap-[80px]">
              {/* Resumen del Pedido */}
              <div>
                <h2 className="font-['Merriweather:Regular',sans-serif] text-[36px] text-black mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Tu Pedido
                </h2>
                <div className="bg-[#f4f1de] rounded-[10px] p-8">
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#51362a]">
                            {item.name}
                          </p>
                          <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#51362a]">
                            Cantidad: {item.quantity}
                          </p>
                        </div>
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-[#51362a]">
                          {(item.price * item.quantity).toFixed(2)}€
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t-2 border-[#51362a] pt-4 mt-4">
                    <div className="flex justify-between items-center text-[24px]">
                      <span className="font-['Merriweather:Regular',sans-serif] text-[#51362a]" style={{ fontVariationSettings: "'wdth' 100" }}>Total:</span>
                      <span className="font-['Merriweather:Regular',sans-serif] text-[#51362a]" style={{ fontVariationSettings: "'wdth' 100" }}>{getTotalPrice().toFixed(2)}€</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulario de Pago */}
              <div>
                <h2 className="font-['Merriweather:Regular',sans-serif] text-[36px] text-black mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Datos de Pago
                </h2>
                <form onSubmit={handleComprar} className="space-y-6">
                  <div>
                    <label className="block font-['Inter:Regular',sans-serif] text-[16px] text-black mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-[8px] px-4 py-3 text-[16px] border-2 border-[#f4f1de] focus:border-[#e07a5f] outline-none transition-colors"
                      placeholder="Juan Pérez"
                    />
                  </div>

                  <div>
                    <label className="block font-['Inter:Regular',sans-serif] text-[16px] text-black mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-[8px] px-4 py-3 text-[16px] border-2 border-[#f4f1de] focus:border-[#e07a5f] outline-none transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block font-['Inter:Regular',sans-serif] text-[16px] text-black mb-2">
                      Número de Tarjeta
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-[8px] px-4 py-3 text-[16px] border-2 border-[#f4f1de] focus:border-[#e07a5f] outline-none transition-colors"
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-['Inter:Regular',sans-serif] text-[16px] text-black mb-2">
                        Fecha Expiración
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full rounded-[8px] px-4 py-3 text-[16px] border-2 border-[#f4f1de] focus:border-[#e07a5f] outline-none transition-colors"
                        placeholder="MM/AA"
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <label className="block font-['Inter:Regular',sans-serif] text-[16px] text-black mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full rounded-[8px] px-4 py-3 text-[16px] border-2 border-[#f4f1de] focus:border-[#e07a5f] outline-none transition-colors"
                        placeholder="123"
                        maxLength={3}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#e07a5f] text-white rounded-[8px] py-4 font-['Merriweather:Regular',sans-serif] text-[24px] hover:bg-[#d06850] transition-colors cursor-pointer flex items-center justify-center gap-3"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <CreditCard size={28} />
                    Confirmar Compra
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[120px]">
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <div className="max-w-[1200px] mx-auto px-[72px] py-[60px] pt-[140px]">
          <h1 className="font-['Merriweather:Regular',sans-serif] text-[48px] text-black mb-12 text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
            Tu Carrito
          </h1>

          {items.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-['Inter:Regular',sans-serif] text-[24px] text-gray-600 mb-8">
                Tu carrito está vacío
              </p>
              <button
                onClick={() => navigate('/tienda')}
                className="bg-[#e07a5f] text-white rounded-[8px] px-8 py-4 font-['Inter:Regular',sans-serif] text-[20px] hover:bg-[#d06850] transition-colors cursor-pointer"
              >
                Ver productos
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-6 mb-12">
                {items.map((item) => (
                  <div key={item.id} className="bg-[#f4f1de] rounded-[10px] p-8 flex items-center justify-between">
                    <div className="flex-1">
                      <div className="bg-[#51362a] rounded-[8px] px-4 py-1 mb-3 inline-block">
                        <p className="font-['Inter:Regular',sans-serif] text-[16px] text-white">
                          "{item.tag}"
                        </p>
                      </div>
                      <h3 className="font-['Merriweather:Regular',sans-serif] text-[28px] text-[#51362a] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {item.name}
                      </h3>
                      <p className="font-['Inter:Regular',sans-serif] text-[18px] text-[#51362a]">
                        {item.price.toFixed(2)}€
                      </p>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-4">
                        <label className="font-['Inter:Regular',sans-serif] text-[18px] text-[#51362a]">Cantidad:</label>
                        <select
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                          className="bg-white rounded-[8px] px-4 py-2 text-[18px] border-2 border-[#51362a]"
                        >
                          {[1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num}>{num}</option>
                          ))}
                        </select>
                      </div>

                      <p className="font-['Merriweather:Regular',sans-serif] text-[28px] text-[#51362a] min-w-[100px] text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {(item.price * item.quantity).toFixed(2)}€
                      </p>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="bg-[#e07a5f] text-white rounded-[8px] p-3 hover:bg-[#d06850] transition-colors cursor-pointer"
                      >
                        <Trash2 size={24} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#51362a] rounded-[10px] p-8 flex items-center justify-between mb-12">
                <h2 className="font-['Merriweather:Regular',sans-serif] text-[36px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Total:
                </h2>
                <p className="font-['Merriweather:Regular',sans-serif] text-[48px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {getTotalPrice().toFixed(2)}€
                </p>
              </div>

              <button
                onClick={() => setShowCheckout(true)}
                className="w-full bg-[#e07a5f] text-white rounded-[8px] py-6 font-['Merriweather:Regular',sans-serif] text-[32px] hover:bg-[#d06850] transition-colors cursor-pointer"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Confirmar Compra
              </button>
            </>
          )}
        </div>
      </div>

      <div className="mt-[120px]">
        <Footer />
      </div>
    </div>
  );
}
