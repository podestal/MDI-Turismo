import { RiCloseLine, RiMenuFill, RiArrowLeftCircleLine, RiArrowRightCircleLine } from "@remixicon/react"
import { Icon } from "@tremor/react"
import { useEffect, useRef, useState } from "react"
import heroImg from './assets/imgs/mdi-hero.png'
import heroImg2 from './assets/imgs/mdi-hero3.png'
import heroImg3 from './assets/imgs/mdi-hero4.png'
import heroImg4 from './assets/imgs/mdi-hero5.png'
import evento1 from './assets/imgs/evento-1.jpeg'
import evento2 from './assets/imgs/evento-2.jpeg'
import Carousel from "./components/Carousel"
import useIsVisible from "./hooks/useIsVisible"
import { Map, AdvancedMarker } from "@vis.gl/react-google-maps"

// const slides = [
//   './assets/imgs/mdi-hero.png',
//   './assets/imgs/mdi-hero3.png',
//   './assets/imgs/mdi-hero4.png',
// ]

const slides = [
  heroImg3,
  heroImg,
  heroImg2,
  heroImg4
]

const App = () => {

  const position = { lat: -17.000, lng: -72.096 }

  const ref1 = useRef()
  const isVisible1 = useIsVisible(ref1)
  const ref2 = useRef()
  const isVisible2 = useIsVisible(ref2)
  const ref3 = useRef()
  const isVisible3 = useIsVisible(ref3)

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
      <header className="w-[100%] fixed bg-transparent top-0 left-0 z-10 scroll-m-1:bg-red-500 backdrop-blur-md">
        <nav className="h-10 flex justify-between items-center xl:max-w-[1280px] max-w-[850px] m-auto py-12 ">
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
                <a href="#eventos" className="text-slate-100 hover:text-slate-200 hover:border-b-2 hover:pb-2 text-xl font-montserrat font-bold">Eventos</a>
              </li>
              <li className="nav__item">
                <a href="#turismo" className="text-slate-100 hover:text-slate-200 hover:border-b-2 hover:pb-2 text-xl font-montserrat font-bold">Turismo</a>
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
        <div style={{backgroundImage: `url(${slides[current]})`}} className="w-full min-h-[100vh] bg-no-repeat bg-cover bg-left bg-fixed duration-500">
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
      {/* MAPS */}
      {/* <div className="h-[50vh]">
        <Map zoom={17} center={position} mapId={'5b0544206c64700'}>
          <AdvancedMarker position={position}>

          </AdvancedMarker>
        </Map>
      </div> */}
      <section id="eventos" className={`flex flex-col justify-center items-center xl:max-w-[1280px] max-w-[850px] mx-auto my-20`}>

        <h3 ref={ref1} className={`text-6xl font-montserrat font-bold mt-[7rem] transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>Eventos</h3>
        <div ref={ref1} className={`w-[50%] self-start flex justify-between items-center mt-12 rounded-3xl gap-10 border shadow-2xl transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
          <div className="w-full relative z-10">
          <div style={{backgroundImage: `url(${slides[current]})`}} className="absolute w-full opacity-20 h-[100%] z-0 bg-cover rounded-3xl">
        </div>
            <h3 className="text-4xl font-poppins font-semibold my-10 px-10">Viernes 28 de Julio</h3>
            <ul className="px-10">
              <li className="grid grid-cols-3 gap-10 my-4">
                <p className="text-xl font-semibold">10:00 am: </p>
                <div className="col-span-2">
                  <p className="text-xl">Desfile Cívico Escolar Militar</p>
                  <p className="text-xl">Avenida Arequipa</p>
                </div>
              </li>
              <li className="grid grid-cols-3 gap-10 my-4">
                <p className="text-xl font-semibold">12:00 pm: </p>
                <div className="col-span-2">
                  <p className="text-xl">Santos Sabores | Festival Gastronómico</p>
                  <p className="text-xl">Plaza Miguel Grau</p>
                </div>
              </li>
              <li className="grid grid-cols-3 gap-10 my-4">
                <p className="text-xl font-semibold">03:00 pm: </p>
                <div className="col-span-2">
                  <p className="text-xl">Pasacalle Folclórico</p>
                  <p className="text-xl">"San Pedro y San Pablo"</p>
                  <p className="text-xl">Avenida Arequipa</p>
                </div>
              </li>
              <li className="grid grid-cols-3 gap-10 my-4">
                <p className="text-xl font-semibold">07:00 pm: </p>
                <div className="col-span-2">
                  <p className="text-xl">Misa de Vísperas</p>
                  <p className="text-xl">Templo Señor del Mar</p>
                </div>
              </li>
              <li className="grid grid-cols-3 gap-10 my-4">
                <p className="text-xl font-semibold">08:00 pm: </p>
                <div className="col-span-2">
                  <p className="text-xl">Noche de Talentos: Tradición del Mar</p>
                  <p className="text-xl">Plaza Miguel Grau</p>
                </div>
              </li>
              <li className="grid grid-cols-3 gap-10 my-4">
                <p className="text-xl font-semibold">09:00 pm: </p>
                <div className="col-span-2">
                  <p className="text-xl">San Pedro y San Pablo Tradición del Mar Serenata</p>
                  <p className="text-xl">Avenida Arequipa</p>
                </div>
              </li>
            </ul>
          </div>
          {/* <div className="w-[50%]">
            <img src={heroImg} alt="" />
          </div> */}
        </div>
        <div ref={ref2} className={`w-[50%] flex justify-center items-center self-end mt-12 rounded-3xl p-10 gap-10 border shadow-2xl transition-opacity ease-in duration-700 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
        {/* <div className="w-[50%]">
          <img src={heroImg} alt="" />
        </div> */}
        <div className="w-full">
            <h3 className="text-4xl font-poppins font-semibold my-10">Viernes 29 de Julio</h3>
            <ul>
              <li className="grid grid-cols-3 gap-10 my-4">
                <p className="text-xl font-semibold">10:00 am: </p>
                <div className="col-span-2">
                  <p className="text-xl">Desfile Cívico Escolar Militar</p>
                  <p className="text-xl">Avenida Arequipa</p>
                </div>
              </li>
              <li className="grid grid-cols-3 gap-10 my-4">
                <p className="text-xl font-semibold">12:00 pm: </p>
                <div className="col-span-2">
                  <p className="text-xl">Santos Sabores | Festival Gastronómico</p>
                  <p className="text-xl">Plaza Miguel Grau</p>
                </div>
              </li>
              <li className="grid grid-cols-3 gap-10 my-4">
                <p className="text-xl font-semibold">03:00 pm: </p>
                <div className="col-span-2">
                  <p className="text-xl">Pasacalle Folclórico</p>
                  <p className="text-xl">"San Pedro y San Pablo"</p>
                  <p className="text-xl">Avenida Arequipa</p>
                </div>
              </li>
              <li className="grid grid-cols-3 gap-10 my-4">
                <p className="text-xl font-semibold">07:00 pm: </p>
                <div className="col-span-2">
                  <p className="text-xl">Misa de Vísperas</p>
                  <p className="text-xl">Templo Señor del Mar</p>
                </div>
              </li>
              <li className="grid grid-cols-3 gap-10 my-4">
                <p className="text-xl font-semibold">08:00 pm: </p>
                <div className="col-span-2">
                  <p className="text-xl">Noche de Talentos: Tradición del Mar</p>
                  <p className="text-xl">Plaza Miguel Grau</p>
                </div>
              </li>
              <li className="grid grid-cols-3 gap-10 my-4">
                <p className="text-xl font-semibold">09:00 pm: </p>
                <div className="col-span-2">
                  <p className="text-xl">San Pedro y San Pablo Tradición del Mar Serenata</p>
                  <p className="text-xl">Avenida Arequipa</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="w-full h-[100vh] bg- bg-center bg-no-repeat rounded-lg" style={{backgroundImage: `url(${evento1})`}}></div>
        <div className="w-full h-[100vh] bg-center bg-no-repeat rounded-lg" style={{backgroundImage: `url(${evento2})`}}></div> */}
      </section>
      <section className="h-[100vh]">
        <p>Turismo</p>
        <p>- Bosque de piedras</p>
        <p>- Islas Alvisuri</p>
        <p>- Caleta</p>
      </section>
      <section className={`flex flex-col justify-center items-center w-full `}>
        {console.log('isVisible1', isVisible2)}
        <p className="text-6xl">Eventos</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cumque vitae perspiciatis rem eaque dicta repellendus quas, inventore assumenda ex quod voluptatibus quae, tenetur quo, quia facere dolores. Cum, sint.</p>
      </section>
      <section className="h-[100vh]">
        Emergencia
      </section>
      <section>
        Servicios
      </section>
      <section ref={ref3} className={`flex justify-center items-center w-full h-[100vh] op transition-opacity ease-in duration-700 ${isVisible3 ? "opacity-100" : "opacity-0"}`}>
        {console.log('isVisible1', isVisible3)}
        <p className="text-6xl">Eventos</p>
      </section>
    </>
  )
}

export default App
