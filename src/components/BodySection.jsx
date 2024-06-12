import {motion} from 'framer-motion';
import "../styles/Body.css";
import C_Image from "../assets/images/logo/c_logo.png";
import CPP_Image from "../assets/images/logo/cpp_logo.png";
import JAVA_Image from "../assets/images/logo/java_logo.png";
import Python_Image from "../assets/images/logo/python_logo.png";
import HTML_Image from "../assets/images/logo/html_logo.png";
import CSS_Image from "../assets/images/logo/css_logo.png";
import JS_Image from "../assets/images/logo/js_logo.png";
import BootStrap_Image from "../assets/images/logo/bootstrap_logo.png";
import Node_Image from "../assets/images/logo/node-js_logo.png";
import React_Image from "../assets/images/logo/react_logo.png";
import MongoDB_Image from "../assets/images/logo/mongo-db_logo.png";
import MySql_Image from "../assets/images/logo/mysql_logo.png";

const images = [
  C_Image,
  CPP_Image,
  JAVA_Image,
  Python_Image,
  HTML_Image,
  CSS_Image,
  JS_Image,
  BootStrap_Image,
  Node_Image,
  React_Image,
  MongoDB_Image,
  MySql_Image,
];

function BodySection() {
  return (

      <div className="body-container">
        <p className="image-quote">
          "Learn one <span className="image-quote-itasize">language</span>, and
          you'll be able to understand{" "}
          <span className="image-quote-itasize">many others."</span> - Larry
          Wall
        </p>
        <motion.div className="image-grid"
        >
          {images.map((image, index) => (
            <motion.img 
              whileHover={{
              scale: 1.2,
              transition: { duration: 1 }
            }}
            whileTap={{ scale: 0.9 }} 
            key={index} src={image} className="image-child" />
          ))}
        </motion.div>
        <h1 className="moving-text-container">
          <p className="moving-text">
          Software Developer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Web Developer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Software Developer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Web Developer
          </p>
        </h1>
        <a className='body-footer-anchor' href="https://github.com/Animesh-X" target='blank'>
          <div>
            <p className="body-footer">VIEW MORE PROJECTS→</p>
          </div>
        </a>
        </div>
  );
}

export default BodySection;
