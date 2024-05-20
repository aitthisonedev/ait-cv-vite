// eslint-disable-next-line no-unused-vars
import React from 'react';
import './services.css'; 
import { useTranslation } from 'react-i18next';
const Services = () => {
    const {t}= useTranslation();
    return (
        <section className="services" id="services">
            <div className="services">
                <div className="container">
                    <h1 className="sup-title">{t("Services.head")}</h1>
                    <div className="services-list">
                        <div>
                            <i className="fa-solid fa-code" style={{ color: '#00eeff' }}></i>
                            <h2>{t("Services.UX")}</h2>
                            <p>
                            {t("Services.Description-u")}
                            </p>
                            <a href="#contact" className="read"> {t("home.More")} </a>
                        </div>

                         {/* Server2 */}
                        <div>
                            <i className="fa-solid fa-laptop-code" style={{ color: '#00eeff' }}></i>
                            <h2>{t("Services.Frontend")}</h2>
                            <p>
                            {t("Services.Description-f")}
                            </p>
                            <a href="#contact" className="read">{t("home.More")}</a>
                        </div>

                    {/* Server3 */}
                        <div>
                            <i className="fa-brands fa-apple" style={{ color: '#00eeff' }}></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i className="fa-brands fa-android" style={{ color: '#00eeff' }}></i>
                            <h2>{t("Services.Application")}</h2>
                            <p>
                            {t("Services.Description-a")}
                            </p>
                            <a href="#contact" className="read">{t("home.More")}</a>
                        </div>
                    {/* Server4 */}
                        <div>
                            <i className="fa-solid fa-pen" style={{ color: '#00eeff' }}></i>
                            <h2>{t("Services.Customize")}</h2>
                            <p>
                            {t("Services.Description-c")}
                            </p>
                            <a href="#contact" className="read">{t("home.More")}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
