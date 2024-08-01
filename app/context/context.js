"use client";
import { useWindowWidth } from "@react-hook/window-size";
import { useTheme } from "next-themes";
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [expand, setExpand] = useState(false);
  const { theme, setTheme } = useTheme();
  const screenWidth = useWindowWidth();
  const mobileScreen = screenWidth < 768;

  return (
    <GlobalContext.Provider
      value={{
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
