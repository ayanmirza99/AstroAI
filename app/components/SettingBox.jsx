"use client"
import { motion } from "framer-motion";
import { Link, Moon, Puzzle } from "lucide-react";
import { useState } from "react";

const SettingBox = ({ clicked }) => {
    const [dark, setDark] = useState(false)
    return (
        <>
            <motion.div
                animate={{
                    translateY: clicked ? 0 : "1rem",
                    opacity: clicked ? 1 : 0,
                    display: clicked ? "block" : "none",
                }}
                className="w-[19rem] h-[10rem]
                shadow-custom bg-[#e9eef6] rounded-lg absolute top-[-7rem] left-[3.5rem] z-40 p-2 text-[1rem]"
            >
                <div className="hover:bg-slate-200 rounded-lg p-2 flex items-center gap-2 cursor-pointer">
                    <Puzzle size={22} />
                    <p>Extension</p>
                </div>
                <div className="hover:bg-slate-200 rounded-lg p-2 flex items-center gap-2 cursor-pointer">
                    <Link size={22} />
                    <p>Public Links</p>
                </div>
                <div className="hover:bg-slate-200 rounded-lg p-2 flex items-center justify-between gap-2 cursor-pointer">
                    <div className="flex items-center gap-2">
                        <Moon size={22} />
                        <p>Drak Theme</p>
                    </div>
                    <div className={`h-[1.5em] w-[3em] bg-gray-300 p-[1px] rounded-full flex ${dark ? "flex-row-reverse" : ""}`}>
                        <motion.div className={`h-[1.4em] w-[1.4em] rounded-full ${dark ? "" : "bg-[#e9eef6]"}`} onClick={() => setDark(!dark)}></motion.div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default SettingBox