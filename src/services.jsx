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

                         {/* Server2 */}
                        <div>
                            <i className="fa-solid fa-code" style={{ color: '#00eeff' }}></i>
                            <h2>{t("Services.UX")}</h2>
                            <p>
                            UX/UI Design focuses on creating intuitive, engaging digital experiences. UX (User Experience) enhances usability, while UI (User Interface) designs the visual elements, ensuring seamless interaction between users and products.
                            </p>
                            <a href="#contact" className="read"> {t("home.More")} </a>
                        </div>

                         {/* Server2 */}
                        <div>
                            <i className="fa-solid fa-laptop-code" style={{ color: '#00eeff' }}></i>
                            <h2>{t("Services.Frontend")}</h2>
                            <p>
                            Frontend Developers craft the look and feel of websites and apps you interact with. They use code to bring designs to life, making your digital experience seamless and enjoyable.
                            </p>
                            <a href="#contact" className="read">{t("home.More")}</a>
                        </div>

                    {/* Server3 */}
                        <div>
                            <i className="fa-brands fa-apple" style={{ color: '#00eeff' }}></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i className="fa-brands fa-android" style={{ color: '#00eeff' }}></i>
                            <h2>{t("Services.Application")}</h2>
                            <p>
                            At Appellation, we specialize in crafting captivating digital experiences. Our Frontend Developers breathe life into designs, ensuring seamless interaction for users. Elevate your brand with our expertise.
                            </p>
                            <a href="#contact" className="read">{t("home.More")}</a>
                        </div>
                    {/* Server4 */}
                        <div>
                            <i className="fa-solid fa-pen" style={{ color: '#00eeff' }}></i>
                            <h2>Customize</h2>
                            <p>
                            At Srervice, we not only excel in crafting captivating digital experiences, but also customize our services to suit your unique needs. Elevate your brand with tailored frontend development solutions.
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
