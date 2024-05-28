import React, { useState } from "react";

const handleSubmit = (e, name, email, subject, message) => {
  e.preventDefault();
  alert(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>
            Please do not hesitate to reach out to me through any of the options below if you have any questions.
          </p>
        </div>

        <div className="contact-forms">
          <div className="info">
            <div className="address">
              <i className="bi bi-geo-alt"></i>
              <div className="des">
                <h4>Location:</h4>
                <p>M24/2, Malalpola Division, Yatiyanthota</p>
              </div>
            </div>

            <div className="address">
              <i className="bi bi-envelope"></i>
              <div className="des">
                <h4>Email:</h4>
                <p>sekara.dileeban@gmail.com</p>
              </div>
            </div>

            <div className="address">
              <i className="bi bi-phone"></i>
              <div className="des">
                <h4>Call:</h4>
                <p>+9476 756 6677</p>
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1072617607577!2d80.11939531526948!3d7.118004019512814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3129fbd4f4a7b%3A0x7bf4eb657b4e1d60!2sM24%2F2%2C%20Malalpola%20Division%2C%20Yatiyanthota!5e0!3m2!1sen!2slk!4v1620346187721!5m2!1sen!2slk"
              frameBorder="0"
              style={{ border: "0", width: "100%", height: "290px" }}
              allowFullScreen
              title="Google Maps Location"
            ></iframe>
          </div>

          <form onSubmit={(e) => handleSubmit(e, name, email, subject, message)} className="php-email-form">
            <div className="form-fields">
              <div className="form-inputs">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-inputs">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                name="message"
                rows="10"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
