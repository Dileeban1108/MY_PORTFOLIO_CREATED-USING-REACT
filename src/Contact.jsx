import React from "react";

const handleSubmit = () => {};
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="contact-forms">
          <div className="info">
            <div className="address">
              <i className="bi bi-geo-alt"></i>
              <div className="des">
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>

            <div className="address">
              <i className="bi bi-envelope"></i>
              <div className="des">
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>
            </div>

            <div className="address">
              <i className="bi bi-phone"></i>
              <div className="des">
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
              frameborder="0"
              style={{ border: "0", width: "100%", height: "290px" }}
              allowfullscreen
            ></iframe>
          </div>

          <form onSubmit={handleSubmit} className="php-email-form">
            <div className="form-fields">
              <div className="form-inputs">
                <label for="name">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  required
                />
              </div>
              <div className="form-inputs">
                <label for="name">Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label for="name">Subject</label>
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                required
              />
            </div>
            <div className="form-group">
              <label for="name">Message</label>
              <textarea
                className="form-control"
                name="message"
                rows="10"
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
