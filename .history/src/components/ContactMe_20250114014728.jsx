import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./ContactMe.css";

function ContactMe() {
    const [text] = useTypewriter({
        words: [
            "Web Developer", "Web Designer", "Front-End Developer"],
        loop: true,
      });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_spzbvv5", "template_eso2v3n", form.current, {
        publicKey: "nXe5clY5imZRjmuNb",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          console.log("Message Sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="formContainer">
      <h1>Contact Me</h1>
      <div className="styled-contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default ContactMe;

