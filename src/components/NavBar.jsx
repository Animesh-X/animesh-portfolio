import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Resume from "../assets/files/Resume.pdf"

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <div className="navbar">
            <a href="/" className="nav-name-link">
                <h3 className="nav-name">ANIMESH KUMAR</h3>
            </a>
            <nav ref={navRef}>
                <a href={Resume} target="_blank" rel="noopener noreferrer">ABOUT</a>
                <a href="#project">PROJECTS</a>
                <a href="/#contact">CONTACT</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </div>
    );
}

export default Navbar;