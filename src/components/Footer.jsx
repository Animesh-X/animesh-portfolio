import { useRef, useEffect } from "react";
import { FaLinkedinIn, FaGithub, FaRegCopyright } from "react-icons/fa";
import { motion, useInView, useAnimation } from "framer-motion";
import Resume from "../assets/files/Resume.pdf";
import Image from "../assets/images/footer_image.jpeg"
import "../styles/Footer.css"
function Footer () {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView) {
        mainControls.start("visible");
        }
    }, [isInView]);
    return (
        <motion.div className="footer-container">
            <motion.div className="child-container left-div"
            ref={ref}
            variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
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
            </motion.div>
            <motion.div className="child-container right-div"
            variants={{
                hidden: { opacity: 0, x: 75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
                <img src={Image}/>
            </motion.div>
        </motion.div>
    )
}


export default Footer;