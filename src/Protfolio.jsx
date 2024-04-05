import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
      <div className="protfolio" id="protfolio">
        <div className="main-text" id="project">
          <h2>Latest <span>project</span></h2>
          <div className="row-one">
            <img src="/image/projectpng.png" alt="Latest project" />
          </div>
          <div className="protfolio-content">
            <div className="row">
              <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/234083561/original/5451cbe83b961781b8765e47891de28cc3163ad9/do-professional-web-ui-or-landing-page-design.jpg"
                alt="Project 1" />
              <div className="layer">
                <h5>UI/UX Design</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nobis illo rerum
                  aspernatur nesciunt, in animi! Illum, hic eligendi nostrum nisi modi provident, maxime
                  animi itaque quos repellat ab necessitatibus?
                </p>
                <a href="/"><i className="bx bx-link-external" style={{ color: 'aliceblue' }}></i></a>
              </div>
            </div>
            <div className="row">
              <img src="https://images.ctfassets.net/ooa29xqb8tix/24XYZktClnZjDjt2YNlGmX/d857becac30265e19ad8847365c68fbf/Metadata.png"
                alt="Project 2" />
              <div className="layer">
                <h5>UI/UX Design</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nobis illo rerum
                  aspernatur nesciunt, in animi! Illum, hic eligendi nostrum nisi modi provident, maxime
                  animi itaque quos repellat ab necessitatibus?
                </p>
                <a href="/"><i className="bx bx-link-external" style={{ color: 'aliceblue' }}></i></a>
              </div>
            </div>
            <div className="row">
              <img src="https://uicreative.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2019/11/23140644/website-template-design-projects.jpg"
                alt="Project 3" />
              <div className="layer">
                <h5>UI/UX Design</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nobis illo rerum
                  aspernatur nesciunt, in animi! Illum, hic eligendi nostrum nisi modi provident, maxime
                  animi itaque quos repellat ab necessitatibus?
                </p>
                <a href="/"><i className="bx bx-link-external" style={{ color: 'aliceblue' }}></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Portfolio;
