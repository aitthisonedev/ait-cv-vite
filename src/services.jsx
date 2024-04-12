// eslint-disable-next-line no-unused-vars
import React from 'react';
import './services.css'; 

const Services = () => {
    return (
        <section className="services" id="services">
            <div className="services">
                <div className="container">
                    <h1 className="sup-title">My <span>Services</span></h1>
                    <div className="services-list">

                         {/* Server2 */}
                        <div>
                            <i className="fa-solid fa-code" style={{ color: '#00eeff' }}></i>
                            <h2>UX/UI Design</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugit facilis corporis
                                accusamus ea obcaecati nemo vel deleniti error! Praesentium dolore nesciunt optio
                                consectetur accusantium ea sint eveniet non dignissimos.
                            </p>
                            <a href="#Contact" className="read">Learn More</a>
                        </div>

                         {/* Server2 */}
                        <div>
                            <i className="fa-solid fa-laptop-code" style={{ color: '#00eeff' }}></i>
                            <h2>Frontend Developer</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugit facilis corporis
                                accusamus ea obcaecati nemo vel deleniti error! Praesentium dolore nesciunt optio
                                consectetur accusantium ea sint eveniet non dignissimos.
                            </p>
                            <a href="#Contact" className="read">Learn More</a>
                        </div>

                    {/* Server3 */}
                        <div>
                            <i className="fa-brands fa-apple" style={{ color: '#00eeff' }}></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i className="fa-brands fa-android" style={{ color: '#00eeff' }}></i>
                            <h2>Appellation</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugit facilis corporis
                                accusamus ea obcaecati nemo vel deleniti error! Praesentium dolore nesciunt optio
                                consectetur accusantium ea sint eveniet non dignissimos.
                            </p>
                            <a href="#Contact" className="read">Learn More</a>
                        </div>
                    {/* Server4 */}
                        <div>
                            <i className="fa-solid fa-pen" style={{ color: '#00eeff' }}></i>
                            <h2>Customize</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugit facilis corporis
                                accusamus ea obcaecati nemo vel deleniti error! Praesentium dolore nesciunt optio
                                consectetur accusantium ea sint eveniet non dignissimos.
                            </p>
                            <a href="#Contact" className="read">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
