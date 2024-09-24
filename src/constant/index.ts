import { FaChartBar } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { HiSaveAs } from "react-icons/hi";
import { FaDiagramProject } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";

import { IoLogOut } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

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
    { Icon: FaChartBar, title: "Dashboard", href: "/" },
    { Icon: FaUserEdit, title: "Student Registration", href: "/student_registration" },
    { Icon: HiSaveAs, title: "Our Blog", href: "/ourBlog" },
    { Icon: FaDiagramProject, title: "Project", href: "/project" },
    { Icon: HiUsers, title: "Team", href: "/team" },
];

export const iconsBottom: IconBottomType[] = [
    { Icon: IoLogOut, title: "Logout" },
    { Icon: FaMoon, title: "Toggle Dark Mode" },
];