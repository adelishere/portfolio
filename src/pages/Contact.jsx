import React, {useEffect, useState} from 'react'
import "../style/contact.css"
import { SiGooglemaps } from "react-icons/si"
import { BiMailSend, BiTab } from "react-icons/bi"
import { TiSocialAtCircular } from "react-icons/ti"
import Footer from "../components/Footer";


function Contact() {


  const [titleApear, setTitleApear] = useState("")
  const [animationPlayed , setAnimationPlayed] = useState(false)



  useEffect(()=>{

      const showTitle = () => {
        if(window.scrollY >= 2150 && !animationPlayed){
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

    <div className='contact-container'>
      <div className={`projects-title ${titleApear}`}>
        <h1 className='display-1'>Contact</h1>
      </div>
      <div className='container mt-5'>
      <iframe className='contact-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28875.700192985267!2d55.4030264974833!3d25.22134199708246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f60bde888939f%3A0x2245c09926a8f686!2sMirdif%20-%20Dubai!5e0!3m2!1sen!2sae!4v1688968851184!5m2!1sen!2sae"  width="400" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className='contact-details d-flex flex-row'>
          <div className='d-flex flex-column col-4'>
          <div className='all-contact-details d-flex flex-row'>
              <h1><SiGooglemaps className='contact-icons'color='#007cec' /></h1>
            <div className='contact-little-details d-flex flex-column'>
            <h6>Location</h6>
            <p>I am currently based in Dubai.</p>
          </div>
        </div>
        <div className='all-contact-details d-flex flex-row'>
          <h1><BiMailSend className='contact-icons' color='#007cec' /></h1>
          <div className='contact-little-details d-flex flex-column'>
            <h6>Email</h6>
            <p>You can contact me via email using the form on the side.</p>
          </div>
        </div>
        <div className='all-contact-details d-flex flex-row'>
          <h1><TiSocialAtCircular className='contact-icons' color='#007cec' /></h1>
          <div className='contact-little-details d-flex flex-column'>
            <h6>Social Media</h6>
            <p>I am active on various social media platforms.</p>
              </div>
            </div>
          </div>
          <form className='contact-form-withTitle justify-content-start align-items-start col-8' action="https://formsubmit.co/c741b2462b5e5d7f17dfddbb09d781c3" method="POST">
          <h4>contact me !</h4>
          <div className='contact-form d-flex justify-content-start'>
          <div className='small-inputs d-flex flex-column'>
          <input className='name contact-info' placeholder='name' type='text' name='name' required />
          <input className='email contact-info' placeholder='email' type='email' name='email' required />
          </div>
          <div className='contact-message'>
            <textarea className='message contact-info' placeholder='type your message here' name='message' required />
          </div>
          </div>
          <div className='btnSubmit'>
          <button type='submit' className='submit-btn'>submit</button>
          </div>
        </form>
      </div>
    </div>
    <Footer />

  </div>
  )
}

export default Contact
