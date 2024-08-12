"use client";
import { useGlobalContext } from "./context/context";
import Response from "./components/Response";
import Home from "./components/Home";
import PromptField from "./components/PromptField";
import Header from "./components/Header";

const page = () => {
  const { showResult } = useGlobalContext();

  return (
    <>
      <div className="w-full h-full p-4 md:p-6 flex flex-col gap-6 md:gap-10">
        <section className="flex items-center justify-between z-10">
          <Header />
        </section>
        <section className="h-full w-full flex items-center justify-center overflow-y-auto overflow-x-hidden scrollbar">
          <div className="h-full w-[90%] md:w-[60%]">
            {showResult ? <Response /> : <Home />}
          </div>
        </section>
        <section className="flex justify-center items-center p-2 text-[1.5rem]">
          <PromptField />
        </section>
      </div>
    </>
  );
};

export default page;
