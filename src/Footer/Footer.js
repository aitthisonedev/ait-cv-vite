import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Footer.css';
const Footer = () => {
    return (
        <div className="container-footer my-5">
            <footer className="text-white text-center text-lg-start">
                <div className="container p-4">
                    <div className="row mt-4">
                        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">About company</h5>
                            <p className='Make-smarter'>
                                Make smarter decisions faster using the world's most deployed ERP solution
                            </p>
                            <p>
                                Achieve your IPO dreams with SAP Business One and Sala Daeng. Our based ERP system offers unified financial management, real-time visibility, and scalability to help you meet regulatory compliance. With expert implementation and support from SLD, you'll have everything you need to succeed.
                            </p>
                            <div className="mt-4">
                                <a href="/" className="btn btn-floating btn-primary btn-lg"><i className="fa-brands fa-facebook"></i></a>
                                <a href="/" className="btn btn-floating btn-primary btn-lg"><i className="fa-brands fa-whatsapp"></i></a>
                                <a href="/" className="btn btn-floating btn-primary btn-lg"><i className="fa-brands fa-line"></i></a>
                                <a href="/" className="btn btn-floating btn-primary btn-lg"><i className="fab fa-google-plus-g"></i></a>
                            </div>

                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4 pb-1">Search something</h5>
                            <div className="form-outline form-white mb-4">
                                <input type="text" id="formControlLg" className="form-control form-control-md" />
                                <label className="form-label" htmlFor="formControlLg">Search</label>
                            </div>
                            <ul className="fa-ul" style={{ marginLeft: '1.65em' }}>
                                <li className="mb-3">
                                    <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">Vientiane, Dongkhamxang Village,Hartxayfong  District, Laos PDR</span>
                                </li>
                                <li className="mb-3">
                                    <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">itsarkhone@gmail.com</span>
                                </li>
                                <li className="mb-3">
                                    <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+856 20 788 666 95</span>
                                </li>
                                <li className="mb-3">
                                    <span className="fa-li"><i className="fas fa-print"></i></span><span className="ms-2">+856 20 599 951 25</span>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0" >
                            <h5 className="text-uppercase mb-4">Opening hours</h5 >
                            <table className="table text-center ">
                                <tbody className="test">
                                    <tr>
                                        <td>Mon - Thu:</td>
                                        <td>8am - 9pm</td>
                                    </tr>
                                    <tr>
                                        <td>Fri - Sat:</td>
                                        <td>8am - 1am</td>
                                    </tr>
                                    <tr>
                                        <td>Sunday:</td>
                                        <td>9am - 10pm</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2023 :    Dev by Aittisone DUANGSOMPHEANG I
                    ERP SAP Business One
                </div>
            </footer>
        </div>
    );
};

export default Footer;
