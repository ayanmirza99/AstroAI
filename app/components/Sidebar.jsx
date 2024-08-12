"use client"
import { MenuIcon, MessageSquare, Plus, Settings } from 'lucide-react'
import React, { useState } from 'react'
import { useGlobalContext } from '../context/context'
import SettingBox from './SettingBox'

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [clicked, setClicked] = useState(false)
  const { expand, setExpand, mobileScreen, prevPrompts, recentPrompt, onSent, setShowResult, setRecentPrompt } = useGlobalContext();
  return (
    <>
      {mobileScreen ? (
        <div className={`absolute z-10 h-screen flex flex-col w-[300px] top-0 gap-8 ${expand ? "left-0" : "left-[-300px]"} px-4 pt-24 border-r dark:border-[#1e1f20] transition-all ease-in duration-200 bg-[#f0f4f9] dark:bg-[#1e1f20]`}>
          <div className={`p-4 bg-[#dde3ea] dark:bg-[#393b3d] rounded-full flex gap-4 items-center text-sm font-semibold cursor-pointer transition-all`} onClick={() => {
            setShowResult(false)
            setExpand(false)
            setRecentPrompt('')
          }}>
            <Plus />New Chat
          </div>
          <section className={`h-[70%] p-4 flex flex-col gap-6`}>
            <h1 className='text-lg font-semibold text-gray-500 dark:text-gray-200'>Recent</h1>
            <div className='overflow-y-auto flex flex-col gap-2'>
              {prevPrompts.map((item, key) => {
                return (
                  <div className={`w-[98%] py-2 px-4 font-semibold ${item === recentPrompt ? "bg-[#d3e3fd] hover:bg-[#d3e3fd] dark:bg-[#1f75e9] dark:hover:bg-[#1f75e9]" : "hover:bg-slate-200 dark:hover:bg-[#393b3d]"} flex items-center gap-2 rounded-full`} key={key} onClick={() => {
                    recentPrompt !== item ? onSent(item) : ""
                  }}>
                    <MessageSquare />
                    <h2>{item.slice(0, 15) + "..."}</h2>
                  </div>
                )
              })}
            </div>
          </section>
          <section className={`relative flex items-center text-xl gap-4 p-4 rounded-lg transition-all ${clicked ? "" : "hover:bg-slate-200 dark:hover:bg-[#393b3d]"}`} onClick={() => setClicked(!clicked)}>
            <Settings />Settings
            <SettingBox clicked={clicked} />
          </section>
        </div>
      ) : (
        <div className={`h-screen flex flex-col gap-8 ${isCollapsed ? "w-[80px] items-center" : "w-[400px]"} p-4 border-r dark:border-[#1e1f20] transition-all ease-in duration-200 bg-[#f0f4f9] dark:bg-[#1e1f20]`}>
          <div>
            <button onClick={() => setIsCollapsed(!isCollapsed)} className='hover:bg-slate-200 dark:hover:bg-[#393b3d] rounded-full p-2 transition-all ease-in'>
              <MenuIcon className='size-8' />
            </button>
          </div>
          <div className={`${isCollapsed ? "" : "w-[150px]"} p-4 bg-[#dde3ea] dark:bg-[#393b3d] rounded-full flex gap-4 items-center text-sm font-semibold cursor-pointer transition-all`} onClick={() => {
            setShowResult(false)
            setRecentPrompt("")
          }
          }>
            <Plus />
            {isCollapsed ? "" : "New Chat"}
          </div>
          <section className={`h-[70%] py-4 ${isCollapsed ? "invisible" : "visible delay-200 duration-500 transition-all ease-in-out flex flex-col gap-6"} `}>
            <h1 className='text-lg font-semibold text-gray-500 dark:text-gray-200'>Recent Chats</h1>
            <div className='overflow-y-auto flex flex-col gap-2 scrollbar'>
              {prevPrompts.map((item, key) => {
                return (
                  <div className={`w-[98%] py-2 px-4 font-semibold ${item === recentPrompt ? "bg-[#d3e3fd] hover:bg-[#d3e3fd] dark:bg-[#1f75e9] dark:hover:bg-[#1f75e9]" : "hover:bg-slate-200 dark:hover:bg-[#393b3d]"} flex gap-2 rounded-full`} key={key} onClick={() => {
                    recentPrompt !== item ? onSent(item) : ""
                  }}>
                    <MessageSquare />
                    <h2>{item.slice(0, 15) + "..."}</h2>
                  </div>
                )
              })}
            </div>
          </section>
          <section className={`relative flex items-center text-xl gap-4 p-4 rounded-lg transition-all ${clicked ? "" : "hover:bg-slate-200 dark:hover:bg-[#393b3d]"}`} onClick={() => setClicked(!clicked)}>
            <Settings />
            {isCollapsed ? "" : "Settings"}
            <SettingBox clicked={clicked} />
          </section>
        </div>
      )}
    </>
  )
}

export default Sidebar