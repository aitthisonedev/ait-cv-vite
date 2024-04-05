// SkillsComponent.js

import React from 'react';
import './skills.css'; 

const Skills = () => {
    return (
        <section className="Skills" id="skills">
            <h1 className="sup-skills">My <span>Skills</span></h1>
            <div className="skilss-container">
                <div className="container1">
                    <h1 className="heading1">Technical skills</h1>
                    <div className="Technical-bars">
                        <div className="bar"><i style={{ color: '#c95d2e' }} className="fa-brands fa-html5"></i>
                            <div className="info">
                                <span>HTML</span>
                            </div>
                            <div className="progress-line html ">
                                <span className="html"></span>
                            </div>
                        </div>
                        <div className="bar"><i style={{ color: '#147bbc' }} className="fa-brands fa-css3"></i>
                            <div className="info">
                                <span>CSS</span>
                            </div>
                            <div className="progress-line css">
                                <span className="css"></span>
                            </div>
                        </div>
                        <div className="bar"><i style={{ color: '#b0bc1e' }} className="fa-brands fa-js"></i>
                            <div className="info">
                                <span>Java-script</span>
                            </div>
                            <div className="progress-line javascript">
                                <span className="javascript"></span>
                            </div>
                        </div>
                        <div className="bar"><i style={{ color: '#c32ec9' }} className="fa-brands fa-python"></i>
                            <div className="info">
                                <span>Python</span>
                            </div>
                            <div className="progress-line python">
                                <span className="python"></span>
                            </div>
                        </div>
                        <div className="bar"><i style={{ color: '#69bcbc' }} className="fa-brands fa-react"></i>
                            <div className="info">
                                <span>React</span>
                            </div>
                            <div className="progress-line react">
                                <span className="react"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container1">
                    <h1 className="heading1">Professional skills</h1>
                    <div className="radial-bars-container">
                        <div className="radial-bars">
                            <svg x="0px" y="0px" viewBox="0 0 200 200">
                                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                <circle className="path path-1" cx="100" cy="100" r="80"></circle>
                            </svg>
                            <div className="percentage">90%</div>
                            <div className="text">Creativity</div>
                        </div>
                        <div className="radial-bars">
                            <svg x="0px" y="0px" viewBox="0 0 200 200">
                                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                <circle className="path path-2" cx="100" cy="100" r="80"></circle>
                            </svg>
                            <div className="percentage">65%</div>
                            <div className="text">Communication</div>
                        </div>
                        <div className="radial-bars">
                            <svg x="0px" y="0px" viewBox="0 0 200 200">
                                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                <circle className="path path-3" cx="100" cy="100" r="80"></circle>
                            </svg>
                            <div className="percentage">75%</div>
                            <div className="text">Problem Solving</div>
                        </div>
                        <div className="radial-bars">
                            <svg x="0px" y="0px" viewBox="0 0 200 200">
                                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                <circle className="path path-4" cx="100" cy="100" r="80"></circle>
                            </svg>
                            <div className="percentage">85%</div>
                            <div className="text">Team work</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
