"use client"
import { MenuIcon, Plus, Settings } from 'lucide-react'
import React, { useState } from 'react'
import { useGlobalContext } from '../context/context'
import SettingBox from './SettingBox'

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [clicked, setClicked] = useState(false)
  const { expand, mobileScreen } = useGlobalContext();
  return (
    <>
      {mobileScreen ? (
        <div className={`absolute h-screen flex flex-col w-[300px] top-0 gap-8 ${expand ? "left-0" : "left-[-300px]"} px-4 pt-24 border-r transition-all ease-in duration-200 bg-[#f0f4f9]`}>
          <div className={`p-4 bg-[#dde3ea] rounded-full flex gap-4 items-center text-sm font-semibold cursor-pointer transition-all`}>
            <Plus />New Chat
          </div>
          <section className={`h-[60%] p-4`}>
          <h1 className='text-lg'>Recent Chats</h1>
          <div className='overflow-y-auto'></div>
          </section>
          <section className={`relative flex items-center text-xl gap-4 p-4 rounded-lg transition-all ${clicked ? "" : "hover:bg-slate-200"}`} onClick={() => setClicked(!clicked)}>
            <Settings />Settings
            <SettingBox clicked={clicked} />
          </section>
        </div>
      ) : (
        <div className={`h-screen flex flex-col gap-8 ${isCollapsed ? "w-[80px] items-center" : "w-[300px]"} p-4 border-r transition-all ease-in duration-200 bg-[#f0f4f9]`}>
          <div>
            <button onClick={() => setIsCollapsed(!isCollapsed)} className='hover:bg-slate-200 rounded-full p-2 transition-all ease-in'>
              <MenuIcon className='size-8' />
            </button>
          </div>
          <div className={`${isCollapsed ? "" : "w-[150px]"} p-4 bg-[#dde3ea] rounded-full flex gap-4 items-center text-sm font-semibold cursor-pointer transition-all`}>
            <Plus />
            {isCollapsed ? "" : "New Chat"}
          </div>
          <section className={`h-[60%] p-4 ${isCollapsed ? "invisible" : "visible delay-200 duration-500 transition-all ease-in-out"} `}>
            <h1 className='text-lg'>Recent Chats</h1>
            <div className='overflow-y-auto'></div>
          </section>
          <section className={`relative flex items-center text-xl gap-4 p-4 rounded-lg transition-all ${clicked ? "" : "hover:bg-slate-200"}`} onClick={() => setClicked(!clicked)}>
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