import imgData from "./imgData";

const projects = [
  {
    title: "Car Rental",
    techStack: [
      "React",
      "TypeScript",
      "React-router",
      "Tailwind",
      "AutoAnimate",
    ],
    description:
      "Simple example of a car rental platform, created to replicate a particular design.",
    img: [{ src: imgData.carRental, position: "left" }],
    link: "https://portfolio-car-rental.vercel.app/",
    github: "https://github.com/mrlzzz/portfolio-car-rental",
    backend: "https://github.com/mrlzzz/vite-project-express",
  },
  {
    title: "Landing Page",
    techStack: ["React", "TypeScript", "Tailwind", "AutoAnimate"],
    description:
      "Collection of landing pages, created to mimic different design styles.",
    img: [
      { src: imgData.landingPage_1, position: "center" },
      { src: imgData.landingPage_2, position: "center" },
    ],
    link: "https://mrlzzz.github.io/react-landing-page",
    github: "https://github.com/mrlzzz/react-landing-page",
    backend: "",
  },
  {
    title: "React Playground",
    techStack: [
      "React",
      "JavaScript",
      "Node",
      "Express",
      "React-router",
      "Context API",
      "React-form-hook",
      "AutoAnimate",
      "Tailwind",
      "Markdown",
    ],
    description:
      "Practical playground for implementing React, JavaScript, and related concepts. It features examples with detailed explanations, covering topics like API calls, CSS flexbox, and animations.",
    img: [{ src: imgData.reactPlayground, position: "left" }],
    link: "https://mrlzzz.github.io/vite-project/",
    github: "https://github.com/mrlzzz/vite-project",
    backend: "https://github.com/mrlzzz/vite-project-express",
  },
];

export default projects;
