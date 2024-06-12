import "../styles/Card.css"
import {animate, motion} from 'framer-motion';
import { inView } from "framer-motion"
import image from "../assets/images/demo.jpeg";
function Card(props) {

    return (
        <a href={props.githubURL} target="_blank" rel="noopener noreferrer" className="card-link">
            <div className="card-container"
                // initial={{x: "-100vw"}}
                // animate={{x: 0}}
                // transition={{type: 'tween', duration: 0.8}}
            >
                <div className="image-container child-container">
                    <img src={props.imageURL} alt="image" className="image"/>
                </div>
                <div className="child-container text-container">
                    <h2 className="card-text-title">{props.title}</h2>
                    <p className="card-text-body">{props.body}</p>
                    <p className="card-text-body card-text-separator">/</p>
                    {props.technology && props.technology.length > 0 ? (
                        props.technology.map((tech, ind) => (
                            <p className="card-text-body" key={ind}>{tech.toUpperCase()}</p>
                        ))
                    ) : (
                        <p className="card-text-body">No technology specified</p>
                    )}
                </div>
            </div>
        </a>
    )
}

export default Card;