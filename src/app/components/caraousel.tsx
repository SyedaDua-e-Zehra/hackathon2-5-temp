import Image from "next/image";
import women from "@/images/hero1.jpg";

export default function Carousel() {
  return (
    <div className="relative w-full md:w-[1439px] h-[50vh] md:h-[80vh] lg:h-[716px] top-[136px] left-[1px] rounded-[5px] border-[1px]">
      {/* Background Image */}
      <div className="w-full h-full">
        <Image
          src={women}
          alt="Women"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-start gap-4 px-6 md:px-12 lg:px-16 z-10">
        <h5 className="font-Montserrat font-semibold text-[14px] md:text-[16px] text-white">
          SUMMER 2020
        </h5>
        <h1 className="font-Montserrat font-semibold text-[32px] md:text-[48px] lg:text-[58px] leading-tight text-white max-w-[600px]">
          NEW COLLECTION
        </h1>
        <h4 className="font-Montserrat font-normal text-[16px] md:text-[20px] text-white max-w-[500px]">
          We know how large objects will act, but things on a small scale.
        </h4>
        <button className="rounded-[5px] px-8 py-3 bg-[#2DC071] text-white text-[18px] md:text-[20px] lg:text-[24px] font-Montserrat leading-none">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}
