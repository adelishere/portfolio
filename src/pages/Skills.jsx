import React, {useEffect, useState} from 'react'
import "../style/skills.css"
import { HiOutlineComputerDesktop } from "react-icons/hi2"
import { PiPencilDuotone } from "react-icons/pi"
import { TbBuildingFactory } from "react-icons/tb"
import {AiOutlineFundProjectionScreen} from "react-icons/ai"



function Skills() {

  const [titleApear, setTitleApear] = useState("")
  const [animationPlayed , setAnimationPlayed] = useState(false)

  useEffect(()=>{

      const showTitle = () => {
        if(window.scrollY >= 250 && !animationPlayed){
          setTitleApear("titleApear")
          setAnimationPlayed(true)
        }
      }
  
      window.addEventListener("scroll" , showTitle)
  
      return () => {
        window.removeEventListener("scroll" , showTitle) // this is the clearning mechanism in the useEffect hook
      }
      
    }, [])








  return (
    
    <div className='skills-container'>
        <div className={`skills-title ${titleApear}`}>
          <h1>Skills</h1>
        </div>
        <div className='container skills-mini-container'>
          <div className='d-flex flex-row'> 
          <div className='skills-description col-5'>{/* here is the small discription of the skills I have */}
            <h3>what can I do?</h3>
            <div className='abilities d-flex flex-row'>
              <h1 className='abilities-icon'><HiOutlineComputerDesktop width={40} color='#007ced'/></h1>
              <div className='abilities-description'>
              <h6 className='abilities-subTitle'>html, css, js & git</h6 >
              <p className='abilities-p'> I'm highly skilled in HTML/CSS and JavaScript, proficient in creating attractive web pages. I excel in utilizing ES6+ features, performing DOM manipulation, handling events, and collaborating with teams using Git and GitHub.</p>
              </div>
            </div>
            <div className='abilities d-flex flex-row'>
              <h1 className='abilities-icon'><PiPencilDuotone width={40} color='#007ced'/></h1>
              <div className='abilities-description'>
              <h6 className='abilities-subTitle'>UI / UX Design</h6 >
              <p className='abilities-p'>I specialize in user interface and user experience design, creating intuitive and user-friendly interfaces. I have expertise in responsive design techniques and media queries for adaptable websites across various devices and screen sizes.</p>
              </div>
            </div>
            <div className='abilities d-flex flex-row'>
              <h1 className='abilities-icon'><TbBuildingFactory width={40} color='#007ced'/></h1>
              <div className='abilities-description'>
              <h6 className='abilities-subTitle'>React, Bootstrap, npm</h6 >
              <p className='abilities-p'>I excel in frontend frameworks like React, constructing complex web applications. I am skilled in CSS frameworks like Bootstrap for efficient development and responsive layouts. Additionally, I have expertise in frontend tooling and package managers, including npm.</p>
              </div>
            </div>
          </div>
          <div className='skills-reports col-5 ml-5'>{/* in here you can find the progress bars */}
          <h3>Coding Skills</h3>
          <div className='skills-area'>
          <h6>HTML</h6>
          <small>90%</small>
          <div className='coding-bar'>
            <div className='progress coding-bar align-items-center'><div className='progress-bar coding-bar-inside' style={{width:"90%" }}></div></div>
          </div>
          </div>
          <div className='skills-area'>
          <h6>Css</h6>
          <small>65%</small>
          <div className='coding-bar'>
            <div className='progress coding-bar align-items-center'><div className='progress-bar coding-bar-inside' style={{width:"65%" }}></div></div>
          </div>
          </div>
          <div className='skills-area'>
          <h6>JS</h6>
          <small>85%</small>
          <div className='coding-bar'>
            <div className='progress coding-bar align-items-center'><div className='progress-bar coding-bar-inside' style={{width:"85%" }}></div></div>
          </div>
          </div>
          <div className='skills-area'>
          <h6>React</h6>
          <small>80%</small>
          <div className='coding-bar'>
            <div className='progress coding-bar align-items-center'><div className='progress-bar coding-bar-inside' style={{width:"80%" }}></div></div>
          </div>
          </div>
          <div className='skills-area'>
          <h6>Bootstrap</h6>
          <small>50%</small>
          <div className='coding-bar'>
            <div className='progress coding-bar align-items-center'><div className='progress-bar coding-bar-inside' style={{width:"50%" }}></div></div>
          </div>
          </div>
          <div className='skills-area'>
          <div className='skills-area'>
          <h6>Swift</h6>
          <small>70%</small>
          <div className='coding-bar'>
            <div className='progress coding-bar align-items-center'><div className='progress-bar coding-bar-inside' style={{width:"70%" }}></div></div>
          </div>
          </div>
          </div>
          
          </div>
        </div>
      </div>
      <AiOutlineFundProjectionScreen size={80} color='rgb(87, 65, 255)' className='projects-icon' />

    </div>
  )
}

export default Skills
