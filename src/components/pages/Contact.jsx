import { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid e-mail");
      return;
    }
    // if (!userName) {
    //   setErrorMessage('Please leave your name!');
    //   return;
    // }

    setUserName("");
    setMessage("");
    setEmail("");
    setErrorMessage("");
  };

  return (
    <div className="container contact-container text-center">
      <h1 className="contact-title">Contact</h1>
      <form className="form contact-form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="your name"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="leave a message"
            className="form-control"
            rows="3"
          ></textarea>
        </div>
        <div className="contact-button-div">
          <button type="submit" className="btn-warning rounded-pill">
            Submit
          </button>
        </div>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
