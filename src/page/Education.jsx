// eslint-disable-next-line no-unused-vars
import React from "react";
import './Education.css'
const education = [
  {
    id: 1,
    company: "Training Course",
    title: "Programers",
    location: "Vientiane-Laos",
    duration: "2016 - Present",
    description:
      "Since 2016, my journey as a programmer has been marked by relentless dedication to honing my craft. Continuously advancing my development skills, I embrace challenges as opportunities for growth. With an unwavering commitment to excellence, I strive to surpass current capabilities and pave the way for future success in the ever-evolving tech landscape",
    imageUrl: "/image/devIcon.png",
  },
  {
    id: 2,
    company: "Rattana institute of business administration ",
    title: "A Bachelor's program in General Management ",
    location: "Vientiane-Laos",
    duration: "2016 - 2021",
    description:
      "Armed with a Bachelor's degree in General Management, I possess a comprehensive understanding of organizational dynamics and strategic planning. This academic foundation, coupled with real-world experience, equips me to navigate multifaceted challenges and drive sustainable growth in diverse business environments",
    imageUrl: "/image/rbaclogo.png",
  },
  {
    id: 3,
    company: "Shawpat",
    title: "Safety-Course",
    location: "Thailand",
    duration: "In 2020",
    description:
      "While working, I undertook a safety training course for labor in Thailand, augmenting my skills and knowledge to prioritize workplace safety and compliance.in 4 courses ",
    imageUrl: "https://www.shawpat.or.th/images/design/logo-01.png", // Example image URL
  },
  {
    id: 4,
    company: "Training Course",
    title: "Excel Advanced level",
    location: "Vientiane",
    duration: "In 2020",
    description:
      "Developed multiple high-traffic APIs using Node.js and Express. Improved system stability through rigorous testing and code reviews.",
    imageUrl: "https://scontent.fvte1-1.fna.fbcdn.net/v/t39.30808-6/326695926_490466786613536_4747580785846771760_n.png?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGuAAwC--AAz3uVHsR8mWYOvhssyNrYXZi-GyzI2thdmEpBDNmd2qOJz2mdN2mnATlvey6k08CErftwZtPPb5Zr&_nc_ohc=enV844E6CxsQ7kNvgEEFuKI&_nc_ht=scontent.fvte1-1.fna&oh=00_AYBuE1g4Nx1ulu9T-jnxH6qAQMsOqzmAptsWDqpNgcTQZw&oe=66440671", // Example image URL
  },
  {
    id: 5,
    company: "Training Course",
    title: "English",
    location: "Vientiane",
    duration: "2016 - 2019",
    description:
      "Developed multiple high-traffic APIs using Node.js and Express. Improved system stability through rigorous testing and code reviews.",
    imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/008/359/437/small/collection-colored-thin-icon-of-english-language-learning-subject-book-graduated-hat-learning-and-education-concept-illustration-vector.jpg", // Example image URL
  },
 
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
