import { FaLinkedinIn, FaGithub, FaRegCopyright } from "react-icons/fa";
import Resume from "../assets/files/Resume.pdf";
import Image from "../assets/images/footer_image.jpeg"
import "../styles/Footer.css"
function Footer () {
    return (
        <div className="footer-container">
            <div className="child-container left-div">
                <div className="text-container">
                    <span className="left-div-span">Let's Talk</span>
                    <br/>
                    <span className="left-div-text">Hire Me.</span>
                    <br />
                    <button className="btn-contact" href="#contact">Hire Me</button>
                    <hr className="footer-line"/>
                    <div className="footer-tags-container">
                        <div className="footer-anchor-container">
                            <a className="footer-anchor" href={Resume} target="_blank" rel="noopener noreferrer">ABOUT</a>
                            <a className="footer-anchor" href="#project">PROJECT</a>
                            <a className="footer-anchor" href="#contact">CONTACT</a>
                        </div>
                        <div className="social-icons">
                            <a className="social-icon" href="https://www.linkedin.com/in/animesh-kumar-31096b250/" target="blank"><FaLinkedinIn /></a>
                            <a className="social-icon" href="https://github.com/Animesh-X" target="blank"><FaGithub /></a>
                        </div>
                    </div>
                    <hr className="footer-line"/>
                    <p><FaRegCopyright /> 2024 by Animesh Kumar</p>
                    
                </div>
            </div>
            <div className="child-container right-div">
                <img src={Image}/>
            </div>
        </div>
    )
}


export default Footer;