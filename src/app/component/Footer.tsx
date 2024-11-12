import Image from "next/image";
import logoImage1 from "@/app/assets/Logo (1).png";

const Footer = () => {
  return (
    <>
      <div className="bg-[#043873] py-[100px] px-[120px] text-white h-[350px] grid grid-cols-4 gap-x-10 ">
        <div className="gap-[15px] w-[295px] h-[189px]">
          <Image src={logoImage1} alt="logo" />
          <p className="mt-2 w-[240px] h-[120px] text-justify font-normal text-lg leading-[25px] tracking-[-0.02em]">
            whitepace was created for the new ways we live and work. We make a
            better workspace around the world
          </p>
        </div>

        <div className="w-[295px] h-[127px] my-1 ml-24">
          <h1 className="w-[68px] h-[22px] font-bold text-lg leading-[21.78px] tracking-[-0.02em]">
            Product
          </h1>
          <p className="text-[#FFE492] text-base font-normal leading-[20px]  mt-4 tracking-[-0.02em]">
            Overview
          </p>
          <p className="text-[#FFf] text-base font-normal leading-[20px]  mt-2 tracking-[-0.02em]">
            Pricing
          </p>
          <p className="text-[#FFf] text-base font-normal leading-[20px]  mt-2 tracking-[-0.02em]">
            Customer stories
          </p>
        </div>

        <div className="w-[295px] h-[127px] my-1 ml-20">
          <h1 className="w-[68px] h-[22px] font-bold text-lg leading-[21.78px] tracking-[-0.02em]">
            Resouces
          </h1>
          <p className="text-[#FFf] text-base font-normal leading-[20px]  mt-4 tracking-[-0.02em]">
            Blog
          </p>
          <p className="text-[#FFf] text-base font-normal leading-[20px]  mt-2 tracking-[-0.02em]">
            Guide and tutorials
          </p>
          <p className="text-[#FFf] text-base font-normal leading-[20px]  mt-2 tracking-[-0.02em]">
            Help center
          </p>
        </div>

        <div className="w-[295px] h-[127px] my-1 ml-10">
          <h1 className="w-[68px] h-[22px] font-bold text-lg leading-[21.78px] tracking-[-0.02em]">
            Company
          </h1>
          <p className="text-[#FFf] text-base font-normal leading-[20px]  mt-4 tracking-[-0.02em]">
            Anout us
          </p>
          <p className="text-[#FFf] text-base font-normal leading-[20px]  mt-2 tracking-[-0.02em]">
            Careers
          </p>
          <p className="text-[#FFf] text-base font-normal leading-[20px]  mt-2 tracking-[-0.02em]">
            Media kit
          </p>
        </div>

        <div className="h-5 w-[1050px] ">
          <p className="text-center text-base font-normal leading-[20px]">©2021 Whitepace LLC.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
