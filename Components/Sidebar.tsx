"use client";
import Image from "next/image";
import Link from "next/link";
import { sidebarData } from "./sidebardata";
import { IoIosArrowBack } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import { useState } from "react";
export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const Animation = {
    open: {
      x: 0,
      width: "16rem",
      transition: {
        damping: 40,
      },
    },
    close: {
      // x: -250,
      width: "3.5rem",
      transition: {
        damping: 40,
        delay: 0.15,
      },
    },
  };

  return (
    <>
      <div>
        <motion.div
          variants={Animation}
          animate={isOpen ? "open" : "close"}
          className=" bg-white text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem]
            overflow-hidden md:relative fixed
         h-screen"
        >
          <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3">
            <img
              src="https://avatars.githubusercontent.com/u/73479034?v=4"
              width={45}
              alt=""
            />
            <span className="text-xl whitespace-pre">Sharmaji</span>
          </div>
{/* ////////////////// */}
          <div className="flex flex-col h-full">
            <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
              {sidebarData.map(({ name, url, icon: Icon }, index) => (
                <li key={index}>
                  <Link href={url} className="Link">
                    <Icon size={23} className="min-w-max" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
{/* ////////////////// */}
          <motion.div
            animate={
              isOpen
                ? {
                    x: 195,
                    y: 0,
                  }
                : {
                    x: -10,
                    y: 10,
                    rotate: 180,
                  }
            }
            transition={{
              duration: 0,
            }}
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3 "
          >
            <IoIosArrowBack size={25} />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
