import { Book, PenLine, ReceiptTextIcon, Smile } from 'lucide-react'
import React from 'react'
import { useGlobalContext } from '../context/context'

const Home = () => {
  const { onSent } = useGlobalContext()
  const HomeCards = [
    {
      prompt: "Tell me a joke",
      icon: <Smile />
    }, {
      prompt: "Draft an email to a recruiter to accept a job offer",
      icon: <PenLine />
    }, {
      prompt: "Give me a recipie for cheeseburger",
      icon: <ReceiptTextIcon />
    },
    {
      prompt: "Suggest me some great sci-fi novels",
      icon: <Book />
    }
  ]
  return (
    <>
      <div className='h-full w-full flex flex-col justify-center'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-4xl md:text-6xl w-max font-[Heading] font-semibold linear-bg'>Hello, mate</h1>
          <h1 className='text-4xl md:text-6xl font-[Heading] font-semibold leading-8 text-[#c4c7c5] dark:text-[#444746]'>How can I help you today?</h1>
        </div>
        <div className='w-full flex gap-2 mt-10 overflow-x-auto home-cards-bar'>
          {HomeCards.map((card, index) => {
            return (
              <div className="card h-[200px] min-w-[200px] max-w-[200px] flex flex-col justify-between bg-[#f0f4f9] dark:bg-[#1e1f20] rounded-xl p-4 hover:bg-slate-200 dark:hover:bg-[#393b3d] transition-all ease-in relative text-lg cursor-pointer" key={index}
                onClick={() => onSent(card.prompt)}>
                <h1>{card.prompt}</h1>
                <div className='w-max bg-white dark:bg-black p-2 rounded-full absolute bottom-6 right-4'>
                  {card.icon}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home