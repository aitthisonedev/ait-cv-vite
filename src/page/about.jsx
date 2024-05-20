// eslint-disable-next-line no-unused-vars
import React from "react";
import "./about.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="/image/aitsite.png" alt="Aittisone Duangsompheang" />
      </div>
      <div className="about-text">
        <h2>
          <span>{t("About.me")}</span>
        </h2>
        <h4>{t("About.titel")}</h4>
        <p>
          {t("About.Description")}
        </p>
        <a href="/#contact" className="btn-box">
        {t("About.Contact")}
        </a>
        <div className="about-Education">{/* <Education /> */}</div>
      </div>
    </section>
  );
};

export default About;
