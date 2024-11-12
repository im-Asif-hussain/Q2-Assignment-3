import Img from "@/app/assets/Landing page V1/desktop/Group 212.png";
import Image from "next/image";
import Container from "@/app/assets/Landing page V1/desktop/Image-container.png";

const Extension = () => {
  return (
    <>
      <div className="bg-[#043873] py-[100px] px-[100px] text-white flex h-[559px]">
        <div className="w-[656px] h-[238px] ">
          <h2 className="font-bold text-[46px] leading-[55.45px] tracking-[-0.02em] mt-16 mb-[24px] ml-9 ">
            Use as Extension
          </h2>
          <p
            className="font-normal text-md leading-[25px] tracking-[-0.02em] mb-8
          ml-9 "
          >
            Use the web clipper extension, available on Chrome and Firefox, to
            save web pages or take screenshots as notes.
          </p>

          <button className="bg-[#4F9CF9] w-[150px] h-[50px] rounded-lg p-4 my-7 mx-9 hover:transform hover:translate-y-2 transition duration-300">
            <p className="font-medium text-lg leading-[15px] tracking-[-0.02em] flex text-white ml-4">
              Let's Go
              <span className="w-[10px] h-[10px] pt-[4px] ml-4 ">
                <Image src={Img} alt="Right-Error"></Image>
              </span>
            </p>
          </button>
        </div>
        <div className="w-[686px] h-[479px] ml-3">
          <Image src={Container} alt="container"></Image>
        </div>
      </div>
    </>
  );
};

export default Extension;
