import { Instagram, Clock, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <div className="bg-[#51362a] w-full min-h-[400px] pt-[60px] pb-[40px]" data-name="Footer">
      <div className="max-w-[1272px] mx-auto px-[120px]">

        {/* Las 3 Columnas */}
        <div className="grid grid-cols-3 gap-[80px] mb-[60px]">

          {/* Columna 1: La Marca */}
          <div>
            <h3
              className="font-['Merriweather:Bold',sans-serif] font-bold text-[24px] text-[#f4f1de] mb-[16px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Graná en Grano
            </h3>
            <p className="font-['Inter:Regular',sans-serif] text-[16px] text-[#f4f1de] opacity-80 mb-[24px]">
              Tu refugio sensorial. Tu energía en ruta.
            </p>

            {/* Redes Sociales */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#f4f1de] bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-[#f4f1de]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#f4f1de] bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all cursor-pointer"
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4 text-[#f4f1de]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#f4f1de] bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all cursor-pointer"
                aria-label="Strava"
              >
                <svg className="w-5 h-5 text-[#f4f1de]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2: Visítanos */}
          <div>
            <h3
              className="font-['Merriweather:Bold',sans-serif] font-bold text-[20px] text-[#f4f1de] mb-[16px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Dónde estamos
            </h3>
            <div className="font-['Inter:Regular',sans-serif] text-[16px] text-[#f4f1de] opacity-80 leading-[150%] space-y-[16px]">
              <div>
                <p>Calle Ficticia 123, Local 4</p>
                <p>18001 Granada, España</p>
              </div>

              <div>
                <p className="flex items-center gap-2 mb-1">
                  <Clock size={16} />
                  <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold opacity-100">Horarios:</span>
                </p>
                <p className="ml-6">L-V: 07:00h - 20:00h</p>
                <p className="ml-6">S-D: 08:00h - 14:00h</p>
              </div>
            </div>
          </div>

          {/* Columna 3: Contacto y Legal */}
          <div>
            <h3
              className="font-['Merriweather:Bold',sans-serif] font-bold text-[20px] text-[#f4f1de] mb-[16px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Enlaces Útiles
            </h3>
            <div className="font-['Inter:Regular',sans-serif] text-[16px] text-[#f4f1de] opacity-80 leading-[150%] space-y-[12px]">
              <p className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:hola@granaengrano.es" className="hover:opacity-100 transition-opacity">
                  hola@granaengrano.es
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+34958000000" className="hover:opacity-100 transition-opacity">
                  +34 958 00 00 00
                </a>
              </p>
              <p>
                <a href="#" className="hover:opacity-100 transition-opacity cursor-pointer">
                  Normativa de Estudio
                </a>
              </p>
              <p>
                <a href="#" className="hover:opacity-100 transition-opacity cursor-pointer">
                  Aviso Legal y Privacidad
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Línea Separadora */}
        <div className="w-full h-px bg-white opacity-10 mb-[24px]" />

        {/* Copyright */}
        <div className="text-center">
          <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#f4f1de] opacity-60">
            © 2026 Graná en Grano. Diseñado con mucha energía.
          </p>
        </div>

      </div>
    </div>
  );
}
