// eslint-disable-next-line no-unused-vars
import React from "react";
import './Education.css'
const education = [
  {
    id: 1,
    company: "SalaDaeng (Lao) Company Limited",
    title: "Account Executive",
    location: "New York, NY",
    duration: "Jan 2020 - Present",
    description:
      "Lead a team of developers in creating web applications that increased company productivity by 20%. Implemented modern development processes including CI/CD which decreased deployment failures by 25%.",
    imageUrl: "/image/rbaclogo.png", // Example image URL
  },
  {
    id: 2,
    company: "Industeklao Company Limited",
    title: "Software Engineer",
    location: "San Francisco, CA",
    duration: "Mar 2016 - Dec 2019",
    description:
      "Developed multiple high-traffic APIs using Node.js and Express. Improved system stability through rigorous testing and code reviews.",
    imageUrl: "/image/rbaclogo.png", // Example image URL
  },
  {
    id: 3,
    company: "Industeklao Company Limited",
    title: "Software Engineer",
    location: "San Francisco, CA",
    duration: "Mar 2016 - Dec 2019",
    description:
      "Developed multiple high-traffic APIs using Node.js and Express. Improved system stability through rigorous testing and code reviews.",
    imageUrl: "/image/rbaclogo.png", // Example image URL
  },

  // Add more education with images as needed
];

const Education = () => {
  return (
    <div className="work-experience" id="education">
      
      <h2>Education History</h2>
      <div className="grid-control">
      <img className="per-image" src="/image/Ait-h.png" alt="" />
      <ul>
        {education.map((exp) => (
          <li key={exp.id}>
            <div className="experience-entry">
              <img
                src={exp.imageUrl}
                alt={`${exp.company} logo`}
                className="company-logo"
              />
              <div className="text-content">
                <h3>
                  {exp.title} - {exp.company}
                </h3>
                <p>
                  {exp.location} | {exp.duration}
                </p>
                <p>{exp.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Education;
