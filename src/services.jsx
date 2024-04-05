import React from 'react';
import './services.css'; 

const Services = () => {
    return (
        <section className="services" id="services">
            <div className="services">
                <div className="container">
                    <h1 className="sup-title">My <span>Services</span></h1>
                    <div className="services-list">
                        <div>
                            <i className="fa-solid fa-code" style={{ color: '#00eeff' }}></i>
                            <h2>UI/UX Design</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugit facilis corporis
                                accusamus ea obcaecati nemo vel deleniti error! Praesentium dolore nesciunt optio
                                consectetur accusantium ea sint eveniet non dignissimos.
                            </p>
                            <a href="#" className="read">Learn More</a>
                        </div>
                        <div>
                            <i className="fa-solid fa-crop-simple" style={{ color: '#00eeff' }}></i>
                            <h2>UI/UX Design</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugit facilis corporis
                                accusamus ea obcaecati nemo vel deleniti error! Praesentium dolore nesciunt optio
                                consectetur accusantium ea sint eveniet non dignissimos.
                            </p>
                            <a href="#" className="read">Learn More</a>
                        </div>
                        <div>
                            <i className="fa-brands fa-apple" style={{ color: '#00eeff' }}></i>
                            <h2>UI/UX Design</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugit facilis corporis
                                accusamus ea obcaecati nemo vel deleniti error! Praesentium dolore nesciunt optio
                                consectetur accusantium ea sint eveniet non dignissimos.
                            </p>
                            <a href="#" className="read">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
