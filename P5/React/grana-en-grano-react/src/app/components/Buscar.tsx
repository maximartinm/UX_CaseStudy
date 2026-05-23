import { useNavigate, useSearchParams } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import svgPaths from "../../imports/InicioHome/svg-q3a4nmqyj8";

interface Cafe {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  color: string;
  textColor: string;
}

const cafes: Cafe[] = [
  {
    id: 1,
    nombre: "Origen Etiopía Yirgacheffe",
    categoria: "Novedad",
    descripcion: "Tueste ligero. Notas a jazmín, lima y bergamota. Un café elegante y floral.",
    color: "#e9c46a",
    textColor: "#51362a"
  },
  {
    id: 2,
    nombre: "Finca La Colombia",
    categoria: "Clásico",
    descripcion: "Tueste medio. Notas a caramelo, chocolate con leche y manzana roja. Acogedor.",
    color: "rgba(81,54,42,0.87)",
    textColor: "white"
  },
  {
    id: 3,
    nombre: "Espresso Doble Potencia",
    categoria: "Pre-entreno",
    descripcion: "Blend Robusta/Arábica. Alta concentración de cafeína (150mg) para picos de esfuerzo.",
    color: "#e07a5f",
    textColor: "white"
  },
  {
    id: 4,
    nombre: "Nitro Cold Brew",
    categoria: "Resistencia",
    descripcion: "Infusionado en frío 24h. Cero acidez para tu estómago durante las rutas largas.",
    color: "#e07a5f",
    textColor: "white"
  }
];

export default function Buscar() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const handleAñadirClick = () => {
    navigate('/compra');
  };

  const resultados = cafes.filter(cafe =>
    cafe.nombre.toLowerCase().includes(query.toLowerCase()) ||
    cafe.categoria.toLowerCase().includes(query.toLowerCase()) ||
    cafe.descripcion.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen flex flex-col" data-name="Buscar">
      <Header />
      <div className="flex-1">

      <div className="pt-[50px] px-[72px] pb-[60px]">
        <h1 className="font-['Merriweather:Regular',sans-serif] text-[48px] text-black mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
          Resultados de búsqueda
        </h1>
        <p className="font-['Inter:Regular',sans-serif] text-[20px] text-gray-600 mb-8">
          Buscando: <span className="font-semibold">"{query}"</span>
        </p>

        {resultados.length > 0 ? (
          <>
            <p className="font-['Inter:Regular',sans-serif] text-[18px] text-gray-600 mb-8">
              Se encontraron {resultados.length} {resultados.length === 1 ? 'resultado' : 'resultados'}
            </p>

            <div className="grid grid-cols-4 gap-8 pb-[100px]">
              {resultados.map((cafe) => (
                <div key={cafe.id} className="relative">
                  <div
                    className="h-[450px] rounded-[10px] p-8 flex flex-col"
                    style={{ backgroundColor: cafe.color }}
                  >
                    <div
                      className="h-[60px] rounded-[10px] mb-6 flex items-center justify-center"
                      style={{
                        backgroundColor: cafe.textColor === 'white' ? '#f4f1de' : '#51362a'
                      }}
                    >
                      <p
                        className="font-['Inter:Regular',sans-serif] text-[24px]"
                        style={{ color: cafe.textColor === 'white' ? 'black' : 'white' }}
                      >
                        "{cafe.categoria}"
                      </p>
                    </div>

                    <h3
                      className="font-['Merriweather:Regular',sans-serif] text-[28px] mb-4"
                      style={{ fontVariationSettings: "'wdth' 100", color: cafe.textColor }}
                    >
                      {cafe.nombre}
                    </h3>

                    <p
                      className="font-['Inter:Regular',sans-serif] text-[15px] mb-auto"
                      style={{ color: cafe.textColor }}
                    >
                      {cafe.descripcion}
                    </p>

                    <button
                      onClick={handleAñadirClick}
                      className="bg-white h-[60px] rounded-[10px] font-['Inter:Regular',sans-serif] text-[24px] text-black hover:bg-gray-100 transition-colors cursor-pointer mt-4"
                    >
                      añadir
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-[100px]">
            <p className="font-['Merriweather:Regular',sans-serif] text-[32px] text-gray-400 mb-4" style={{ fontVariationSettings: "'wdth' 100" }}>
              No se encontraron resultados
            </p>
            <p className="font-['Inter:Regular',sans-serif] text-[18px] text-gray-500 mb-8">
              Intenta con otros términos de búsqueda
            </p>
            <button
              onClick={() => navigate('/tienda')}
              className="bg-[#e07a5f] text-white rounded-[8px] px-8 py-3 font-['Inter:Regular',sans-serif] text-[18px] hover:bg-[#d06850] transition-colors cursor-pointer"
            >
              Ver toda la tienda
            </button>
          </div>
        )}
      </div>
      </div>

      <div className="mt-[120px]">
        <Footer />
      </div>
    </div>
  );
}
