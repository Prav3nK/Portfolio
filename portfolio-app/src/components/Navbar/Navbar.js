import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contact.png";
import menu from "../../assets/menu.png";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo"/>
            <div className="desktopMenu">
                <Link to="/" className="desktopMenuListItem">Home</Link>
                <Link to="/about" className="desktopMenuListItem">About</Link>
                <Link to="/projects" className="desktopMenuListItem">Portfolio</Link>
                <Link to="/contact" className="desktopMenuListItem">Contact</Link>
                <Link to="/resume" className="desktopMenuListItem">Resume</Link>
            </div>
            <Link to="/contact" className="desktopMenuListItem"><button className="desktopMenuBtn" > <img src={contactImg} alt="" className="desktopMenuImg" /> Contact Me
            </button>
            </Link>
            <img src={menu} alt="Logo" className="mobmenu" onClick={() => setShowMenu(!showMenu)} />
            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link to="/" className="ListItem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link to="/about" className="ListItem" onClick={() => setShowMenu(false)}>About</Link>
                <Link to="/projects" className="ListItem" onClick={() => setShowMenu(false)}>Portfolio</Link>
                <Link to="/contact" className="ListItem" onClick={() => setShowMenu(false)}>Contact</Link>
                <Link to="/resume" className="ListItem" onClick={() => setShowMenu(false)}>Resume</Link>
            </div>
        </nav>
    );
}

export default Navbar;
