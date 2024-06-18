import { RiCloseLine, RiMenuFill, RiArrowLeftCircleLine, RiArrowRightCircleLine } from "@remixicon/react"
import { Icon } from "@tremor/react"
import { useEffect, useState } from "react"
import heroImg from './assets/imgs/mdi-hero.png'
import heroImg2 from './assets/imgs/mdi-hero3.png'
import heroImg3 from './assets/imgs/mdi-hero4.png'
import Carousel from "./components/Carousel"

// const slides = [
//   './assets/imgs/mdi-hero.png',
//   './assets/imgs/mdi-hero3.png',
//   './assets/imgs/mdi-hero4.png',
// ]

const slides = [
  heroImg,
  heroImg2,
  heroImg3
]

const App = () => {

  const [showNav, setShowNav] = useState(false)
  const [current, setCurrent] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = current === 0
    const newIndex = isFirstSlide ? slides.length - 1 : current - 1
    setCurrent(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = current === slides.length - 1
    const newIndex = isLastSlide ? 0 : current + 1
    setCurrent(newIndex)
  }

  return (
    <>
      <header className="w-[100%] fixed bg-transparent top-0 left-0 z-10">
        <nav className="h-10 flex justify-between items-center xl:max-w-[1280px] max-w-[850px] m-auto py-12">
          <a href="#" className="my-4 text-6xl text-slate-100">LOGO</a>
          {showNav 
          ?
          <div className="py-12 fixed top-0 left-0 w-[100%] bg-transparent backdrop-blur-lg md:text-slate-100 transition-all lg:flex lg:text-slate-950" id="nav-menu">
            <ul className="flex text-center flex-col gap-12">
              <li className="nav__item">
                <a href="#home" className="text-slate-100 font-bold">Inicio</a>
              </li>
              <li className="nav__item">
                <a href="#about" className="text-slate-100 font-bold">Servicios</a>
              </li>
              <li className="nav__item">
                <a href="#popular" className="text-slate-100 font-bold">Emergencia</a>
              </li>
              <li className="nav__item">
                <a href="#popular" className="text-slate-100 font-bold">Eventos</a>
              </li>
              <li className="nav__item">
                <a href="#explore" className="text-slate-100 font-bold">Turismo</a>
              </li>
            </ul>
            {/* CLOSE BUTTON */}
            <div onClick={() => setShowNav(false)} className="lg:hidden absolute top-[1rem] right-[3.5rem]" id="nav-close">
              <Icon icon={RiCloseLine} size="xl" color="slate-100"/>
            </div>
          </div>
          :
          <div>
             <ul className=" max-lg:hidden flex text-center gap-12">
              <li className="nav__item">
                <a href="#home" className="text-slate-100 hover:text-slate-200 hover:border-b-2 hover:pb-2 text-xl font-montserrat font-bold">Inicio</a>
              </li>
              <li className="nav__item">
                <a href="#about" className="text-slate-100 hover:text-slate-200 hover:border-b-2 hover:pb-2 text-xl font-montserrat font-bold">Servicios</a>
              </li>
              <li className="nav__item">
                <a href="#popular" className="text-slate-100 hover:text-slate-200 hover:border-b-2 hover:pb-2 text-xl font-montserrat font-bold">Emergencia</a>
              </li>
              <li className="nav__item">
                <a href="#explore" className="text-slate-100 hover:text-slate-200 hover:border-b-2 hover:pb-2 text-xl font-montserrat font-bold">Eventos</a>
              </li>
              <li className="nav__item">
                <a href="#explore" className="text-slate-100 hover:text-slate-200 hover:border-b-2 hover:pb-2 text-xl font-montserrat font-bold">Turismo</a>
              </li>
            </ul>
          </div>
          }
          {/* TOGGLE */}
          <div onClick={() => setShowNav(true)} className="nav__toggle lg:hidden" id="nav-toggle">
            <Icon icon={RiMenuFill} size="xl" color="slate-100"/>
          </div>
        </nav>
      </header>
      {/* HERO SECTION */}
      <section className="w-full">
        <div style={{backgroundImage: `url(${slides[current]})`}} className="w-full min-h-[100vh] bg-no-repeat bg-cover bg-left duration-500">
          <div className="min-h-[100vh] xl:max-w-[1280px] max-w-[850px]  flex justify-start items-center m-auto ">
            <div className="w-[45%]">
              <div className=" flex flex-col gap-12 bg-black bg-opacity-[0.6] px-12 py-24 fade rounded-xl w-[650px]">
                  <p className="text-xl text-slate-100 font-montserrat">Bienvenido a Islay</p>
                  <h2 className="text-[5rem] text-slate-100 font-bold font-popins mb-4 leading-[5.5rem]">Explore the <br /> World</h2>
                  <p className="text-xl text-slate-100 font-montserrat">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate nobis iusto amet tempore voluptatum quibusdam inventore molestias expedita quis ab error, enim tempora deleniti ipsa est.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
            <button className="p-2 bg-slate-800 rounded-full opacity-80" onClick={prevSlide}>    
                <Icon icon={RiArrowLeftCircleLine} size="xl" color="slate-100"/>
            </button>
            <button className="p-2 bg-slate-800 rounded-full opacity-80" onClick={nextSlide}>    
                <Icon icon={RiArrowRightCircleLine} size="xl" color="slate-100"/>
            </button>
        </div>
      </section>
      {/* <section>
        Servicios
      </section> */}
    </>
  )
}

export default App
