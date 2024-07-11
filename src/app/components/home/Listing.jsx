import { HiMiniUserGroup } from "react-icons/hi2";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoLocationSharp } from "react-icons/io5";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaCalendarCheck } from "react-icons/fa6";

const Listing = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 gap-5 md:gap-8 md:grid-cols-2 px-5 md:px-32 md:py-10">
        {/* div 1 */}
        <div className="w-fit p-5 border-2 border-[#CED4DA] hover:border-[#8064A2] hover:bg-[#8064A2] hover:text-white rounded-lg transform ease-in duration-200 group">
          <button className="items-center inline-flex">
            <HiMiniUserGroup className="w-10 h-10 text-[#8064A2] group-hover:text-white transition duration-200 ease-in-out" />
            <span className="font-bold pl-2 text-xl">People</span>
          </button>
          <p>
            Find a teacher, coach, or expert for your hobby interest in your
            locality. Find a partner, teammate, accompanist or collaborator.
          </p>
        </div>
        {/* div 2 */}
        <div className="p-5 border-2 border-[#CED4DA] hover:border-[#77933C] hover:bg-[#77933C] hover:text-white rounded-lg transform ease-in duration-200 group">
          <button className="items-center inline-flex">
            <IoLocationSharp className="w-10 h-10 text-[#77933C] group-hover:text-white transition duration-200 ease-in-out" />
            <span className="font-bold pl-2 text-xl">Place</span>
          </button>
          <p>
            Find a class, school, playground, auditorium, studio, shop or an
            event venue. Book a slot at venues that allow booking through
            hobbycue.
          </p>
        </div>
        {/* div 3 */}
        <div className="p-5 border-2 border-[#CED4DA] hover:border-[#C0504D] hover:bg-[#C0504D] hover:text-white rounded-lg transform ease-in duration-200 group">
          <button className="items-center inline-flex">
            <HiMiniShoppingBag className="w-10 h-10 text-[#C0504D] group-hover:text-white transition duration-200 ease-in-out" />
            <span className="font-bold pl-2 text-xl">Product</span>
          </button>
          <p>
            Find equipment or supplies required for your hobby. Buy, rent or
            borrow from shops, online stores or from community members.
          </p>
        </div>
        {/* div 4 */}
        <div className="p-5 border-2 border-[#CED4DA] hover:border-[#0096C8] hover:bg-[#0096C8] hover:text-white rounded-lg transform ease-in duration-200 group">
          <button className="items-center inline-flex">
            <FaCalendarCheck className="w-7 h-7 text-[#0096C8] group-hover:text-white transition duration-200 ease-in-out" />
            <span className="font-bold pl-2 text-xl">Program</span>
          </button>
          <p>
            Find events, meetups and workshops related to your hobby. Register
            or buy tickets online.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Listing;
