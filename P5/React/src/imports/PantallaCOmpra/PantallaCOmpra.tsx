import { useNavigate } from 'react-router';
import { CreditCard } from 'lucide-react';
import Header from '../../app/components/Header';
import Footer from '../../app/components/Footer';

export default function PantallaCOmpra() {
  const navigate = useNavigate();

  const handleComprar = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Compra realizada con éxito!');
    navigate('/');
  };

  return (
    <div className="bg-white min-h-screen flex flex-col" data-name="Pantalla COmpra">
      <Header />
      <div className="flex-1">

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-[72px] py-[60px] pt-[140px]">
        <h1 className="font-['Merriweather:Regular',sans-serif] text-[48px] text-black mb-12 text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
          Finalizar Compra
        </h1>
        <div className="grid grid-cols-2 gap-[80px]">
          {/* Producto Seleccionado */}
          <div>
            <h2 className="font-['Merriweather:Regular',sans-serif] text-[36px] text-black mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
              Tu Pedido
            </h2>
            <div className="bg-[#e9c46a] rounded-[10px] p-8">
              <h3 className="font-['Merriweather:Regular',sans-serif] text-[28px] text-[#51362a] mb-4" style={{ fontVariationSettings: "'wdth' 100" }}>
                Café Premium
              </h3>
              <p className="font-['Inter:Regular',sans-serif] text-[16px] text-[#51362a] mb-6">
                Selección de nuestros mejores cafés de origen único
              </p>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-['Inter:Regular',sans-serif] text-[18px] text-[#51362a]">Cantidad:</span>
                  <select className="bg-white rounded-[8px] px-4 py-2 text-[18px] border-2 border-[#51362a]">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>

                <div className="border-t-2 border-[#51362a] pt-4 mt-4">
                  <div className="flex justify-between items-center text-[24px]">
                    <span className="font-['Merriweather:Regular',sans-serif] text-[#51362a]" style={{ fontVariationSettings: "'wdth' 100" }}>Total:</span>
                    <span className="font-['Merriweather:Regular',sans-serif] text-[#51362a]" style={{ fontVariationSettings: "'wdth' 100" }}>4.50€</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de Compra */}
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