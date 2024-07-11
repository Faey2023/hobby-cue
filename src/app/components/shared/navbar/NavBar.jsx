"use client";

import Image from "next/image";
import logo from "../../../assets/logo.jpg";
import userImg from "../../../assets/user.png";
import { MdExplore, MdStars } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBookmark, FaBell } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { CiMenuFries, CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white px-5 py-4 shadow-md">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl">
        <div className="flex items-center gap-5">
          <Image
            src={logo}
            alt="logo"
            className="w-16 h-16"
            width={0}
            height={0}
          />
          <form className="hidden md:block">
            <div className="relative">
              <input
                type="search"
                className="block p-2.5 w-full text-sm text-gray-900 bg-[#f8f9fa] border border-gray-300 rounded-lg"
                placeholder="Search here..."
              />
              <button
                type="submit"
                className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-[#8064A2] rounded-r-lg"
              >
                <CiSearch className="w-5 h-5" />
                <span className="sr-only">Search</span>
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#8064A2] focus:outline-none"
          >
            <CiMenuFries className="w-8 h-8" />
          </button>
        </div>

        <div className="hidden md:flex gap-3 items-center">
          {/* drop-down 1 */}
          <button className="flex gap-1 font-medium text-sm px-5 py-2.5 items-center">
            <MdExplore className="w-7 h-7 text-[#8064A2]" />
            <span>Explore</span>
            <RiArrowDropDownLine className="w-8 h-8 text-[#939ca3]" />
          </button>
          {/* drop-down 2 */}
          <button className="flex gap-1 font-medium text-sm px-5 py-2.5 items-center">
            <MdStars className="w-7 h-7 text-[#8064A2]" />
            <span>Hobbies</span>
            <RiArrowDropDownLine className="w-8 h-8 text-[#939ca3]" />
          </button>
          <FaBookmark className="w-7 h-7 text-[#8064A2]" />
          <FaBell className="w-7 h-7 text-[#8064A2]" />
          <PiShoppingCartSimpleFill className="w-7 h-7 text-[#8064A2]" />
          <div className="flex items-center gap-3">
            <button className="hover:bg-[#8064A2] border border-[#8064A2] py-1 md:py-2 px-2 md:px-4 rounded-lg font-medium text-sm md:text-xl text-[#8064A2] hover:text-white transform duration-300">
              Sign In
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div className="bg-white w-64 h-full p-5">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-[#8064A2] focus:outline-none mb-5"
          >
            <IoClose className="w-8 h-8" />
          </button>
          <ul className="space-y-5">
            <li>
              <button className="flex gap-1 font-medium text-sm px-5 py-2.5 items-center w-full text-left">
                <MdExplore className="w-7 h-7 text-[#8064A2]" />
                <span>Explore</span>
                <RiArrowDropDownLine className="w-8 h-8 text-[#939ca3]" />
              </button>
            </li>
            <li>
              <button className="flex gap-1 font-medium text-sm px-5 py-2.5 items-center w-full text-left">
                <MdStars className="w-7 h-7 text-[#8064A2]" />
                <span>Hobbies</span>
                <RiArrowDropDownLine className="w-8 h-8 text-[#939ca3]" />
              </button>
            </li>
            <li>
              <button className="flex gap-1 font-medium text-sm px-5 py-2.5 items-center w-full text-left">
                <FaBookmark className="w-7 h-7 text-[#8064A2]" />
                <span>Bookmarks</span>
              </button>
            </li>
            <li>
              <button className="flex gap-1 font-medium text-sm px-5 py-2.5 items-center w-full text-left">
                <FaBell className="w-7 h-7 text-[#8064A2]" />
                <span>Notifications</span>
              </button>
            </li>
            <li>
              <button className="flex gap-1 font-medium text-sm px-5 py-2.5 items-center w-full text-left">
                <PiShoppingCartSimpleFill className="w-7 h-7 text-[#8064A2]" />
                <span>Cart</span>
              </button>
            </li>
            <li>
              <div className="flex items-center gap-3">
                <button className="hover:bg-[#8064A2] border-[#8064A2] py-1 md:py-2 px-2 md:px-4 rounded-lg font-medium text-sm md:text-xl text-[#8064A2] hover:text-white">
                  Sign In
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
