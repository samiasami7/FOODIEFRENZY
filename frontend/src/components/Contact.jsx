import React from "react";

export default function Contact() {
  return (
    <div
      id="contact"
      style={{
        background: "linear-gradient(135deg, #607456, #15321F)",
        padding: "30px 20px",
        color: "#B0BA99",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "32px", margin: "0 0 25px" }}>
        Connect With Us
      </h1>

      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <div className="contact-card">
          <h3>📍 Our Headquarters</h3>
          <p>Tilagor, Sylhet</p>
        </div>

        <div className="contact-card">
          <h3>📞 Contact Numbers</h3>
          <p>+88017.....</p>
        </div>

        <div className="contact-card">
          <h3>✉️ Email Address</h3>
          <p>foodiefrenzy@gmail.com</p>
        </div>
      </div>

      <style>{`
        .contact-card {
          background: rgba(43, 29, 20, 0.6);
          padding: 16px;
          border-radius: 12px;
        }

        .contact-card h3 {
          margin: 0 0 8px;
        }

        .contact-card p {
          color: #c7a485;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
