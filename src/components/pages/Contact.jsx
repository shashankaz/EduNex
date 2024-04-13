import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_3yszh3p", "template_z0okukb", form.current, {
        publicKey: "eQ4PlTR9ewmPn4GAK",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div id="container-contact">
      <h1>Contact</h1>
      <div id="main-container">
        <div id="form">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input
              type="text"
              placeholder="Josh Brolin"
              name="from_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label>Email</label>
            <input
              type="email"
              placeholder="josh@brolin.com"
              name="from_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Message</label>
            <textarea
              placeholder="Enter your message here"
              rows={7}
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <div>
              <button type="submit" value="Send">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
