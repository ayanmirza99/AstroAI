"use client";
import { Menu, Send, User } from "lucide-react";
import React from "react";
import { useGlobalContext } from "./context/context";

const page = () => {
  const { setExpand, expand, mobileScreen } = useGlobalContext();

  return (
    <>
      <div className="w-full h-full p-6 flex flex-col gap-6 md:gap-10">
        <section className="flex items-center justify-between z-10">
          <div className="flex gap-4 items-center">
            {mobileScreen ? (
              <div className="hover:bg-slate-200 rounded-full p-2 transition-all ease-in" onClick={()=>setExpand(!expand)}>
                <Menu />
              </div>
            ) : (
              ""
            )}
            <h1 className="font-semibold text-2xl">AstroAI</h1>
          </div>
          <div className="rounded-full">
            <User className=""/>
          </div>
        </section>
        <section className="h-[90%] w-full flex items-center justify-center">
          <div className="h-full w-[90%] md:w-[60%]"></div>
        </section>
        <section className="flex justify-center items-center p-6 text-[1.5rem]">
          <div className="flex justify-between items-center gap-6 py-4 px-6 bg-[#f0f4f9] border w-[60%] rounded-full">
            <input className="bg-transparent h-full w-[90%] outline-none" placeholder="Enter a prompt here"/>
            <Send />
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
