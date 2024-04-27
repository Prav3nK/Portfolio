import React, { useState } from "react";
import './Navbar.css' 
import logo from "../../assets/logo.png"
import {Link } from 'react-scroll';
import contactImg from "../../assets/contact.png"
import menu from "../../assets/menu.png"


const Navbar =() =>{
   const [showMenu, setShowMenu] = useState(false)
    return (
       <nav className="navbar">
        <img src={logo} alt="Logo" className="logo"/>
        <div className="desktopMenu">
        <Link  activeClass="active" to="first" spy={true} smooth={true}  offset={-50} duration ={500} className="desktopMenuListItem">Home</Link>
        <Link  activeClass="active" to="skll" spy={true} smooth={true}  offset={-50} duration ={500}className="desktopMenuListItem">About</Link>
        <Link  activeClass="active" to="projects" spy={true} smooth={true}  offset={-50} duration ={500}className="desktopMenuListItem">Portfolio</Link>
        <Link  activeClass="active" to="contactsec" spy={true} smooth={true}  offset={-500} duration ={500}className="desktopMenuListItem">Projects</Link>
        </div>
         <button class="desktopMenuBtn" onClick={()=>{
            document.getElementById("contact").scrollIntoView();
         }}>
            <img src={contactImg}alt="" className="desktopMenuImg" /> Contact Me
         </button>
         <img src={menu} alt="Logo" className="mobmenu" onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
        <Link  activeClass="active" to="first" spy={true} smooth={true}  offset={-50} duration ={500} className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link  activeClass="active" to="skll" spy={true} smooth={true}  offset={-50} duration ={500}className="ListItem" onClick={()=>setShowMenu(false)}>About</Link>
        <Link  activeClass="active" to="projects" spy={true} smooth={true}  offset={-50} duration ={500}className="ListItem"onClick={()=>setShowMenu(false)}>Portfolio</Link>
        <Link  activeClass="active" to="contactsec" spy={true} smooth={true}  offset={-500} duration ={500}className="ListItem"onClick={()=>setShowMenu(false)}>Projects</Link>
        <Link  activeClass="active" to="contact" spy={true} smooth={true}  offset={-500} duration ={500}className="ListItem"onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
       </nav> 
    )
}

export default Navbar;