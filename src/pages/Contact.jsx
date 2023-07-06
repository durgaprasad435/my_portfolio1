import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../Styles/Contact.css";
import styled from "styled-components";

function Contact() {
  const [data, setData] = useState({
    userName: "",
    userEmail: "",
  });
  const { userName, userEmail } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jf6vjhe",
        "template_txueohu",
        form.current,
        "b_M5LMBF2wv-q0ETT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div class="cont_container">
      <div class="content">
        <div class="right-side">
          <div class="topic-text">Contact Me</div>
          <p className="topic-para">
            If you have any work from me or any types of quries related to my
            work, you can send me message from here. It's my pleasure to take
            one step towards you.
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <div class="input-box">
              <input
                type="text"
                placeholder="Enter your name"
                name="user_name"
                onChange={changeHandler}
              />
            </div>
            <div class="input-box">
              <input
                type="email"
                placeholder="Enter your email"
                name="user_email"
                onChange={changeHandler}
              />
            </div>
            <div class="input-box message-box">
              <input
                type="textarea"
                class="text_cont"
                name="message"
                placeholder="Enter your message"
                onChange={changeHandler}
              />
            </div>
            <div class="button">
              <input type="submit" value="Send Now" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
