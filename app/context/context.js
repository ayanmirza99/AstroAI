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
  const [resultData, setResultData] = useState([]);
  const [error, setError] = useState(false);

  const onSent = async (prompt) => {
    setShowResult(true);
    try {
      setPrompt("");
      if (!prevPrompts.includes(prompt)) {
        setPrevPrompts([...prevPrompts, prompt]);
      }
      setLoading(true);
      setRecentPrompt(prompt);
      const res = await run(prompt);
      let responseArray = res.split("\n");
      let arr = responseArray.map((line) => {
        return line.replace("**", "");
      });
      let arr1 = arr.map((line) => {
        return line.replace("**", "");
      });
      setResultData(arr1);
    } catch (error) {
      setError(true);
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
        error,
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
