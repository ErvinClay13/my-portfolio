import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./ContactMe.css";

function ContactMe() {
  const [newName] = useTypewriter({
    words: [
      "Hello What is your name?",
      "Please enter your name here!",
      "Feel free to enter your name here",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 1000,
  });
  const [text] = useTypewriter({
    words: [
      "Hello! Feel free to send me a message.",
      "I'm excited to hear from you!",
      "Let's build something amazing together!",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 1000,
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
          <input type="text" name="user_name" placeholder={newName} />
          <label>Email</label>
          <input type="email" name="user_email" placeholder="={}"/>
          <label>Message</label>
          <textarea name="message" placeholder={text} />
          <Cursor />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
