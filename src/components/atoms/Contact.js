import { useState, useContext } from "react";
import validator from "validator";
import emailjs from "emailjs-com";
import { StateContext } from "../../App";
import "../../css/contact.css";

export const Contact = () => {
  const [sent, setSent] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [msgError, setMsgError] = useState(false);
  const { changeLanguage } = useContext(StateContext);

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
    <div
      id="contact"
      className={sent ? "shorten contact-container" : "contact-container"}
    >
      <div className="description">
        <h3> {changeLanguage ? "Contact Me" : "დაკავშირება"}</h3>
      </div>
      <div className="contact-wrapper">
        <div className="contact-icons-container">
          <p>
            {changeLanguage
              ? "You can find me here:"
              : "აქ შეძლებ ჩემს პოვნას:"}
          </p>
          <div className="social-icons-wrapper">
            <a
              title="Facebook"
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/juba.datunashvili/"
            >
              <i className="social-icons fab fa-facebook-square" />
            </a>
            <a
              title="Github"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/Jdatu16"
            >
              <i className="social-icons fab fa-github-square" />
            </a>
            <a
              title="Linkedin"
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
              {changeLanguage
                ? "Your Email was successfully sent! I will soon check it. If You want to send another email, please click the button below"
                : "იმეილი წარმატებით გაიგზავნა! ვეცდები მალე ვნახო. კიდევ ერთი შეტყობინების გასაგზავნად გთხოვ დააჭირო ქვემოთ არსებულ ღილაკს"}
            </p>
            <button onClick={() => setSent(false)} className="another-email">
              {changeLanguage
                ? "Write Another Email"
                : "ახალი იმეილის გაგზავნა"}
            </button>
          </div>
        ) : (
          <div className="emailer-container">
            <p>
              {changeLanguage
                ? "Also, You can send me an Email:"
                : "ასევე შეგიძლია იმეილი გამომიგზავნო :"}
            </p>
            <form onSubmit={sendEmail} className="emailer-style">
              <label>{changeLanguage ? "Name" : "სახელი"}</label>
              {nameError ? (
                <p className="error-text">
                  {changeLanguage
                    ? "Name is required"
                    : "სახელის შეყვანა აუცილებელია"}
                </p>
              ) : null}
              <input
                className={nameError ? "error-input" : null}
                placeholder={
                  changeLanguage ? "Enter Your name" : "შეიყვანე სახელი"
                }
                type="text"
                name="name"
              />
              <label>{changeLanguage ? "Email" : "იმეილი"}</label>
              {emailError ? (
                <p className="error-text">
                  {changeLanguage
                    ? "Valid Email is required"
                    : "აუცილებელია შეიყვანო სწორი იმეილი"}
                </p>
              ) : null}
              <input
                className={emailError ? "error-input" : null}
                placeholder={
                  changeLanguage ? "Enter Your Email" : "შეიყვანე იმეილი"
                }
                name="userEmail"
              />
              <label>{changeLanguage ? "Message" : "შეტყობინება"}</label>
              {msgError ? (
                <p className="error-text">
                  {changeLanguage
                    ? "Enter minimum 15 characters"
                    : "შეიყვანეთ მინიმუმ 15 სიმბოლო"}
                </p>
              ) : null}
              <textarea
                placeholder={
                  changeLanguage
                    ? "Enter Your message text (Min. 15 characters)"
                    : "შეიყვანე შეტყობინების ტექსტი (მინიმუმ 15 სიმბოლო)"
                }
                className={msgError ? "error-input" : null}
                name="message"
                rows="4"
              />
              <button type="submit">
                {changeLanguage ? "Send" : "გაგზავნა"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
