"use client"
import { motion } from "framer-motion";
import { Link, Moon, Puzzle } from "lucide-react";
// import { useGlobalContext } from "../context/context";
import { useState } from "react";
import { useTheme } from "next-themes";

const SettingBox = ({ clicked }) => {
    const {resolvedTheme, theme, setTheme } = useTheme();
    const [toggle, setToggle] = useState(false)
    const clickHandler = () => {
        setToggle(!toggle)
        setTheme(resolvedTheme === "light" ? "dark": "light")
    }

    return (
        <>
            <motion.div
                animate={{
                    translateY: clicked ? 0 : "1rem",
                    opacity: clicked ? 1 : 0,
                    display: clicked ? "block" : "none",
                }}
                className="w-[19rem] h-[10rem]
                shadow-custom bg-[#e9eef6] dark:bg-[#1e1f20] dark:text-white rounded-lg absolute top-[-7rem] left-[3rem] md:left-[3.5rem] z-40 p-2 text-[1rem]"
            >
                <div className="hover:bg-slate-200 dark:hover:bg-[#393b3d] rounded-lg p-2 flex items-center gap-2 cursor-pointer">
                    <Puzzle size={22} />
                    <p>Extension</p>
                </div>
                <div className="hover:bg-slate-200 dark:hover:bg-[#393b3d] rounded-lg p-2 flex items-center gap-2 cursor-pointer">
                    <Link size={22} />
                    <p>Public Links</p>
                </div>
                <div className="hover:bg-slate-200 dark:hover:bg-[#393b3d] rounded-lg p-2 flex items-center justify-between gap-2 cursor-pointer">
                    <div className="flex items-center gap-2">
                        <Moon size={22} />
                        <p>Drak Theme</p>
                    </div>
                    <div className={`h-[1.5em] w-[3em] bg-gray-300 dark:bg-[#1f75e9] p-[1px] rounded-full flex ${toggle ? "flex-row-reverse" : ""}`} onClick={clickHandler}>
                        <motion.div className={`h-[1.4em] w-[1.4em] rounded-full bg-[#e9eef6] dark:bg-[#acebfa]`} ></motion.div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default SettingBox