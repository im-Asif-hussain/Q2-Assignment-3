import Img from "@/app/assets/Landing page V1/desktop/Group 212.png";
import Image from "next/image";
import Container from "@/app/assets/Landing page V1/desktop/Image-container.png";
import WorkImg from "@/app/assets/Landing page V1/desktop/Work Together Image.png";

const FigmaWebsite = () => {
  return (
    <>
      {/* Hero-Section Start */}
      <div className="bg-[#043873] py-[100px] px-[100px] text-white flex h-[600px]">
        <div className="w-[656px] h-[238px] ">
          <h2 className="font-bold text-[46px] leading-[55.45px] tracking-[-0.02em] mt-11 mb-[24px] ml-8 ">
            Get More Done with whitepace
          </h2>
          <p
            className="font-normal text-md leading-[25px] tracking-[-0.02em] mb-10
          ml-9 "
          >
            Project management software that enables your teams to collaborate,
            plan,analyze and manage everyday tasks
          </p>

          <button className="bg-[#4F9CF9] w-[198px] rounded-lg p-4 ml-9 hover:transform hover:translate-y-2 transition duration-300">
            <p className="font-medium text-lg leading-[23px] tracking-[-0.02em] flex justify-between">
              Try Whitepace free
              <span className="w-[10px] h-[10px] pt-[8px] ">
                <Image src={Img} alt="Right-Error"></Image>
              </span>
            </p>
          </button>
        </div>
        <div className="w-[849px] h-[900px] ml-3">
          <Image src={Container} alt="container"></Image>
        </div>
      </div>
      {/* Hero-Section End */}

      {/* Project-Management-Section Start */}
      <div className="bg-[#fffff] py-[100px] px-[100px] text-black flex h-[600px]">
        <div className="w-[656px] h-[238px] ">
          <h2 className="font-bold text-[46px] leading-[55.45px] tracking-[-0.02em] mt-14 mb-[24px] ml-9 ">
            Project Management
          </h2>
          <p
            className="font-normal text-[18px] leading-[25px] tracking-[-0.02em] mb-10
          ml-9"
          >
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>

          <button className="bg-[#4F9CF9] w-[169px] h-[23] rounded-lg p-3 ml-9 hover:transform hover:translate-y-2 transition duration-300">
            <p className="font-medium text-lg leading-[23px] tracking-[-0.02em] flex text-white justify-center">
              Get Started
              <span className="w-[10px] h-[10px] pt-[8px] ml-4">
                <Image src={Img} alt="Right-Error"></Image>
              </span>
            </p>
          </button>
        </div>
        <div className="w-[749px] h-[800px] ml-3">
          <Image src={Container} alt="container"></Image>
        </div>
      </div>
      {/* Project-Management-Section End */}

      {/* Work-Together-Section Start */}
      <div className="bg-[#fffff] px-[110px] text-black flex h-[500px] ">
        <div className=" w-[500px] ">
          <Image src={WorkImg} alt="container"></Image>
        </div>
        <div className="w-[670px] h-[294px] mt-28 ">
          <h2 className="font-bold text-[46px] leading-[55.45px] tracking-[-0.02em] ml-24">
            Work together
          </h2>
          <p
            className="font-normal text-[18px] leading-[25px] tracking-[-0.02em] mt-2
          ml-24"
          >
            With whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </p>

          <button className="bg-[#4F9CF9] w-[150px] h-[50px] rounded-lg p-4 my-7 mx-24 hover:transform hover:translate-y-2 transition duration-300">
            <p className="font-medium text-lg leading-[15px] tracking-[-0.02em] flex text-white ml-2">
              Try it now
              <span className="w-[10px] h-[10px] pt-[4px] ml-4 ">
                <Image src={Img} alt="Right-Error"></Image>
              </span>
            </p>
          </button>
        </div>
      </div>
      {/* Work-Together-Section End */}
    </>
  );
};

export default FigmaWebsite;
