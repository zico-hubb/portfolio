"use client";


export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p className="contact-description">
        I'm always open to new opportunities and collaborations. Feel free to reach out!
      </p>
      <div className="contact-details">
        <div className="contact-item">
          <h3>Email</h3>
          <p>
            <a href="mailto:mosesszico@gmail.com">mosesszico@gmail.com</a>
          </p>
        </div>
        <div className="contact-item">
          <h3>GitHub</h3>
          <p>
            <a href="https://github.com/zico-hubb" target="_blank" rel="noopener noreferrer">
              github.com/zico-hubb
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
