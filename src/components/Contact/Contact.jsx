import React from "react";
import "./Contact.css";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sumanth-tellapuri-/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "#0A66C2"
  },
  {
    name: "GitHub",
    url: "", // show only if exists
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: "#171515"
  },
  {
    name: "Email",
    url: /Mobi|Android/i.test(navigator.userAgent)
      ? "mailto:telapurisumanth1234@gmail.com?subject=Portfolio%20Inquiry"
      : "https://mail.google.com/mail/?view=cm&fs=1&to=telapurisumanth1234@gmail.com&su=Portfolio%20Inquiry",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    color: "#EF4444"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <header className="contact-header">
          <h2>📧 Get In Touch</h2>
          <p>Let's connect and discuss opportunities together</p>
        </header>

        <div className="contact-cards">
          <div className="contact-card">
            <div className="icon blue">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 12.414A5 5 0 1112.586 11.586l4.243 4.243a1 1 0 001.414-1.414z"
                />
              </svg>
            </div>
            <div>
              <p className="label">Location</p>
              <p className="value">Hyderabad, India</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="icon green">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="label">Response Time</p>
              <p className="value">Within 24 hours</p>
            </div>
          </div>
        </div>

        <div className="social-links">
          {socialLinks.map(
            (s) =>
              s.url &&
              s.url.trim() !== "" && (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                >
                  <div className="icon" style={{ backgroundColor: s.color }}>
                    {s.icon}
                  </div>
                  <span>{s.name}</span>
                </a>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
