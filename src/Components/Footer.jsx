import React from "react";
// import lightlogo from "../img/light-logo.png";
import Button from "./Button";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { BiLogoTelegram } from "react-icons/bi";

function Footer() {
  return (
    <>
      <div className=" bg-[#252424] font-roboto text-white text-center md:flex flex-wrap px-6  lg:px-12 pt-24 pb-12 border-b-4 border-zinc-500 mt-10">
        <div className="flex-none w-full  md:mr-10 text-left lg:w-[30%]">
          <div className="flex flex-col gap-6">
          <h1 className="text-primary text-4xl italic font-bold">MUSIE..</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
              rem omnis, adipisci vitae impedit dolorum similique explicabo
              nulla sunt vero!
            </p>
            <form className="flex w-fit mx-auto lg:flex" action="">
              <input type="text" placeholder="Enter Your Email Address" />
              <Button label={"Sumbit"} />
            </form>
          </div>

        </div>

        <div className="flex-1 h-full">
          <h1 className="text-lg text-primary lg: text-2xl font-bold mt-3 md:mb-5">Quick Links</h1>
          <p className="mb-1 md:mb-5">About</p>
          <p className="mb-1 md:mb-5">Contact</p>
          <p className="mb-1 md:mb-5">FAQs</p>
          <p className="mb-1 md:mb-5">Carrer</p>
        </div>

        <div className="flex-1 h-full">
          <h1 className="text-lg text-primary lg: text-2xl font-bold mt-3 md:mb-5">Categories</h1>
          <p className="mb-1 md:mb-5">Entertaiment</p>
          <p className="mb-1 md:mb-5">Sport</p>
          <p className="mb-1 md:mb-5">International</p>
          <p className="mb-1 md:mb-5">Tickeking</p>
        </div>

        <div className="flex-1 h-full">
          <h1 className="text-lg text-primary lg: text-2xl font-bold mt-3 md:mb-5">Contact</h1>
          <p className="mb-1 md:mb-5"> Online Chat</p>
          <p className="mb-1 md:mb-5">Whatsapp</p>
          <p className="mb-1 md:mb-5">Telegram</p>
          <p className="mb-1 md:mb-5">Ticketing</p>
        </div>

        <div className="flex-1 h-full">
          <h1 className="text-lg text-primary lg: text-2xl font-bold mt-3 md:mb-5">Contact</h1>
          <p className="mb-1 md:mb-5">+91 15645 68574</p>
          <p className="mb-1 md:mb-5">+91 15645 68574</p>
          <p className="mb-1 md:mb-3">admin@musie.in</p>
          <p className="flex gap-3 w-fit mx-auto">
            <AiOutlineInstagram className="text-3xl" />
            <BiLogoTelegram className="text-3xl" />
            <RiTwitterXLine className="text-3xl" />
          </p>
        </div>
      </div>
      <div className="py-5 bg-[#252424] font-roboto text-white text-center px-4">
        © 2023 RISHABH KUSHWAH | Handcrafted with ❤️ | Made by RISHABH KUSHWAH
      </div>
    </>
  );
}

export default Footer;
