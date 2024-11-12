import Img from "@/app/assets/Landing page V1/desktop/Group 212.png";
import Image from "next/image";
import Container from "@/app/assets/Landing page V1/desktop/Image-container.png";

const Customize = () => {
  return (
    <>
      <div className="bg-[#fffff] px-[100px] py-[70px] text-black flex h-[500px] ">
        <div className=" w-[714px] h=[532.09px] ">
          <Image src={Container} alt="container"></Image>
        </div>
        <div className="w-[670px] h-[294px] mt-14 ">
          <h2 className="font-bold text-[46px] leading-[55.45px] tracking-[-0.02em] ml-14">
            Customise it to <br /> your needs
          </h2>
          <p
            className="font-normal text-[18px] leading-[25px] tracking-[-0.02em] mt-4
          ml-14"
          >
           Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
          </p>

          <button className="bg-[#4F9CF9] w-[150px] h-[50px] rounded-lg p-4 my-7 mx-14 hover:transform hover:translate-y-2 transition duration-300">
            <p className="font-medium text-lg leading-[15px] tracking-[-0.02em] flex text-white ml-5">
              Let's Go
              <span className="w-[10px] h-[10px] pt-[4px] ml-4 ">
                <Image src={Img} alt="Right-Error"></Image>
              </span>
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Customize;
