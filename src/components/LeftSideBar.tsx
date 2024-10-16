"use client";
import { iconsBottom, iconsTop } from "@/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LeftSideBar = () => {
  const pathname = usePathname();
  if (pathname.startsWith(`/auth`)) {
    return <></>;
  }
  return (
    <div className="hidden md:flex flex-col bg-[#1B396E] min-h-screen min-w-fit p-5 lg:p-[20px_5px_20px_20px] justify-between overflow-y-auto">
      <div>
        <div className="py-10 flex flex-col gap-10">
          <h1 className="text-white text-2xl text-center font-semibold">
            CyberPro
          </h1>
          <hr className="py-[2px] bg-white" />
        </div>
        {iconsTop.map((item) => {
          const Icon = item.Icon;
          const isActive =
            pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              href={item.href}
              key={item.href}
              className="h-[40px] text-white flex items-center justify-between gap-3 cursor-pointer md:w-fit lg:min-w-[250px]"
            >
              <div
                className={`flex items-center gap-2 text-[15px] lg:text-[18px] ${
                  isActive ? "text-[#1ABC9C]" : "text-white"
                }`}
              >
                <Icon />
                <span>{item.title}</span>
              </div>
              {isActive && (
                <div className="hidden lg:flex h-[25px] w-[2px] bg-[#1ABC9C]" />
              )}
            </Link>
          );
        })}
      </div>
      <div>
        {iconsBottom.map((item) => {
          const Icon = item.Icon;

          return (
            <button
              key={item.title}
              className="h-[40px] text-white flex items-center justify-between gap-3 cursor-pointer md:w-fit lg:min-w-[250px]"
              onClick={
                item.title === "Logout"
                  ? () => {
                      localStorage.removeItem("ffa-admin");
                      window.location.href = "/auth/login";
                    }
                  : undefined
              }
            >
              <div className="flex items-center gap-2 text-[15px] lg:text-[18px]">
                <Icon />
                <span>{item.title}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LeftSideBar;
