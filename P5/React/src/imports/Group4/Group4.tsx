import svgPaths from "./svg-xsyz3ulvst";
import imgContainer from "./ce1bc577a605fa4d3e98c90f1fa59d4ede9c12a2.png";

function Icon() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[2.63%]" data-name="Vector">
        <div className="absolute inset-[-2.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9986 24.0014">
            <path d={svgPaths.p1d659d00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2618" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col items-start left-[240px] pt-[8px] px-[8px] rounded-[10px] size-[40px] top-[15px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[203px] left-0 overflow-clip top-0 w-[297px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer} />
      <Container1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[32px] relative shrink-0 w-[209.8px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Merriweather:Regular',sans-serif] font-normal leading-[32px] left-0 text-[24px] text-black top-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Zona Cero Ruido
        </p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[91px] relative shrink-0 w-[209.8px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#364153] text-[14px] top-[0.97px] w-[210px]">Espacio insonorizado con enchufes individuales y luz regulable para máxima concentración</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[192.25px] items-start left-0 p-[24px] top-[224px] w-[257.8px]" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

export default function Group() {
  return (
    <div className="bg-[#f4f1de] overflow-clip relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-full" data-name="Group4">
      <Container />
      <Container2 />
    </div>
  );
}