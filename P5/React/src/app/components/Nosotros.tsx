import Header from './Header';
import Footer from './Footer';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Nosotros() {
  return (
    <div className="bg-white min-h-screen flex flex-col" data-name="Nosotros">
      <Header />
      <div className="flex-1">

      {/* Espacio superior */}
      <div className="h-[120px]" />

      {/* Gran Bloque de Fondo Oscuro */}
      <div className="bg-[#51362a] w-full min-h-[600px] flex items-center">
        <div className="max-w-[1272px] mx-auto px-[120px] py-[75px] w-full">
          <div className="flex items-center gap-[100px]">

            {/* Imagen Izquierda */}
            <div className="flex-shrink-0">
              <div className="w-[500px] h-[450px] rounded-[16px] bg-[#f4f1de] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1770565356338-7bf46fabe8c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJpc3RhJTIwbWFraW5nJTIwY29mZmVlJTIwc3BlY2lhbHR5fGVufDF8fHx8MTc3NzkwNDk4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Preparando café"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Texto Derecha */}
            <div className="w-[500px]">
              {/* Etiqueta */}
              <p className="font-['Inter:Bold',sans-serif] font-bold text-[14px] text-[#f26440] uppercase mb-[12px] tracking-wider">
                NUESTRA RAÍZ
              </p>

              {/* Título */}
              <h2
                className="font-['Merriweather:Bold',sans-serif] font-bold text-[40px] text-[#f4f1de] mb-[24px] leading-tight"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                El café que nosotros mismos necesitábamos
              </h2>

              {/* Párrafo 1 */}
              <p className="font-['Inter:Regular',sans-serif] text-[18px] text-[#f4f1de] opacity-80 leading-[150%] mb-[16px]">
                Graná en Grano nació de una contradicción. Queríamos un lugar con el silencio de una biblioteca para estudiar durante horas, pero también necesitábamos un punto de encuentro dinámico para recargar energías antes de subir a la Sierra en bici.
              </p>

              {/* Párrafo 2 */}
              <p className="font-['Inter:Regular',sans-serif] text-[18px] text-[#f4f1de] opacity-80 leading-[150%] mb-[32px]">
                Decidimos no elegir. Tostamos nuestro propio café de especialidad y creamos dos ecosistemas bajo un mismo techo. Por y para la gente de Granada.
              </p>

              {/* Botón */}
              <button className="border-2 border-[#f4f1de] rounded-[8px] px-6 py-3 font-['Inter:Regular',sans-serif] text-[16px] text-[#f4f1de] hover:bg-[#f4f1de] hover:text-[#51362a] transition-colors cursor-pointer">
                Conoce al equipo
              </button>
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
