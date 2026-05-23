function Boton() {
  return (
    <div className="absolute contents left-[170px] top-[613px]" data-name="Botón">
      <div className="absolute bg-[#e07a5f] h-[134px] left-[170px] rounded-[8px] top-[613px] w-[251px]" />
      <p className="absolute font-['Merriweather:Regular',sans-serif] font-normal h-[42px] leading-[normal] left-[225px] text-[36px] text-white top-[638px] w-[149px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Reserva Tu mesa
      </p>
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-white relative size-full" data-name="MacBook Pro 14' - 1">
      <div className="absolute left-[158px] size-[150px] top-[168px]" data-name="51362A">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 150">
          <circle cx="75" cy="75" fill="var(--fill-0, #51362A)" id="51362A" r="75" />
        </svg>
      </div>
      <div className="absolute left-[367px] size-[150px] top-[168px]" data-name="4F6D58">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 150">
          <circle cx="75" cy="75" fill="var(--fill-0, #4F6D58)" id="4F6D58" r="75" />
        </svg>
      </div>
      <div className="absolute left-[576px] size-[150px] top-[168px]" data-name="E07A5F">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 150">
          <circle cx="75" cy="75" fill="var(--fill-0, #E07A5F)" id="E07A5F" r="75" />
        </svg>
      </div>
      <div className="absolute left-[785px] size-[150px] top-[168px]" data-name="F4F1DE">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 150">
          <circle cx="75" cy="75" fill="var(--fill-0, #F4F1DE)" id="F4F1DE" r="75" />
        </svg>
      </div>
      <div className="absolute left-[994px] size-[150px] top-[168px]" data-name="264653">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 150">
          <circle cx="75" cy="75" fill="var(--fill-0, #264653)" id="264653" r="75" />
        </svg>
      </div>
      <div className="absolute left-[1203px] size-[150px] top-[168px]" data-name="E9C46A">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 150">
          <circle cx="75" cy="75" fill="var(--fill-0, #E9C46A)" id="E9C46A" r="75" />
        </svg>
      </div>
      <p className="absolute font-['Merriweather:Regular',sans-serif] font-normal h-[34px] leading-[normal] left-[158px] text-[36px] text-black top-[403px] w-[668px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        H1 - Título Principal - Merriweather
      </p>
      <p className="absolute font-['Merriweather:Regular',sans-serif] font-normal h-[34px] leading-[normal] left-[158px] text-[36px] text-black top-[494px] w-[668px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Párrafo Normal - inter
      </p>
      <Boton />
      <div className="absolute bg-[#d9d9d9] h-[450px] left-[880px] rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[463px] w-[473px]" />
      <p className="absolute font-['Merriweather:Regular',sans-serif] font-normal h-[52px] leading-[normal] left-[970px] text-[36px] text-black top-[528px] w-[293px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Zona Cero Ruido
      </p>
    </div>
  );
}