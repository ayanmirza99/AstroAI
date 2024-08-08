"use client";
import { Menu, Send, User } from "lucide-react";
import { useGlobalContext } from "./context/context";

const page = () => {
  const {
    onSent,
    recentPrompt,
    loading,
    resultData,
    prompt,
    setPrompt,
    setExpand,
    expand,
    mobileScreen,
  } = useGlobalContext();

  return (
    <>
      <div className="w-full h-full p-6 flex flex-col gap-6 md:gap-10">
        <section className="flex items-center justify-between z-10">
          <div className="flex gap-4 items-center">
            {mobileScreen ? (
              <div
                className="hover:bg-slate-200 dark:hover:bg-[#393b3d] rounded-full p-2 transition-all ease-in"
                onClick={() => setExpand(!expand)}
              >
                <Menu />
              </div>
            ) : (
              ""
            )}
            <h1 className="font-semibold text-2xl">AstroAI</h1>
          </div>
          <div className="rounded-full">
            <User className="" />
          </div>
        </section>
        <section className="h-full w-full flex items-center justify-center overflow-y-auto">
          <div className="h-full w-[90%] md:w-[60%]">
            <div>
              {loading && (
                <>
                  <p>{recentPrompt}</p>
                  <p>Loading...</p>
                </>
              )}
              {!loading && (
                <>
                  <p>{recentPrompt}</p>
                  <h2 dangerouslySetInnerHTML={{__html: resultData}}></h2>
                </>
              )}
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center p-2 md:p-4 text-[1.5rem]">
          <div className="flex justify-between items-center gap-6 py-2 md:py-4 px-6 bg-[#f0f4f9] w-full lg:w-[60%] text-[1.2rem] sm:text-[1.5rem] dark:bg-[#1e1f20] rounded-full">
            <textarea
              className="bg-transparent h-10 sm:h-11 w-full outline-none overflow-y-scroll resize-none scrollbar"
              placeholder="Enter a prompt here"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button
              disabled={loading || prompt === "" ? true : false}
              onClick={() => onSent(prompt)}
            >
              <Send />
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
