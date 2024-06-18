import { RiArrowLeftCircleLine, RiArrowRightCircleLine } from "@remixicon/react"
import { Icon } from "@tremor/react"
import { useState } from "react"

const Carousel = ({ children: slides }) => {

    const [curr, setCurr] = useState(0)

    const prev = () => setCurr(curr => curr === 0 ? slides.length - 1: curr - 1)
    const next = () => setCurr(curr => curr === slides.length - 1 ? 0 : curr + 1)

  return (
    <div className='relative overflow-hidden'>
        <div 
            className='flex transition-transform ease-out duration-500'
            style={{ transform: `translateX(-${curr*100}%)` }}
        >{slides}</div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
            <button className="p-2 bg-slate-700 rounded-full opacity-70" onClick={prev}>    
                <Icon icon={RiArrowLeftCircleLine} size="xl" color="slate-100"/>
            </button>
            <button className="p-2 bg-slate-700 rounded-full opacity-70" onClick={next}>    
                <Icon icon={RiArrowRightCircleLine} size="xl" color="slate-100"/>
            </button>
        </div>
    </div>
  )
}

export default Carousel