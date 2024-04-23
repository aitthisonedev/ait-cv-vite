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
    imageUrl: "https://media.licdn.com/dms/image/C4E0BAQGLWcztvPRogQ/company-logo_200_200/0/1663911610258/sala_daeng_logo?e=2147483647&v=beta&t=7l8qxeZgaHzpwIT8BYhpBygHpV7s0kX0rXMP4zw4eBc", // Example image URL
  },
  {
    id: 2,
    company: "Industeklao Company Limited",
    title: "Software Engineer",
    location: "San Francisco, CA",
    duration: "Mar 2016 - Dec 2019",
    description:
      "Developed multiple high-traffic APIs using Node.js and Express. Improved system stability through rigorous testing and code reviews.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQz7SygeI5d2a0crqpIG03grotcZ9FLIFHnen7C-WCA&s", // Example image URL
  },

  // Add more education with images as needed
];

const Education = () => {
  return (
    <div className="work-experience" id="education">
      <h2>Education History</h2>
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
  );
};

export default Education;
