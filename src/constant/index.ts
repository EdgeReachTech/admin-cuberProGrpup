import { FaChartBar } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { HiSaveAs } from "react-icons/hi";
import { FaDiagramProject } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";

import { IoLogOut } from "react-icons/io5";


export type IconType = {
    Icon: React.FC;
    title: string;
    href: string;
};

export type IconBottomType = {
    Icon: React.FC;
    title: string;
};

export const iconsTop: IconType[] = [
    { Icon: FaChartBar, title: "Payment", href: "/" },
    { Icon: FaUserEdit, title: "Students", href: "/students" },
    { Icon: HiSaveAs, title: "Our Blog", href: "/ourBlog" },
    { Icon: FaDiagramProject, title: "Project", href: "/project" },
    { Icon: HiUsers, title: "Team", href: "/team" },
];

export const iconsBottom: IconBottomType[] = [
    { Icon: IoLogOut, title: "Logout" },
    // { Icon: FaMoon, title: "Toggle Dark Mode" },
];