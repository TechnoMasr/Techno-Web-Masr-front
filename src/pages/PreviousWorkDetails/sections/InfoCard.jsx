import image from "@/assets/images/pc-img.png";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";

const InfoCard = () => {
  return (
    <div
      className="w-full md:w-1/3 bg-white rounded-md shadow border p-4 
    flex flex-col text-center gap-2"
    >
      <div className="h-20 aspect-video overflow-hidden mb-2">
        <img
          src={image}
          alt="partner"
          className="w-full h-full object-contain"
        />
      </div>

      <h3 className="font-semibold text-primary">شركة ليفا للتامين</h3>
      <p className="text-xs font-medium">قطاع التطوير التاميني بالرياض</p>

      <hr className="my-2" />

      <ul className="flex flex-col gap-4">
        <li className="w-full flex items-center justify-between gap-2 text-xs font-bold">
          <p className="text-gray-400">الدوله:</p>
          <span className="text-primary">
            المملكة العربية السعودية
          </span>
        </li>

        <li className="w-full flex items-center justify-between gap-2 text-xs font-bold">
          <p className="text-gray-400">الدوله:</p>
          <span className="text-primary">
            المملكة العربية السعودية
          </span>
        </li>

        <li className="w-full flex items-center justify-between gap-2 text-xs font-bold">
          <p className="text-gray-400">الدوله:</p>
          <span className="text-primary">
            المملكة العربية السعودية
          </span>
        </li>
      </ul>

      <hr className="my-2" />

      <ul className="flex items-center justify-center flex-wrap gap-4">
        <li>
          <a
            href="#"
            target="_blank"
            className="w-10 aspect-square flex items-center justify-center rounded-lg border 
            text-2xl text-black hover:bg-primary hover:text-white transition-all duration-300"
          >
            <FaApple />
          </a>
        </li>

        <li>
          <a
            href="#"
            target="_blank"
            className="w-10 aspect-square flex items-center justify-center rounded-lg border 
            text-2xl text-black hover:bg-primary hover:text-white transition-all duration-300"
          >
            <FaGooglePlay />
          </a>
        </li>

        <li>
          <a
            href="#"
            target="_blank"
            className="w-10 aspect-square flex items-center justify-center rounded-lg border 
            text-2xl text-black hover:bg-primary hover:text-white transition-all duration-300"
          >
            <RiGlobalLine />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default InfoCard;
