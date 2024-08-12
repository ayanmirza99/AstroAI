import React from 'react'
import { useGlobalContext } from '../context/context';
import { Send } from 'lucide-react';

const PromptField = () => {
    const {
        onSent,
        loading,
        prompt,
        setPrompt,
    } = useGlobalContext();
    return (
        <div className="flex justify-between items-center gap-6 py-2 md:py-4 px-6 bg-[#f0f4f9] w-full lg:w-[60%] text-[1.2rem] sm:text-[1.5rem] dark:bg-[#1e1f20] rounded-full shadow-md">
            <textarea
                className="bg-transparent h-[2.2rem] sm:h-11 w-full outline-none overflow-y-scroll resize-none scrollbar"
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
    )
}

export default PromptField