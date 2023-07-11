import React, {useState, useEffect} from 'react'
import "../style/home.css"
import 'bootstrap/dist/css/bootstrap.css';
import elipse from "../assets/elipse.png"
import {BiSolidUpArrow} from "react-icons/bi"
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import { FaRobot } from "react-icons/fa"
import { AiOutlineThunderbolt } from "react-icons/ai"


function Home() {


  const [makeBtnApear , setMakeBtnApear] = useState(false)
  const [startApear, setStartApear] = useState("")
  const [animationPlayed , setAnimationPlayed] = useState(false)

  useEffect(()=>{

    const showBtn = () => {
      if (window.scrollY >= 710){
        setMakeBtnApear(true)
      }else {
        setMakeBtnApear(false)
      }
      if(window.scrollY >= 50 && !animationPlayed){
        setStartApear("start-animation")
        setAnimationPlayed(true)
      }
    }

    window.addEventListener("scroll" , showBtn)

    return () => {
      window.removeEventListener("scroll" , showBtn) // this is the clearning mechanism in the useEffect hook
    }
    
  }, [])



  const handleClick = (btnName) => {
    if(btnName === "backToTop"){
      window.scrollTo({
        left : 0,
        top : 0,
        behavior: "smooth"  // so the button will go back smothly which gives a good UX
      })
    } else if(btnName === "portfolio"){
      window.scrollTo({
        left : 0,
        top : 1860,
        behavior: "smooth"  // so the button will go back smothly which gives a good UX
      })
    } else if (btnName === "contact"){
      window.scrollTo({
        left : 0,
        top : 2700,
        behavior: "smooth"  // so the button will go back smothly which gives a good UX
      })
    }
  }

  return (
    
    <div className='container Home-container text-start'> {/* the main container which has everything */}
      <div className='container2 d-flex' style={{flex:"row"}}>
        <div className='elipse-container col-5'>
        <img src={elipse} className='elipse-img' alt='elipse image' />  {/* here I added the elipse image (which I may change later on) and added the bg in the css */}
        </div>
        <div className='intro col-sm-7 col-12 '>  {/* this is the intro div in which we have thtxt only */}
            <div className='col-9 intro-div'>
            <div className='Home-developer'><h6>front-end developer </h6><HiOutlineArrowNarrowLeft className='developer-arrow' color='#868686' size={30} /></div>
            <h1>Mohammed adel</h1>
            <p>I am Mohammed Adel, a passionate front-end web developer committed to continuous learning and improving the quality of my work. I enjoy expanding my knowledge through reading and prioritize maintaining a healthy mind and body. Let's create exceptional web experiences together.</p>
            <div className='d-flex flex-row'> {/* this div is for the two buttons, padding is added in the css */}
            <button className='portfolio' onClick={()=> handleClick("portfolio")}>portfolio</button>
            <button className='contact' onClick={()=> handleClick("contact")}>contact</button>
            </div>
            </div>
            <div className={` start-txt text-light text-start ${startApear}`}>
              <div className='d-flex flex-row'>
              </div>
            <h1 className='display-4'>let's start</h1>
            <h1 className='display-4 arrow'>⬇</h1>
            </div>
        </div>
      </div>
      <button className={`backToTop ${makeBtnApear ? "btnApear" : ""}`} onClick={() => handleClick("backToTop")}>
        <BiSolidUpArrow className='arrow' style={{width:"40"}} />
      </button>
      <AiOutlineThunderbolt  className='Home-thunder' color='rgb(87, 65, 255)' size={80} />

    </div>
  )
}

export default Home
