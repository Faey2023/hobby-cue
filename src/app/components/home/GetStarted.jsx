import Image from "next/image";
import img from "../../assets/getStarted.jpg";

const GetStarted = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-4 my-10 px-5 md:px-32 md:py-10">
      <h1 className="text-xl md:text-3xl font-medium">
        Your <span className="text-[#8064A2]">Hobby</span> , Your
        <span className="text-[#0096C8]"> Community...</span>
      </h1>
      <button className="bg-[#8064A2] py-1 md:py-2 px-2 md:px-4 rounded-lg font-medium text-sm md:text-xl text-white">
        Get Started
      </button>
      <Image src={img} alt="" width={0} height={0} className="mx-auto" />
    </div>
  );
};

export default GetStarted;
