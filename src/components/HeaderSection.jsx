import NavBar from "./NavBar";
import Card from "./Card";
import {motion} from "framer-motion";
import projectData from "../assets/project-data.json";
import projectImg from "../assets/images/project-logo.png";
import "../styles/Header.css"

function HeaderSection () {
    return (
        <header>
            <NavBar />
            <div className="header-section">
                <div>
                    <p className="header-text">Building Experiences, Not just <span className="header-text-italics">WEBSITES.</span> 👨🏻‍💻</p>
                    <p className="header-text-position">I am a skilled and passionate web designer with experience in <br />creating visually appealing and user-friendly websites.</p>
                </div>
                <div className="header-section-image-container">
                    <div className="header-image-wrapper ">
                        <img className="header-image-img header-image-img-1" src="/src/assets/images/header-image-1.webp" />
                    </div>
                    <div className="header-image-wrapper heart-image">
                        <img className="header-image-img header-image-img-2" src="/src/assets/images/header-image-2.webp" />
                    </div>
                    <div className="header-image-wrapper ">
                        <img className="header-image-img header-image-img-3" src="/src/assets/images/header-image-3.webp" />
                    </div>
                    <div className="header-image-wrapper ">
                        <img className="header-image-img header-image-img-4" src="/src/assets/images/header-image-4.jpeg" />
                    </div>
                    <div className="header-image-wrapper ">
                        <img className="header-image-img header-image-img-5" src="/src/assets/images/header-image-5.jpeg" />
                    </div>
                </div>
                <div className="header-section-button">
                    {/* <p>MORE ABOUT ME→</p> */}
                    <a className="header-section-button-anchor" href="/src/assets/files/Resume.pdf" target="_blank" rel="noopener noreferrer">MORE ABOUT ME→</a>
                </div>
            </div>
            <section className="project-section" id="project">
                <div className="project-header">
                    <div className="header-image-container">
                        <img src={projectImg} alt="project-img" className="header-image"/>
                    </div>
                    <div className="testing">
                        <p className="project-header-title">Pr<span className="project-header-title-italics">o</span>jec<span className="project-header-title-italics">ts</span></p>
                    </div>
                </div>
                {projectData.map((project, index) => (
                    <Card
                        key={index}
                        title={project.title}
                        body={project.body}
                        technology={project.technology}
                        imageURL={project.imageURL}
                        githubURL={project.githubURL}
                    />
                ))}
            </section>
        </header>
    )
}

export default HeaderSection;