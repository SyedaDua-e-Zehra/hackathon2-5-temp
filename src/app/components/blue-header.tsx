import Image from "next/image";
import phone from "@/images/icn settings icn-xs.png";
import mail from "@/images/icn settings icn-xs (1).png";
import insta from "@/images/icn settings icn-xs (2).png";
import yout from "@/images/icn settings icn-xs (3).png";
import fb from "@/images/icn settings icn-xs (4).png";
import twit from "@/images/icn settings icn-xs (5).png";

export default function BlueHeader() {
  return (
    <div className="w-full h-auto bg-[#252B42] py-2 px-4">
      <div className="flex justify-between items-center w-full">
        {/* Left section: Contact Info */}
        <div className="flex gap-2 items-center">
          <button className="flex items-center gap-1 text-white text-sm">
            <Image src={phone} alt="phone" width={16} height={16} />
            <span className="font-Montserrat font-semibold">(225) 555-0118</span>
          </button>
          <button className="flex items-center gap-1 text-white text-sm">
            <Image src={mail} alt="mail" width={16} height={16} />
            <span className="font-Montserrat">michelle.rivera@example.com</span>
          </button>
        </div>

        {/* Center section: Follow Us */}
        <h6 className="font-Montserrat font-semibold text-sm text-white text-center">
          Follow Us and get a chance to win 80% off
        </h6>

        {/* Right section: Social Icons */}
        <div className="flex gap-2 items-center">
          <h6 className="font-Montserrat text-sm text-white">Follow Us:</h6>
          <div className="flex gap-2">
            <Image src={insta} alt="Instagram" width={16} height={16} />
            <Image src={yout} alt="YouTube" width={16} height={16} />
            <Image src={fb} alt="Facebook" width={16} height={16} />
            <Image src={twit} alt="Twitter" width={16} height={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
