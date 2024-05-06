// eslint-disable-next-line no-unused-vars
import React from "react";
import "./about.css";
// import Education from "./Education";

const about = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="/image/aitsite.png" alt="Aittisone Duangsompheang" />
      </div>
      <div className="about-text">
        <h2>
          About <span>Me</span>
        </h2>
        <h4>Full Stack Developer</h4>
        <p>
          🌐 Tech Elegance with Lao Grace: Stay ahead of the tech curve while
          embracing the beauty of the Lao language. It’s not just a system; it’s
          a statement! ⏰ Updates at the Speed of Now: Time doesn’t wait, and
          neither should your updates. Real-time insights keep you ahead in the
          race of business evolution!
        </p>
        <a href="/#contact" className="btn-box">
          More About Me
        </a>
      {/* <Education /> */}
      </div>
    </section>
  );
};

export default about;
