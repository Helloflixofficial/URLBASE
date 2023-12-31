import { AiOutlineHome } from "react-icons/ai";
import { SlSettings } from "react-icons/sl";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { AiOutlineAppstore } from "react-icons/ai";
export const sidebarData = [
  {
    name: "Home",
    url: "/",
    icon: AiOutlineAppstore,
  },
  {
    name: "Storage",
    url: "/storage",
    icon: HiOutlineDatabase,
  },
  {
    name: "Settings",
    url: "/settings",
    icon: SlSettings,
  },
  {
    name: "Authentication",
    url: "/authentication",
    icon: BsPerson,
  },
  
];
