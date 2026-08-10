import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#607456",
        color: "white",
        padding: "25px 40px 15px",
        textAlign: "center",
        borderTop: "3px solid #B0BA99",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {/* Brand */}
        <div>
          <h2 style={{ color: "#B0BA99", margin: "5px" }}>
            Foodie-Frenzy
          </h2>

          <p style={{ margin: "8px", fontStyle: "italic" }}>
            Delicious food, delivered with care.
          </p>
        </div>
      </div>

      <hr style={{ margin: "20px 0 10px", opacity: "0.4" }} />

      <p style={{ color: "#B0BA99", margin: "5px" }}>
        © 2026 Foodie-Frenzy. All rights reserved.
      </p>
    </footer>
  );
}