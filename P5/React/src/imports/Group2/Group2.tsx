import svgPaths from "./svg-5b6eeeninm";
import imgContainer from "./5895dd89d56818275bee697cc6d69a10f2d2674e.png";

function Group() {
  return (
    <div className="absolute contents inset-[3.04%_1.66%]" data-name="Group">
      <div className="absolute inset-[58.29%_1.66%_3.04%_64.5%]" data-name="Vector">
        <div className="absolute inset-[-4.29%_-4.9%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.9171 10.0773">
            <path d={svgPaths.p1e428900} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.795578" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.29%_64.5%_3.04%_1.66%]" data-name="Vector">
        <div className="absolute inset-[-4.29%_-4.9%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.9171 10.0773">
            <path d={svgPaths.p1b7eb500} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.795578" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[3.04%_30.66%_85.91%_59.67%]" data-name="Vector">
        <div className="absolute inset-[-15%_-17.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.11601 3.4475">
            <path d={svgPaths.p25444380} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.795578" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[25.14%_25.83%_22.38%_35.5%]" data-name="Vector">
        <div className="absolute inset-[-3.16%_-4.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0773 13.3922">
            <path d={svgPaths.p3f090a00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.795578" />
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
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col items-start left-[243px] pt-[8px] px-[8px] rounded-[10px] size-[40px] top-[13px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[208px] left-[-3px] overflow-clip top-0 w-[300px]" data-name="Container">
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
          Parking Seguro
        </p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[68.25px] relative shrink-0 w-[209.8px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#364153] text-[14px] top-[0.97px] w-[210px]">Aparcamiento exterior para tu bicicleta. Tu mente tranquila mientras recargas</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[192.25px] items-start left-0 p-[24px] top-[215px] w-[257.8px]" data-name="Container">
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