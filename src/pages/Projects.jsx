import React, {useEffect, useState} from 'react'
import "../style/projects.css"
import { AiOutlinePhone } from "react-icons/ai"

function Projects() {

    const [titleApear, setTitleApear] = useState("")
    const [animationPlayed , setAnimationPlayed] = useState(false)
    const [activeBtn , setActiveBtn] = useState("All")
    const [displayedProjects , setDisplayedProjects] = useState([])

    const handleClick = (btnName) => { /* in this function we take a paramater from the 3 button All, HTML/CSS/Js and Swift and we show the result based on what is in the button */
        setActiveBtn(btnName)

        if (btnName === "Swift"){
          setDisplayedProjects([
            <div className='project col-4'>
            <img alt='project-img' src='https://i.pcmag.com/imagery/articles/01abVazkJYMkPh8uWB8F4ej-10..v1631218496.jpg' />
            <div className='overlay d-flex flex-column'>
                <button className='overlay-btn overlayBtn' >+</button>
                <div className='text-center overlay-txt'>
                    <h3>Swift</h3>
                    <h1 className='overlay-txt-h1'>webSchool project</h1>
                </div>
                </div>
        </div>
          ])
        } else if (btnName === "HTML"){
          setDisplayedProjects([
            <div className='project col-4'>
            <img alt='project-img' src='https://i.pcmag.com/imagery/articles/01abVazkJYMkPh8uWB8F4ej-10..v1631218496.jpg' />
            <div className='overlay d-flex flex-column'>
                <button className='overlay-btn overlayBtn' >+</button>
                <div className='text-center overlay-txt'>
                    <h3>HTML/CSS/JS</h3>
                    <h1 className='overlay-txt-h1'>webSchool project</h1>
                </div>
                </div>
        </div>
        ,
        <div className='project col-4'>
            <img alt='project-img' src='https://i.pcmag.com/imagery/articles/01abVazkJYMkPh8uWB8F4ej-10..v1631218496.jpg' />
            <div className='overlay d-flex flex-column'>
                <button className='overlay-btn overlayBtn' >+</button>
                <div className='text-center overlay-txt'>
                    <h3>HTML/CSS/JS</h3>
                    <h1 className='overlay-txt-h1'>webSchool project</h1>
                </div>
                </div>
        </div>
          ])
        } else if (btnName === "All"){
          setDisplayedProjects([
            <div className='project col-4'>
            <img alt='project-img' src='https://i.pcmag.com/imagery/articles/01abVazkJYMkPh8uWB8F4ej-10..v1631218496.jpg' />
            <div className='overlay d-flex flex-column'>
                <button className='overlay-btn overlayBtn' >+</button>
                <div className='text-center overlay-txt'>
                    <h3>Swift</h3>
                    <h1 className='overlay-txt-h1'>webSchool project</h1>
                </div>
                </div>
        </div> 
        ,
        
        <div className='project col-4'>
        <img alt='project-img' src='https://i.pcmag.com/imagery/articles/01abVazkJYMkPh8uWB8F4ej-10..v1631218496.jpg' />
        <div className='overlay d-flex flex-column'>
            <button className='overlay-btn overlayBtn' >+</button>
            <div className='text-center overlay-txt'>
                <h3>HTML/CSS/JS</h3>
                <h1 className='overlay-txt-h1'>webSchool project</h1>
            </div>
            </div>
    </div>
    ,
    <div className='project col-4'>
        <img alt='project-img' src='https://i.pcmag.com/imagery/articles/01abVazkJYMkPh8uWB8F4ej-10..v1631218496.jpg' />
        <div className='overlay d-flex flex-column'>
            <button className='overlay-btn overlayBtn' >+</button>
            <div className='text-center overlay-txt'>
                <h3>HTML/CSS/JS</h3>
                <h1 className='overlay-txt-h1'>webSchool project</h1>
            </div>
            </div>
    </div>


          ])
        }
    }


    useEffect(()=>{

        const showTitle = () => {
          if(window.scrollY >= 1200 && !animationPlayed){
            setTitleApear("titleApear")
            setAnimationPlayed(true) /* we set this so it only plays one time and not always repeat */
          }
        }
    
        window.addEventListener("scroll" , showTitle)
        handleClick("All")
    
        return () => {
          window.removeEventListener("scroll" , showTitle) // this is the clearning mechanism in the useEffect hook
        }
        
      }, [])

  return (
    <div className='projects-container'>
      <div className={`projects-title ${titleApear}`}>
        <h1 className='display-1'>Projects</h1>
      </div>
      <div className='container'>
        <div className='portfolio-subTitle'>
            <h3>portfolio</h3>

            <div className='buttons-div text-center mt-5'>
            <button className={`buttons-group ${activeBtn === "All" ? "button-active" : ""}` }  onClick={()=>{handleClick("All")} }> All</button>
            <button className={`buttons-group ${activeBtn === "HTML" ? "button-active" : ""}` } onClick={()=>{handleClick("HTML")}} > HTML/CSS/JS</button>
            <button className={`buttons-group ${activeBtn === "Swift" ? "button-active" : ""}`} onClick={()=>{handleClick("Swift")}} > Swift</button>
            </div>
            <div className='projects d-flex flex-row'>
              {displayedProjects} {/* in here there is this array which has the values that changes based on the button click */}
            </div>
        </div>

      </div>
      <AiOutlinePhone size={80} color='rgb(87, 65, 255)' className='contact-icon' />

    </div>
  )
}

export default Projects
