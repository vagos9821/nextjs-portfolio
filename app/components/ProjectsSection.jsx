"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "JavaScript Theme Calculator",
    image: "/images/projects/1.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/vagos9821/FrontendMentor-CalculatorApp",
    previewUrl: "https://vagos9821.github.io/FrontendMentor-CalculatorApp/",
  },
  {
    id: 2,
    title: "Random Quote Generator",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/vagos9821/get-skill-quote-machine",
    previewUrl: "https://codepen.io/vagos9821/pen/rNRPWYP",
  },
  {
    id: 3,
    title: "Tip Calculator",
    image: "/images/projects/3.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/vagos9821/FrontendMentor-TipCalculatorApp",
    previewUrl: "https://vagos9821.github.io/FrontendMentor-TipCalculatorApp/",
  },
  {
    id: 4,
    title: "Dark Themed Website",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/vagos9821/FrontendMentor-FyloDarkThemeLandingPage",
    previewUrl:
      "https://vagos9821.github.io/FrontendMentor-FyloDarkThemeLandingPage/",
  },
  {
    id: 5,
    title: "Age Calculator",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/vagos9821/FrontendMentor-AgeCalculatorApp",
    previewUrl: "https://vagos9821.github.io/FrontendMentor-AgeCalculatorApp/",
  },
  {
    id: 6,
    title: "NFT Card Preview",
    image: "/images/projects/6.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/vagos9821/FrontendMentor-NftPreviewComponent",
    previewUrl:
      "https://vagos9821.github.io/FrontendMentor-NftPreviewComponent/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
