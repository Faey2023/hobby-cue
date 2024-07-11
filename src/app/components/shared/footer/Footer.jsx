import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaGooglePlusG,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#FFFFFF] ">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-around space-y-2 md:space-y-0">
            {/* links div */}
            <ul className="space-y-2">
              <li className="font-semibold mb-4">Hobby Cue</li>
              <li className=" cursor-pointer">Contact Us</li>
              <li className=" cursor-pointer">Our Services</li>
              <li className=" cursor-pointer">Work with Us</li>
              <li className=" cursor-pointer">FAQ</li>
              <li className=" cursor-pointer">Contact Us</li>
            </ul>
            <ul className="space-y-2">
              <li className="font-semibold mb-4">How Do I</li>
              <li className=" cursor-pointer">Sign Up</li>
              <li className=" cursor-pointer">Add a Listing</li>
              <li className=" cursor-pointer">Claim Listing</li>
              <li className=" cursor-pointer">Post a Query</li>
              <li className=" cursor-pointer">Other Queries</li>
            </ul>
            <ul className="space-y-2">
              <li className="font-semibold mb-4">Quick Links</li>
              <li className=" cursor-pointer">Listings</li>
              <li className=" cursor-pointer">Blog Posts</li>
              <li className=" cursor-pointer">Shop / Store</li>
              <li className=" cursor-pointer">Community</li>
            </ul>
            {/* </div> */}
            {/* subscription */}
            <div className="flex flex-col gap-3">
              <h3 className="font-bold">Social Media</h3>
              <div className="flex gap-5">
                <button className="rounded-full p-2 bg-[#e8edf0] hover:bg-[#8064A2] text-[#6d747a] hover:text-white transform ease-in duration-200">
                  <FaFacebookF />
                </button>
                <button className="rounded-full p-2 bg-[#e8edf0] hover:bg-[#8064A2] text-[#6d747a] hover:text-white transform ease-in duration-200">
                  <FaTwitter />
                </button>
                <button className="rounded-full p-2 bg-[#e8edf0] hover:bg-[#8064A2] text-[#6d747a] hover:text-white transform ease-in duration-200">
                  <FaPinterest />
                </button>
                <button className="rounded-full p-2 bg-[#e8edf0] hover:bg-[#8064A2] text-[#6d747a] hover:text-white transform ease-in duration-200">
                  <FaGooglePlusG />
                </button>
                <button className="rounded-full p-2 bg-[#e8edf0] hover:bg-[#8064A2] text-[#6d747a] hover:text-white transform ease-in duration-200">
                  <FaYoutube />
                </button>
                <button className="rounded-full p-2 bg-[#e8edf0] hover:bg-[#8064A2] text-[#6d747a] hover:text-white transform ease-in duration-200">
                  <FaTelegramPlane />
                </button>
                <button className="rounded-full p-2 bg-[#e8edf0] hover:bg-[#8064A2] text-[#6d747a] hover:text-white transform ease-in duration-200">
                  <MdEmail />
                </button>
              </div>
              <h3 className="font-bold">Invite Friends</h3>
              <form className="w-fit">
                <div className="flex">
                  <div className="relative w-full">
                    <input
                      type="text"
                      className="block px-5 py-3 w-fit z-20 text-sm border-2 border-[#8064A2]  placeholder:text-[#939CA3] outline-none rounded-lg"
                      placeholder="Email Id"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute top-0 end-0 p-2.5 text-xs h-full text-white bg-[#8064A2] font-bold rounded-e-lg"
                    >
                      Invite
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <p className="text-sm text-gray-500 text-center">
            © Purple Cues Private Limited
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
