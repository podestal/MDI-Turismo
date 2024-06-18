import { RiCloseLine, RiMenuFill } from "@remixicon/react"
import { Icon } from "@tremor/react"
import { useEffect, useState } from "react"
import heroImg from './assets/imgs/mdi-hero.png'

const App = () => {

  const [showNav, setShowNav] = useState(false)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true)
    }, 1000)
  }, [])

  return (
    <>
      <header className="w-[100%] fixed bg-transparent top-0 left-0 z-10">
        <nav className="h-10 flex justify-between items-center xl:max-w-[1280px] max-w-[850px] m-auto py-12">
          <a href="#" className="m-4 text-2xl text-slate-100">LOGO</a>
          {showNav 
          ?
          <div className="py-12 fixed top-0 left-0 w-[100%] bg-slate-950 backdrop:blur-xl md:text-slate-100 transition-all lg:flex lg:text-slate-950" id="nav-menu">
            <ul className="flex text-center flex-col gap-12">
              <li className="nav__item">
                <a href="#home" className="text-slate-100 font-bold">Explore</a>
              </li>
              <li className="nav__item">
                <a href="#about" className="text-slate-100 font-bold">About</a>
              </li>
              <li className="nav__item">
                <a href="#popular" className="text-slate-100 font-bold">Popular</a>
              </li>
              <li className="nav__item">
                <a href="#explore" className="text-slate-100 font-bold">Explore</a>
              </li>
            </ul>
            {/* CLOSE BUTTON */}
            <div onClick={() => setShowNav(false)} className="lg:hidden absolute top-[1rem] right-[1.5rem]" id="nav-close">
              <Icon icon={RiCloseLine} size="md"/>
            </div>
          </div>
          :
          <div>
             <ul className=" max-lg:hidden flex text-center gap-12">
              <li className="nav__item">
                <a href="#home" className="text-slate-100 hover:text-slate-200 hover:border-b-2 hover:pb-2 text-xl font-poppins">Explore</a>
              </li>
              <li className="nav__item">
                <a href="#about" className="text-slate-100 hover:text-slate-200 hover:border-b-2 hover:pb-2 text-xl font-poppins">About</a>
              </li>
              <li className="nav__item">
                <a href="#popular" className="text-slate-100 hover:text-slate-200 hover:border-b-2 hover:pb-2 text-xl font-poppins">Popular</a>
              </li>
              <li className="nav__item">
                <a href="#explore" className="text-slate-100 hover:text-slate-200 hover:border-b-2 hover:pb-2 text-xl font-poppins">Explore</a>
              </li>
            </ul>
          </div>
          }
          {/* TOGGLE */}
          <div onClick={() => setShowNav(true)} className="nav__toggle lg:hidden" id="nav-toggle">
            <Icon icon={RiMenuFill} size="md"/>
          </div>
        </nav>
      </header>
      <section>
        <div className="w-full min-h-[100vh] bg-[url('./assets/imgs/mdi-hero4.png')] bg-no-repeat bg-cover bg-left">
          <div className="min-h-[100vh] xl:max-w-[1280px] max-w-[850px]  flex justify-start items-center m-auto ">
            <div className="w-[45%]">
              <div className=" flex flex-col gap-12 bg-black bg-opacity-40 px-12 py-24 fade     w-[650px]">
                  <p className="text-xl text-slate-100 font-montserrat">Bienvenido a Islay</p>
                  <h2 className="text-[5rem] text-slate-100 font-bold font-popins mb-4 leading-[5.5rem]">Explore the <br /> World</h2>
                  <p className="text-xl text-slate-100 font-montserrat">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate nobis iusto amet tempore voluptatum quibusdam inventore molestias expedita quis ab error, enim tempora deleniti ipsa est.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-h-[100vh] bg-[url('./assets/imgs/mdi-hero3.png')] bg-no-repeat bg-cover bg-left">
          <div className="min-h-[100vh] xl:max-w-[1280px] max-w-[850px]  flex justify-start items-center m-auto ">
            <div className="w-[45%]">
              <div className=" flex flex-col gap-12 bg-black bg-opacity-40 px-12 py-24 fade     w-[650px]">
                  <p className="text-xl text-slate-100 font-montserrat">Bienvenido a Islay</p>
                  <h2 className="text-[5rem] text-slate-100 font-bold font-popins mb-4 leading-[5.5rem]">Explore the <br /> World</h2>
                  <p className="text-xl text-slate-100 font-montserrat">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate nobis iusto amet tempore voluptatum quibusdam inventore molestias expedita quis ab error, enim tempora deleniti ipsa est.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-h-[100vh] bg-[url('./assets/imgs/mdi-hero.png')] bg-no-repeat bg-cover bg-left">
          <div className="min-h-[100vh] xl:max-w-[1280px] max-w-[850px]  flex justify-start items-center m-auto ">
            <div className="w-[45%]">
              <div className=" flex flex-col gap-12 bg-black bg-opacity-40 px-12 py-24 fade     w-[650px]">
                  <p className="text-xl text-slate-100 font-montserrat">Bienvenido a Islay</p>
                  <h2 className="text-[5rem] text-slate-100 font-bold font-popins mb-4 leading-[5.5rem]">Explore the <br /> World</h2>
                  <p className="text-xl text-slate-100 font-montserrat">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate nobis iusto amet tempore voluptatum quibusdam inventore molestias expedita quis ab error, enim tempora deleniti ipsa est.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
