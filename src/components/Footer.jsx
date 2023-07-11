import React from 'react'
import "../style/navbar-footer.css";
import logo from "../assets/logo.png" // this is the devadel logo
import { AiOutlineInstagram } from "react-icons/ai"
import { AiFillGithub } from "react-icons/ai"
import { AiOutlineLinkedin } from "react-icons/ai"
import { AiOutlineHtml5 } from "react-icons/ai"
import { BiLogoCss3 } from "react-icons/bi"
import { RiJavascriptLine } from "react-icons/ri"
import { BiLogoReact } from "react-icons/bi"
import { DiBootstrap } from "react-icons/di"




function Footer() {
  return (
    <div className='Footer-container d-flex flex-column align-items-center justify-content-center'>
              <div className='logo text-center'>
            <img src={logo} width="60px" className='navbar-logo img-fluid' alt='devadel icon'/>  {/* this is the image devadel */ }
        </div>
        <div className='icons d-flex flex-row '>
        <h6><a target='_blank' href='https://www.instagram.com/af1.99/'><AiOutlineInstagram size={40} color='white' /></a></h6>
        <h6><a target='_blank' href='https://github.com/adelishere' ><AiFillGithub size={40} color='white' /></a></h6>
        <h6><a target='_blank' href='https://linkedin.com'><AiOutlineLinkedin size={40} color='white' /></a></h6>
        </div>
        <small>All rights reserved © 2023 mohammed adel</small>
        <div className='lang-icons d-flex flex-row mt-5 '>
        <h6> <AiOutlineHtml5  size={30} color='green' /> </h6>
        <h6> <BiLogoCss3 size={30} color='pink' /> </h6>
        <h6> <RiJavascriptLine  size={30} color='gold' /> </h6>
        <h6> <BiLogoReact  size={30} color='lightblue' /> </h6>
        <h6> <DiBootstrap  size={30} color='blue' /> </h6>
        </div>

    </div>
  )
}

export default Footer
