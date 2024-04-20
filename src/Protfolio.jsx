// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
      <div className="protfolio" id="protfolio">
        <div className="main-text" id="project">
          <h2>Latest <span>Project</span></h2>
          <div className="row-one">
            <img src="/image/Lateproject.png" alt="Latest project" />
          </div>
          <div className="protfolio-content">
            <div className="row">
              <img src="/image/Thesslonic.png"
                alt="Project 1" />
              <div className="layer">
                <h5>Thesslonic Co.,Ltd</h5>
                <p>
                Website about Construction 3D Design and service.
                </p>
                <p>www.thesslonic.com</p>
                <a href="https://thesslonic.netlify.app/" target='bank_'><img src="https://thesslonic.netlify.app/assets/img/logo-light.png" ></img></a>
              </div>
            </div>
            <div className="row">
            <img src="/image/vientianetraffic.png"
                alt="Project 2" />
              <div className="layer">
                <h5>Vientianetraffic Co,.Ltd</h5>
                <p>
                Website about Road painting Traffic of lao.
                </p>
                <p>www.vientianetraffic.com</p>
                <a href="https://www.vientianetraffic.com/" target='bank_'><img src="https://www.vientianetraffic.com/images/logo/logoedite.png" ></img></a>
              </div>
            </div>
            <div className="row">
              <img src="/image/industek.png"
                alt="Project 3" />
              <div className="layer">
                <h5>Industeklao Co.,Ltd</h5>
                <p>
                  Website about Safety Equiment product and service.
                </p>
                <p>www.industeklao.com</p>
                <a href="https://www.industeklao.com/" target='bank_' ><img src="https://static.wixstatic.com/media/81237e_d8b6fefa7489438ca02978b9c4a9f73b~mv2.png/v1/fill/w_398,h_158,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Industek%20Logo%20PNG.png" ></img></a>
              </div>
            </div>
            <div className="row">
              <img src="/image/smartklinWeb.png"
                alt="Project 3" />
              <div className="layer">
                <h5>Smartklinlao Co.,Ltd</h5>
                <p>
                  Website Designer Service about Cleaning product Karcher Brand.
                </p>
                <p>www.smartklinlao.com</p>
                <a href="https://www.smartklinlao.com/" target='bank_' ><img src="https://static.wixstatic.com/media/81237e_265c765a01f54af9abf300c78f5847a7~mv2.png/v1/fill/w_370,h_192,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Smartklin%20LOGO%20PNG.png" ></img></a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Portfolio;
