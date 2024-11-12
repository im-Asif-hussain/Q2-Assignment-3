import Img from "@/app/assets/Landing page V1/desktop/Group 212.png";
import Image from "next/image";

const YourWork = () => {
  return (
    <>
      <div className="bg-[#043873] py-[80px] px-[80px] text-white h-[390px] flex flex-col justify-center items-center ">
        <h1 className="font-bold text-[52px] leading-[87.14px] tracking-[-0.02em] ">
          Your work, everywhere you are
        </h1>

        <p className="mt-4 font-normal text-lg leading-[25px] tracking-[-0.02em] px-40 text-center">
          Access your notes from your computer, phone or tablet by synchronising
          with various services, including whitepace, Dropbox and OneDrive. The
          app is available on Windows, macOS, Linux, Android and iOS. A terminal
          app is also available!
        </p>

        <button className="bg-[#4F9CF9] w-[165px] h-[63px] rounded-lg p-4 mt-11 mx-9 hover:transform hover:translate-y-2 transition duration-300">
          <p className="font-medium text-lg leading-[15px] tracking-[-0.02em] flex text-white ml-2">
            Try Taskey
            <span className="w-[10px] h-[10px] pt-[4px] ml-4 ">
              <Image src={Img} alt="Right-Error"></Image>
            </span>
          </p>
        </button>
      </div>
    </>
  );
};

export default YourWork;
