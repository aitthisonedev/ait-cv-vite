// eslint-disable-next-line no-unused-vars
import React from "react";
import './experiences.css'
const experiences = [
  {
    id: 1,
    company: "Programmer",
    title: "Freelance",
    location: "Laos",
    duration: "2016 - Present",
    description:
      " With a passion for technology that began during my school days, I have amassed over 8 years of experience in web application development. As a dedicated freelancer, I specialize in creating tailored solutions that precisely meet client needs, from dynamic websites to versatile applications. My journey in tech has been fueled by a constant desire to learn and innovate, ensuring that every project I undertake not only meets but exceeds expectations Inviting you to explore the possibilities with my services—where your vision is transformed into digital reality.",
    imageUrl: "/image/devIcon.png", // Example image URL
  },
  {
    id: 2,
    company: "SalaDaeng (Lao) Company Limited",
    title: "Account Executive",
    location: "Laos-Thailand",
    duration: "2023 - Present",
    description:
      "Implementing the SAP B1 system was a transformative journey, enriching my expertise in enterprise resource planning. It instilled meticulous planning, streamlined processes, and heightened operational efficiency. This experience was pivotal, equipping me with invaluable skills to navigate complex business landscapes with confidence and precision",
    imageUrl: "https://media.licdn.com/dms/image/C4E0BAQGLWcztvPRogQ/company-logo_200_200/0/1663911610258/sala_daeng_logo?e=2147483647&v=beta&t=7l8qxeZgaHzpwIT8BYhpBygHpV7s0kX0rXMP4zw4eBc", // Example image URL
  },
  {
    id: 3,
    company: "Industeklao Company Limited",
    title: "Sales Manager",
    location: "Vientiane Lao PDR",
    duration: "2020 - 2023",
    description:
      "Passionate about sales, I excel in sales planning and customer engagement, particularly in the realm of security and safety equipment. My expertise lies in crafting targeted strategies to surpass sales objectives. By proactively engaging clients, I ensure the seamless integration of essential safety solutions, elevating both security standards and customer satisfaction",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQz7SygeI5d2a0crqpIG03grotcZ9FLIFHnen7C-WCA&s", // Example image URL
  },
  {
    id: 4,
    company: "Smartklin Company Limited",
    title: "General Manager",
    location: "Vientiane Lao PDR",
    duration: "2020 - 2023",
    description:
      "As a General Manager at a distributor of Karcher brand cleaning machines, I spearheaded strategic initiatives, fostering robust partnerships and driving exponential growth. Leading cross-functional teams, I optimized operations, honed market insights, and delivered unparalleled customer satisfaction. This role epitomized dynamic leadership and fueled my passion for innovation and excellence.",
    imageUrl: "https://lab-108-bucket.s3-ap-southeast-1.amazonaws.com/company-images/10ffd56f-2490-408c-a1f8-970dae7d5921.jpeg", // Example image URL
  },
  {
    id: 5,
    company: "New Concept Macro finance ",
    title: "Loan officer",
    location: "Vientiane Lao PDR",
    duration: "2016 -2019",
    description:
      "My tenure as a diligent intern at a small financial institution sculpted my foundation in finance. Progressing to a loan officer role, I navigated intricate financial landscapes with finesse, fostering client trust and facilitating sound lending decisions. While often unmentioned, this experience remains a cornerstone of my professional journey.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkU0Nx_Qa9Ry0HIMbYURoXeNFdreIJUplGLBekEuXaDQ&s", // Example image URL
  },
  {
    id: 6,
    company: "Phetnakhone Company Limited",
    title: "Construction Engineer",
    location: "Veintiane Lao PDR",
    duration: "2014 - 2016",
    description:
      "Immersed in our family's construction business, I pioneered 3D design and supervised all construction endeavors. Balancing innovation with meticulous oversight, I ensured projects met exacting standards. This hands-on experience honed my design acumen and project management skills, underscoring the indispensable role of creativity and precision in the construction industry",
    imageUrl: "https://www.creativefabrica.com/wp-content/uploads/2020/12/14/Logo-House-Design-Graphics-7152765-1.jpg", // Example image URL
  },
  // Add more experiences with images as needed
];

const WorkExperience = () => {
  return (
    <div className="work-experience" id="experiences">
      <h2>Work Experience</h2>
      <ul>
        {experiences.map((exp) => (
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

export default WorkExperience;
