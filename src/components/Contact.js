import { useState } from "react";
import validator from "validator";
import emailjs from "emailjs-com";
import "../css/contact.css";

export const Contact = () => {
  const [sent, setSent] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [msgError, setMsgError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setMsgError(false);
    setEmailError(false);
    setNameError(false);

    if (e.target.name.value === "") {
      setNameError(true);
    } else if (!validator.isEmail(e.target.userEmail.value)) {
      setEmailError(true);
    } else if (e.target.message.value.length < 15) {
      setMsgError(true);
    } else if (!nameError && !emailError && !msgError) {
      emailjs
        .sendForm(
          "service_82j5rdl",
          "template_incebqw",
          e.target,
          "user_ThN6eDiYHDnjczgUtNOIi"
        )
        .then((res) => {
          console.log(res);
          setSent(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className={sent ? "shorten contact-container" : "contact-container"}>
      <div className="description">
        <h3>Contact Me</h3>
      </div>
      <div className="contact-wrapper">
        <div className="contact-icons-container">
          <p>you can find me here:</p>
          <div className="social-icons-wrapper">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/juba.datunashvili/"
            >
              <i className="social-icons fab fa-facebook-square" />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/Jdatu16"
            >
              <i className="social-icons fab fa-github-square" />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/juba-datunaishvili-301093207/"
            >
              <i className="social-icons fab fa-linkedin" />
            </a>
          </div>
        </div>
        {sent ? (
          <div className="emailer-container-sent">
            <p className="sent-email-text">
              your email was successfully sent! I will soon check it. If you
              want to send another email, please click the button below.
            </p>
            <button onClick={() => setSent(false)} className="another-email">
              write another email
            </button>
          </div>
        ) : (
          <div className="emailer-container">
            <p>also, you can send me an email</p>
            <form onSubmit={sendEmail} className="emailer-style">
              <label>Name</label>
              {nameError ? (
                <p className="error-text">name is required</p>
              ) : null}
              <input
                className={nameError ? "error-input" : null}
                placeholder="Enter Your Name"
                type="text"
                name="name"
              />
              <label>Email</label>
              {emailError ? (
                <p className="error-text">valid email is required</p>
              ) : null}
              <input
                className={emailError ? "error-input" : null}
                placeholder="Enter Your Email"
                name="userEmail"
              />
              <label>Message</label>
              {msgError ? (
                <p className="error-text">
                  message text should contain
                  <br /> more than 15 characters
                </p>
              ) : null}
              <textarea
                className={msgError ? "error-input" : null}
                name="message"
                rows="4"
              />
              <button type="submit">Send</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
