import Header from './Header';
import Footer from './Footer';
import { ImageWithFallback } from './figma/ImageWithFallback';
import zonaEstudioImage from '../../imports/image-3.png';
import terrazaImage from '../../imports/image-4.png';

export default function Espacios() {
  return (
    <div className="bg-white min-h-screen flex flex-col" data-name="Espacios">
      <Header />
      <div className="flex-1">

      {/* Título de la Sección */}
      <div className="pt-[120px] pb-[80px]">
        <h1
          className="font-['Merriweather:Bold',sans-serif] font-bold text-[48px] text-[#51362a] text-center"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Nuestros Espacios
        </h1>
      </div>

      {/* Contenedor Principal */}
      <div className="max-w-[1272px] mx-auto px-[120px]">

        {/* Bloque 1 - "El Refugio" (Imagen Izquierda, Texto Derecha) */}
        <div className="flex items-center gap-[100px] mb-[100px]">
          {/* Imagen Izquierda */}
          <div className="flex-shrink-0">
            <div className="w-[560px] h-[420px] rounded-[16px] bg-[#f4f1de] overflow-hidden">
              <img
                src={zonaEstudioImage}
                alt="Zona de estudio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Texto Derecha */}
          <div className="w-[480px]">
            {/* Etiqueta */}
            <p className="font-['Inter:Bold',sans-serif] font-bold text-[14px] text-[#f26440] uppercase mb-[12px] tracking-wider">
              CONCENTRACIÓN
            </p>

            {/* Título */}
            <h2
              className="font-['Merriweather:Bold',sans-serif] font-bold text-[36px] text-[#51362a] mb-[24px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Tu refugio cero ruido
            </h2>

            {/* Párrafo */}
            <p className="font-['Inter:Regular',sans-serif] text-[18px] text-[#51362a] leading-[150%] mb-[32px]">
              Diseñamos zonas insonorizadas con luz regulable y sillas ergonómicas. Un entorno pensado exclusivamente para que rindas al máximo, sin distracciones.
            </p>

            {/* Botón */}
            <button className="w-[200px] h-[50px] border-2 border-[#51362a] rounded-[8px] font-['Inter:Regular',sans-serif] text-[16px] text-[#51362a] hover:bg-[#51362a] hover:text-white transition-colors cursor-pointer">
              Ver normativa de estudio
            </button>
          </div>
        </div>

        {/* Bloque 2 - "Terraza" (Texto Izquierda, Imagen Derecha) */}
        <div className="flex items-center gap-[100px] mb-[120px]">
          {/* Texto Izquierda */}
          <div className="w-[480px]">
            {/* Etiqueta */}
            <p className="font-['Inter:Bold',sans-serif] font-bold text-[14px] text-[#f26440] uppercase mb-[12px] tracking-wider">
              AL AIRE LIBRE
            </p>

            {/* Título */}
            <h2
              className="font-['Merriweather:Bold',sans-serif] font-bold text-[36px] text-[#51362a] mb-[24px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Desconecta en nuestra terraza
            </h2>

            {/* Párrafo */}
            <p className="font-['Inter:Regular',sans-serif] text-[18px] text-[#51362a] leading-[150%] mb-[32px]">
              Un espacio al aire libre donde disfrutar de tu café rodeado de naturaleza. El lugar perfecto para descansar entre sesiones de estudio o después de tu ruta en bici.
            </p>

            {/* Botón */}
            <button className="w-[200px] h-[50px] bg-[#f26440] rounded-[8px] font-['Inter:Regular',sans-serif] text-[16px] text-white hover:bg-[#e05530] transition-colors cursor-pointer">
              Reservar mesa
            </button>
          </div>

          {/* Imagen Derecha */}
          <div className="flex-shrink-0">
            <div className="w-[560px] h-[420px] rounded-[16px] bg-[#f4f1de] overflow-hidden">
              <img
                src={terrazaImage}
                alt="Terraza al aire libre"
                className="w-full h-full object-cover"
              />
            </div>
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
