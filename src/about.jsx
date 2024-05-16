// eslint-disable-next-line no-unused-vars
import React from "react";
import "./about.css";
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
          Pioneering Web Elegance: Elevate your online presence with the finesse
          of web development craftsmanship. It’s not just coding; it’s a
          symphony of digital artistry!
          <br></br>
          <br></br>
          Advancements in Real-Time Web Solutions: Your website should evolve as
          swiftly as the digital landscape. Stay proactive with real-time
          innovations, ensuring your online platform remains at the forefront of
          user experience!
          <br></br>
          <br></br>
          Mastering the Web with Creative Precision: Harness the power of
          creativity and precision in every line of code. Crafting exceptional
          web experiences isn’t just a task; it’s a testament to your dedication
          to excellence!
        </p>
        <a href="/#contact" className="btn-box">
          Contact
        </a>
        <div className="about-Education">{/* <Education /> */}</div>
      </div>
    </section>
  );
};

export default about;
