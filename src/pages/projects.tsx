import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";

import "../assets/css/projects.css";

import trivaiImg from "../assets/img/trivai.png";
import millenniumImg from "../assets/img/millennium.png";
import img from "../assets/img/projects.jpg";

const projects = [
  {
    semester: "Spring 2023",
    title: "TRIVAI",
    description:
      "An iOS application that generates quizzes for users based on any topic.",
    imageUrl: trivaiImg,
    link: "https://www.google.com",
    // tags: ["hey"]
  },
  {
    semester: "Spring 2023",
    title: "MILLENNIUM X CDS",
    description:
      "Building scalable pipelines for data collection and cleansing, and utilizing quantitative strategies for portfolio construction.",
    imageUrl: millenniumImg,
    link: null,
    // tags: ["yo", "hi"]
  }
];

const About: React.FC = () => {
  return (
    <>
      <Layout name="Projects">
        <div>
          {/* image */}
          <div className="mb-15">
            <img
              src={img.src}
              alt="project"
              className="w-full h-[17rem] sm:h-[30rem] md:h-[54rem] mt-16"
            />
          </div>
          {/* content */}
          <div className="border-thin mt-10 pt-10">
            <div>
              <h1 className="text-5xl">Project Spotlight</h1>
            </div>
            <div>
              <p className="mt-4 text-lg font-light">
                At Cornell Data Science, our project work embodies the
                cutting-edge intersection of theory and practical application
                across a broad spectrum of data science disciplines. Our
                dedicated subteams—Data Science, Machine Learning Engineering,
                Data Engineering, and Quantitative Finance—drive forward a
                diverse range of initiatives that advance our understanding and
                application of data analytics, machine learning models, and
                quantitative financial strategies. Through rigorous analysis,
                innovative model development, and strategic implementations,
                each project supports our mission to foster an environment of
                learning and growth while producing impactful, data-driven
                solutions for real-world problems.
              </p>
            </div>
            {/* add sort by team later?, search bar for projects? filterable? */}
            {[...new Set(projects.map(p => p.semester))].map(semester => (
              <div key={semester}>
                <h2 className="text-3xl mt-8 mb-4">{semester}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                  {projects
                    .filter(p => p.semester === semester)
                    .map((project, index) => (
                      <div key={index} className="p-4 pl-0">
                        <div className="uppercase text-xs text-gray-400 mb-2">
                          {project.title}
                        </div>
                        <div>
                          {/* image */}
                          {project.link ? (
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <Image
                                src={project.imageUrl.src}
                                alt={project.title}
                                width={500}
                                height={224}
                                className="border transition duration-300 ease-in-out hover:bg-gray-400"
                              />
                            </a>
                          ) : (
                            <Image
                              src={project.imageUrl.src}
                              alt={project.title}
                              width={500}
                              height={224}
                              className="border transition duration-300 ease-in-out hover:bg-gray-400"
                            />
                          )}
                        </div>
                        <div>
                          <h2 className="text-md mt-4 font-light">
                            {project.description}
                          </h2>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {/* {project.tags.map((tag, tagIndex) => (
                              <span key={tagIndex} className="text-xs bg-gray-100 rounded-full px-3 py-1">
                                {tag}
                              </span>
                            ))} */}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
