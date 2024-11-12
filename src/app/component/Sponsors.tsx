import Apple from "@/app/assets/Landing page V1/desktop/Apple.png";
import Microsoft from "@/app/assets/Landing page V1/desktop/Microsoft.png";
import Slack from "@/app/assets/Landing page V1/desktop/Slack.png";
import Google from "@/app/assets/Landing page V1/desktop/Google.png";
import Image from "next/image";

const Sponsors = () => {
  return (
    <>
      <div className="bg-[#ffffff] px-[80px] text-black h-[390px] flex flex-col justify-center ">
        <h1 className="font-bold text-[52px] leading-[87.14px] tracking-[-0.02em] text-center mb-20">
          Our sponsors
        </h1>

        <div className="flex justify-between">
          <Image
            src={Apple}
            alt="Apple-img"
            className="w-[55px] h-[57px] hover:transform hover:translate-x-3 transition duration-300"
          ></Image>
          <Image
            src={Microsoft}
            alt="Microsoft-img"
            className="w-[257px] h-[59px] hover:transform hover:translate-y-2 transition duration-300"
          ></Image>
          <Image
            src={Slack}
            alt="Slack-img"
            className="w-[250px] h-[59px] hover:transform hover:translate-x-3 transition duration-300"
          ></Image>
          <Image
            src={Google}
            alt="Google-img"
            className="w-[211px] h-[59px] hover:transform hover:translate-y-2 transition duration-300"
          ></Image>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
