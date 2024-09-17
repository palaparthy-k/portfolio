import { About, Works, Contact } from "../components";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    github,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "works",
      title: "Works",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Application Developer",
      icon: web,
    },
    {
      title: "Cyber Security enthusiast",
      icon: backend,
    },,
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
  ];
  
  const experiences = [
    {
      title: "Hackathon Participant - Web Application Developer",
      company_name: "Hackathon Event",
      icon: tesla,
      iconBg: "#fff",
      date: "April 2024",
      points: [
        "Developed a web application aimed at teaching children about nutrition through interactive games.",
        "Contributed with a team to create engaging games like 'Pic Flip' where children identify images and learn about the vitamins and minerals present in food items.",
        "Focused on enhancing the user experience for children through vibrant design, intuitive navigation, and educational content.",
        "Utilized web development technologies including HTML, CSS, and JavaScript to create a responsive and interactive web application.",
      ],
    },
    {
      title: "Zero Trust Cloud Security Virtual Internship",
      company_name: "AICTE - Eduskills Virtual Internship (Zsclaer)",
      icon: starbucks,
      iconBg: "#383E56",
      date: "January 2024 - March 2024",
      points: [
        "Acquired foundational knowledge of Zero Trust Architecture (ZTA) principles and their application in cloud security.",
        "Gained practical understanding of implementing Zero Trust strategies to enhance cloud security posture.",
        "Explored various cybersecurity concepts, including access control, identity verification, and continuous monitoring within a Zero Trust frame."
      ],
    },
    {
      title: "Applied Cyber Security Skills Bootcamp",
      company_name: "IARE - (Indian Society for Technical Education)",
      icon: tesla,
      iconBg: "#fff",
      date: "November 2023 - January 2024",
      points: [
        "Gained hands-on experience in penetration testing and malware analysis.",
        "Learned and practiced penetration testing techniques including vulnerability assessment and exploitation.",
        "Developed skills in Web Application Security, identifying and mitigating common web vulnerabilities.",
        "Solved various Capture The Flag (CTF) challenges, sharpening critical thinking and problem-solving abilities.",
        "Engaged in real-world cybersecurity scenarios, enhancing practical skills in threat detection and response.",
      ],
    },
    {
      title: "Cyber Security Virtual Internship",
      company_name: "AICTE - Eduskills Virtual Internship (Palo Alto Networks)",
      icon: meta,
      iconBg: "#fff",
      date: "May 2023 - July 2023",
      points: [
        "Learned best practices for identifying, mitigating, and preventing cyber threats in various environments.",
        "Gained foundational knowledge of cybersecurity concepts including network security, cloud security, and threat intelligence.",
        "Explored various tools and techniques for securing network infrastructure and responding to potential threats.",
        "Developed a strong understanding of the principles behind modern cyber defense and incident response."
      ]
    },
  ];
  
  const testimonials = [
    {
      testimonial:"LinkedIn",
      linkto: "https://www.linkedin.com/in/keerthanapalaparthy/",
      name:"Keerthana Palaparthy",
      image: jobit,
    },
    {
      testimonial: "GitHub",
      linkto:"https://github.com/palaparthy-k",
      name: "palaparthy-k",
      image: github,
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };