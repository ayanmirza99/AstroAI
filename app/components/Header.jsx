import React from 'react'
import { useGlobalContext } from '../context/context';
import { Menu } from 'lucide-react';

const Header = () => {
    const {
        setExpand,
        expand,
        mobileScreen,
    } = useGlobalContext();
    return (
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
            <h1 className="font-semibold text-3xl linear-bg">AstroAI</h1>
        </div>
    )
}

export default Header