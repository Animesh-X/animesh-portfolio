import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import emailjs from "@emailjs/browser";
import cartoonImg from "../assets/images/cartoon.png";
import "../styles/ContactSection.css";

function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [messageToShow, setMessageToShow] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    const toName = import.meta.env.VITE_TO_NAME;
    if (!name || !email || !message) {
      setMessageToShow("Please, Enter all the details.");
      setIsShow(true);
      return;
    }
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: toName,
      message: message,
    };
    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setMessageToShow("Thanks. Received your message.");
        setIsShow(true);
      },
      (error) => {
        console.log("FAILED...", error);
        setMessageToShow("Please, Try again letter.");
        setIsShow(true);
      }
    );
    setEmail("");
    setMessage("");
    setName("");
    setMessageToShow("");
  };

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div className="contact-container" id="contact">
      <motion.div
        ref={ref}
        className="contact-container-child"
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <p className="contact-container-header">Contact Me</p>
        <form action="">
          <textarea
            className="contact-name contact-details"
            name="name"
            id="sender-name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></textarea>
          <textarea
            className="contact-details"
            name="email"
            id="sender-email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></textarea>
          <textarea
            className="contact-details contact-message"
            name="message"
            id="sender-message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </form>
        <div>
          <button className="contact-submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        {isShow && (
          <motion.div>
            <p className="contact-submit-text">{messageToShow}</p>
          </motion.div>
        )}
      </motion.div>
      <motion.div
        className="contact-container-child"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <img
          className="contact-container-image"
          src={cartoonImg}
          alt="img"
        />
      </motion.div>
    </motion.div>
  );
}

export default ContactSection;
