import Image from "next/image";
import logoImage1 from "@/app/assets/Logo (1).png";
const Navbar = () => {
  return (
    <>
      <div className=" py-4 px-[140px] bg-[#043873] flex flex-row items-center">
        <div className="w-[191px] h-[34px] mt-4">
          <Image src={logoImage1} alt="logo"/>
        </div>

        <div className="w-[737.5px] h-[60px] flex items-center text-white ">
          <ul className="w-[549px] h-[23px] flex font-medium text-base ml-[370px]">
            <li className="w-[87px] h-[23px]">Products</li>
            <li className="w-[79px] h-[23px]">Solutions</li>
            <li className="w-[89px] h-[23px]">Resources</li>
            <li className="w-[58px] h-[23px]">Pricing</li>
          </ul>
        </div>

        <div className="pl-10 w-[126px] h-[60px] ">
          <button className="rounded-lg px-10 py-4 bg-[#FFE492] hover:transform hover:translate-y-2 transition duration-300">
            <p
              className="w-[46px] h-[23px] font-bold text-lg leading-[23px] tracking-[-2%] text-[#043873]
            "
            >
              Login
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
