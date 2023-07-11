import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import logo from "../assets/logo.png" // this is the devadel logo
import "../style/navbar-footer.css";



function Navbar() {

  const [active, setActive] = useState("Home")
  const [activeNav, setActiveNav] = useState("")

  
  useEffect( () => {

    if (active === "Home"){
      window.scrollTo({
        left:0,
        top:0,
        behavior : "smooth"
      })
      setActiveNav("Home")
    }
    else if ( active === "skills"){
      window.scrollTo({
        left:0,
        top:840,
        behavior : "smooth"
      })
      setActiveNav("skills")

    }
    else if (active === "projects"){
      window.scrollTo({
        left:0,
        top:1860,
        behavior : "smooth"
      })
      setActiveNav("projects")
    } else if (active === "contact"){
      window.scrollTo({
        left:0,
        top:2700,
        behavior : "smooth"
      })
    }
    
    const changeActive = () => {
      if (window.scrollY >= 0 && window.scrollY <= 810){
        setActiveNav("Home")
      }else if (window.scrollY >= 710 && window.scrollY <= 1850){
        setActiveNav("skills")

      }else if (window.scrollY >= 1850 && window.scrollY <= 2600){
        setActiveNav("projects")
      }else{
        setActiveNav("contact")
      }
    }

    window.addEventListener("scroll" , changeActive)

    return () => {
      window.removeEventListener("scroll" , changeActive) // this is the clearning mechanism in the useEffect hook
    }

  }, [active] )

  return (


    <div className="navbar-container fixed-top">
      <nav className='nav-container flex d-flex align-items-center '>
        <div className='logo'>
            <img src={logo} className='navbar-logo img-fluid' alt='devadel icon'/>  {/* this is the image devadel */ }
        </div>

        <div className='nav-items'>
            <ul className='nav d-flex flex-row nav-ul '>
            <li className='nav-item'>
              <a className={`nav-link ${activeNav === "Home" ? "active-nav" : ""}`} onClick={()=>{setActive("Home")}} >
                Home
                </a>
              </li> 
            <li className='nav-item'  >
              <a className={`nav-link ${activeNav === "skills" ? "active-nav" : ""}`}  onClick={()=>{setActive("skills")}} > {/*the acitve nav is given so it would do the scrolling on scrollY and change the colors */}
                skills
                </a>
                </li>
                <li className='nav-item'>
              <a className={`nav-link ${activeNav === "projects" ? "active-nav" : ""}`}  onClick={()=>{setActive("projects")}} >
                projects
                </a>
                </li>
                <li className='nav-item'>
              <a className={`nav-link ${activeNav === "contact" ? "active-nav" : ""}`}  onClick={()=>{setActive("contact")}} >
              contact
                </a>
                </li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
