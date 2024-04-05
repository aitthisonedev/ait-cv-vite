import React from 'react';
import './footertow.css';
function FooterTwo() {
    return (
        <div className="container- my-5 " data-bis_skin_checked="1" >
            <footer className="text-white text-center text-lg-start">
                <div className="row p-4 " data-bis_skin_checked="1">
                    <div className="col-6 col-md-2 mb-1  " data-bis_skin_checked="1">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 ">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 ">
                                    Features
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 ">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 ">
                                    FAQs
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 ">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3" data-bis_skin_checked="1">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 ">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 ">
                                    Features
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 ">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 ">
                                    FAQs
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 ">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-5 offset-md-1 mb-3" data-bis_skin_checked="1">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p className='text-white'>Monthly digest of what's new and exciting from us.</p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2" data-bis_skin_checked="1">
                                <label htmlFor="newsletter1" className="visually-hidden">
                                    Email address
                                </label>
                                <input
                                    id="newsletter1"
                                    type="text"
                                    className="form-control"
                                    placeholder="Email address"
                                />
                                <button className="btn btn-primary" type="button">
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)' }}>
                © 2023 Aittisone DUANGSOMPHEANG, Inc. All rights reserved.
                </div>
            </footer>
        </div>
    );
}

export default FooterTwo;
