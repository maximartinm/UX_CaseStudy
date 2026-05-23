import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import heroImage from "../../imports/image-1.png";
import ZonaCeroRuido from "../../imports/Group4/Group4";
import ParkingSeguro from "../../imports/Group2/Group2";
import TakeawayDeportivo from "../../imports/Group2-1/Group2";
import Terraza from "../../imports/Group40/Group40";
import { useCart } from "../context/CartContext";
import { Check } from "lucide-react";

export default function InicioHome() {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

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

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />

      <div className="flex-1">
        {/* Hero Image */}
        <div className="relative h-[471px] mx-[72px] mt-[72px]">
          <img
            src={heroImage}
            alt="Café principal"
            className="w-full h-full object-cover rounded-[8px]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="font-['Merriweather:Bold_Italic',sans-serif] font-bold italic text-[60px] text-white text-center max-w-[700px] px-4"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Tradición en cada grano, energía para tu día
            </h1>
          </div>
        </div>

        {/* Barra de información */}
        <div className="bg-[#f4f1de] h-[124px] mx-[72px] mt-[90px] rounded-[16px] flex items-center justify-around px-[60px]">
          {/* WiFi */}
          <div className="flex items-center gap-4">
            <svg
              className="size-[40px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                stroke="black"
              />
            </svg>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] text-black">
              WiFi: Alta Velocidad
            </p>
          </div>

          {/* Enchufes */}
          <div className="flex items-center gap-4">
            <svg
              className="size-[40px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
                stroke="black"
              />
            </svg>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] text-black">
              Enchufes: Disponibles
            </p>
          </div>

          {/* Ocupación */}
          <div className="flex items-center gap-4">
            <div className="size-[43px] bg-[#4CAF50] rounded-full flex items-center justify-center">
              <svg
                className="size-[24px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] text-black">
              Ocupación Actual: 65%
            </p>
          </div>
        </div>

        {/* Nuestros Espacios */}
        <div className="mx-[72px] mt-[100px]">
          <h2
            className="font-['Merriweather:Regular',sans-serif] text-[48px] text-black text-center mb-[50px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Nuestros Espacios
          </h2>

          <div className="grid grid-cols-4 gap-[60px]">
            {/* Zona Cero Ruido */}
            <div className="h-[448px]">
              <ZonaCeroRuido />
            </div>

            {/* Parking Seguro */}
            <div className="h-[448px]">
              <ParkingSeguro />
            </div>

            {/* Terraza */}
            <div className="h-[448px]">
              <Terraza />
            </div>

            {/* Take-away Deportivo */}
            <div className="h-[448px]">
              <TakeawayDeportivo />
            </div>
          </div>
        </div>

        {/* Tu dosis exacta de energía */}
        <div className="mx-[72px] mt-[100px]">
          <h2
            className="font-['Merriweather:Regular',sans-serif] text-[48px] text-black text-center mb-[50px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Tu dosis exacta de energía
          </h2>

          <div className="grid grid-cols-4 gap-[40px] mb-[100px]">
            {/* Café 1 - Etiopía */}
            <div className="bg-[#e9c46a] rounded-[10px] p-6 h-[400px] flex flex-col">
              <div className="bg-[#51362a] rounded-[10px] px-4 py-2 mb-4 text-center">
                <p className="font-['Inter:Regular',sans-serif] text-[24px] text-white">
                  "Novedad"
                </p>
              </div>
              <h3
                className="font-['Merriweather:Regular',sans-serif] text-[28px] text-[#51362a] mb-3"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Origen Etiopía Yirgacheffe
              </h3>
              <p className="font-['Inter:Regular',sans-serif] text-[15px] text-[#51362a] mb-auto">
                Tueste ligero. Notas a jazmín, lima y bergamota.
                Un café elegante y floral.
              </p>
              <button
                onClick={() => handleAñadirClick({ id: 'etiopia', name: 'Origen Etiopía Yirgacheffe', price: 4.50, tag: 'Novedad' })}
                className="bg-white rounded-[10px] py-3 font-['Inter:Regular',sans-serif] text-[24px] text-black hover:bg-[#F4F1DE] transition-colors cursor-pointer"
              >
                añadir
              </button>
            </div>

            {/* Café 2 - Colombia */}
            <div className="bg-[rgba(81,54,42,0.87)] rounded-[10px] p-6 h-[400px] flex flex-col">
              <div className="bg-[#f4f1de] rounded-[10px] px-4 py-2 mb-4 text-center">
                <p className="font-['Inter:Regular',sans-serif] text-[24px] text-black">
                  "Clásico"
                </p>
              </div>
              <h3
                className="font-['Merriweather:Regular',sans-serif] text-[28px] text-white mb-3"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Finca La Colombia
              </h3>
              <p className="font-['Inter:Regular',sans-serif] text-[15px] text-white mb-auto">
                Tueste medio. Notas a caramelo, chocolate con
                leche y manzana roja. Acogedor.
              </p>
              <button
                onClick={() => handleAñadirClick({ id: 'colombia', name: 'Finca La Colombia', price: 4.50, tag: 'Clásico' })}
                className="bg-white rounded-[10px] py-3 font-['Inter:Regular',sans-serif] text-[24px] text-black hover:bg-[#F4F1DE] transition-colors cursor-pointer"
              >
                añadir
              </button>
            </div>

            {/* Café 3 - Espresso */}
            <div className="bg-[#e07a5f] rounded-[10px] p-6 h-[400px] flex flex-col">
              <div className="bg-[#f4f1de] rounded-[10px] px-4 py-2 mb-4 text-center">
                <p className="font-['Inter:Regular',sans-serif] text-[24px] text-black">
                  "Pre-entreno"
                </p>
              </div>
              <h3
                className="font-['Merriweather:Regular',sans-serif] text-[28px] text-white mb-3"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Espresso "Doble Potencia"
              </h3>
              <p className="font-['Inter:Regular',sans-serif] text-[15px] text-white mb-auto">
                Blend Robusta/Arábica. Alta concentración de
                cafeína (150mg) para picos de esfuerzo.
              </p>
              <button
                onClick={() => handleAñadirClick({ id: 'espresso', name: 'Espresso "Doble Potencia"', price: 3.50, tag: 'Pre-entreno' })}
                className="bg-white rounded-[10px] py-3 font-['Inter:Regular',sans-serif] text-[24px] text-black hover:bg-[#F4F1DE] transition-colors cursor-pointer"
              >
                añadir
              </button>
            </div>

            {/* Café 4 - Nitro */}
            <div className="bg-[#e07a5f] rounded-[10px] p-6 h-[400px] flex flex-col">
              <div className="bg-[#f4f1de] rounded-[10px] px-4 py-2 mb-4 text-center">
                <p className="font-['Inter:Regular',sans-serif] text-[24px] text-black">
                  "Resistencia"
                </p>
              </div>
              <h3
                className="font-['Merriweather:Regular',sans-serif] text-[28px] text-white mb-3"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Nitro Cold Brew
              </h3>
              <p className="font-['Inter:Regular',sans-serif] text-[15px] text-white mb-auto">
                Infusionado en frío 24h. Cero acidez para tu
                estómago durante las rutas largas.
              </p>
              <button
                onClick={() => handleAñadirClick({ id: 'nitro', name: 'Nitro Cold Brew', price: 4.00, tag: 'Resistencia' })}
                className="bg-white rounded-[10px] py-3 font-['Inter:Regular',sans-serif] text-[24px] text-black hover:bg-[#F4F1DE] transition-colors cursor-pointer"
              >
                añadir
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />

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