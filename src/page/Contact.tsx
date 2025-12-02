import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Contact = () => {

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_ocdawl9",
        "template_f370wbt",
        form.current,
        "ikCA8sqdffvthUlej"
      )
      .then(
        () => {
          alert("Message sent!");
        },
        (error: unknown) => {
          console.error(error);
          alert("Something went wrong!");
        }
      );
  };

  return (
    <>
    <Navbar />
    <div className="contact">
      {/* ---------- Sidebar ---------- */}
      <div className="sidebar">
        <div className="info-box">
          <div className="info-title">Contact Info</div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <span>+123 456 7890</span>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <span>info@example.com</span>
          </div>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>123 Main Street, City</span>
          </div>
        </div>

        <div className="social-icons">
          <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>

      {/* ---------- Main Content ---------- */}
      <div className="main-content">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">
          Feel free to reach out to us by filling the form below.
        </p>

        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input className="form-input" type="text" name="user_name" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <label className="form-label">Your Email</label>
            <input className="form-input" type="email" name="user_email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea className="form-input textarea" name="message" placeholder="Message" />
          </div>

          <button className="send-btn" type="submit">Send</button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Contact;
