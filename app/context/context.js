"use client";
import { useWindowWidth } from "@react-hook/window-size";
import { useTheme } from "next-themes";
import { createContext, useContext, useState } from "react";
import run from "../config/gemini";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [expand, setExpand] = useState(false);
  const { theme, setTheme } = useTheme();
  const screenWidth = useWindowWidth();
  const mobileScreen = screenWidth < 768;

  const [prompt, setPrompt] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async (prompt) => {
    try {
      setPrompt("");
      if (!prevPrompts.includes(prompt)) {
        setPrevPrompts([...prevPrompts, prompt]);
      }
      setLoading(true);
      setRecentPrompt(prompt);
      const res = await run(prompt);
      let responseArray = res.split("**");
      let newResponse;
      for (let i = 0; i < responseArray.length; i++) {
        if (i === "0" || i % 2 !== "1") {
          newResponse += responseArray[i];
        } else {
          newResponse += "<h1>" + responseArray[i] + "</h1>";
        }
      }
      let newResponse2 = newResponse.split("*").join("</br></br>");
      setResultData(newResponse2);

    } catch (error) {
      console.error("Error fetching response:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        onSent,
        prompt,
        setPrompt,
        recentPrompt,
        setRecentPrompt,
        prevPrompts,
        setPrevPrompts,
        showResult,
        setShowResult,
        loading,
        setLoading,
        resultData,
        setResultData,
        expand,
        setExpand,
        mobileScreen,
        theme,
        setTheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
