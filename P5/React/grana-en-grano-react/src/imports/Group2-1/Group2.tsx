import svgPaths from "./svg-dm54koezqv";
import imgContainer from "./9d535d30f45ec67344fa6e5fe8087ed839ff8a52.png";

function Group() {
  return (
    <div className="absolute contents inset-[2.06%]" data-name="Group">
      <div className="absolute inset-[2.06%_23.36%_34.02%_2.06%]" data-name="Vector">
        <div className="absolute inset-[-3.23%_-2.76%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.889 16.3306">
            <path d={svgPaths.pe399e40} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.989686" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[39.35%_23.36%_2.06%_2.06%]" data-name="Vector">
        <div className="absolute inset-[-3.52%_-2.76%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.8889 15.0516">
            <path d={svgPaths.p2e25e000} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.989686" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[44.67%_2.06%_23.37%_75.29%]" data-name="Vector">
        <div className="absolute inset-[-6.45%_-9.1%_-6.45%_-9.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.42559 8.65976">
            <path d={svgPaths.p1e833d80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.989686" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col items-start left-[245px] pt-[8px] px-[8px] rounded-[10px] size-[40px] top-[14px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[208px] left-0 overflow-clip top-0 w-[297px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer} />
      <Container1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[64px] relative shrink-0 w-[209.8px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Merriweather:Regular',sans-serif] font-normal leading-[32px] left-0 text-[24px] text-black top-[-0.2px] w-[210px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Take-away Deportivo
        </p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[209.8px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#364153] text-[14px] top-[0.97px] w-[210px]">Pide desde tu móvil y recógelo sin esperas en tu ruta de entrenamiento</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[192.25px] items-start left-0 p-[24px] top-[208px] w-[257.8px]" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

export default function Group1() {
  return (
    <div className="bg-[#f4f1de] overflow-clip relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-full" data-name="Group2">
      <Container />
      <Container2 />
    </div>
  );
}