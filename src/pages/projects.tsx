import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import { FaGithub, FaFileAlt } from "react-icons/fa";

import "../assets/css/projects.css";

import vibeSyncImg from "../assets/img/vibesync.png";
import imdbImg from "../assets/img/imdb.png";
import pocketmlImg from "../assets/img/pocketml.png";
import caddieaiImg from "../assets/img/caddieai.png";
import trivaiImg from "../assets/img/trivai.png";
import millenniumImg from "../assets/img/millennium.png";
import img from "../assets/img/projects.jpg";

const projects = [
  {
    semester: "Fall 2024",
    title: "VibeSync",
    description: "VibeSync is a research project which aims to explore the boundary of ML research with music. \
    Inspired by recent advances with contrastive learning and joint language-audio embeddings, we aim to build \
    a proof-of-concept system where a user specifies a playlist title and receives recommended songs. We want \
    to see how far take this and what insights we can gain.",
    imageUrl: vibeSyncImg,
    githubLink: "https://github.com/CornellDataScience/VibeSync",
    presentationLink: null,
    // tags: ["hey"]
  },
  {
    semester: "Fall 2024",
    title: "imdb",
    description:
      "In-Memory Database (IMDb) is an implementation of the Redis protocol.",
    // more description was not found because didn't find the slides
    imageUrl: imdbImg,
    githubLink: "https://github.com/CornellDataScience/imdb",
    presentationLink: null,
    // tags: ["hey"]
  },
  {
    semester: "Spring 2024",
    title: "PocketML",
    description:
      "We developed a mobile application and library that reduces overhead of training ML models by allowing users to start, stop, train, monitor, and deploy their models remotely from their mobile device.",
    imageUrl: pocketmlImg,
    githubLink: "https://github.com/CornellDataScience/PocketML",
    presentationLink: "https://docs.google.com/presentation/d/1rTwoFj3Ng_ShNENmgBxngmSYpiLAuZ9hXi9G3X-ORQo",
    // tags: ["hey"]
  },
  {
    semester: "Spring 2024",
    title: "CaddieAI",
    description:
      "We develop a mobile app that uses computer vision to analyze a user's golf swing through their smartphone camera to predict the trajectory and flight of their golf ball. While on the course, would provide caddie-like advice to players to improve their game.",
    imageUrl: caddieaiImg,
    githubLink: null,
    presentationLink: "https://docs.google.com/presentation/d/1Tuqu8EzWHLV98F4vwd7DsThdhCrnfvQEdh8xi3vZfHY",
    // tags: ["hey"]
  },

  {
    semester: "Spring 2023",
    title: "TRIVAI",
    description:
      "An iOS application that generates quizzes for users based on any topic.",
    imageUrl: trivaiImg,
    githubLink: null,
    presentationLink: null,
    // tags: ["hey"]
  },
  {
    semester: "Spring 2023",
    title: "MILLENNIUM X CDS",
    description:
      "Building scalable pipelines for data collection and cleansing, and utilizing quantitative strategies for portfolio construction.",
    imageUrl: millenniumImg,
    githubLink: null,
    presentationLink: null,
    // tags: ["yo", "hi"]
  },
  {
    semester: "Fall 2022",
    title: "MathSearch",
    description:
      "MathSearch is a next-generation search engine designed to locate equations within PDFs using LaTeX math script. It addresses a major limitation of using CTRL/CMD + F with standard keyboards: the inability to directly search for mathematical symbols (like integrals and summations). Our platform enables users to search equations using LaTeX notation, and we return PDF pages with bounding boxes highlighting the closest matches to the queried equations.",
    imageUrl: "https://opengraph.githubassets.com/1/CornellDataScience/MathSearch",
    githubLink: "https://github.com/CornellDataScience/MathSearch",
    presentationLink: null,
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
              className="w-full h-[17rem] sm:h-[30rem] md:h-[54rem] mt-16 object-cover"
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
                        <div className="flex items-center justify-between uppercase text-base text-gray-400 mb-2">
                          <span className="text-lg">{project.title}</span>
                          <div className="flex gap-2">
                            {project.githubLink ? (
                              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                                <FaGithub size={24} />
                              </a>
                            ) : (
                              <span className="cursor-not-allowed">
                                <FaGithub size={24} className="text-gray-300" />
                              </span>
                            )}
                            {project.presentationLink ? (
                              <a href={project.presentationLink} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                                <FaFileAlt size={24} />
                              </a>
                            ) : (
                              <span className="cursor-not-allowed">
                                <FaFileAlt size={24} className="text-gray-300" />
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="relative h-[224px]">
                          {/* image */}
                          {project.githubLink ? (
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                              {typeof project.imageUrl === 'string' ? (
                                <Image
                                  src={project.imageUrl}
                                  alt={project.title}
                                  fill
                                  className="border transition duration-300 ease-in-out hover:bg-gray-400 object-contain"
                                />
                              ) : (
                                <Image
                                  src={project.imageUrl.src}
                                  alt={project.title}
                                  fill
                                  className="border transition duration-300 ease-in-out hover:bg-gray-400 object-cover"
                                />
                              )}
                            </a>
                          ) : (
                            typeof project.imageUrl === 'string' ? (
                              <Image
                                src={project.imageUrl}
                                alt={project.title}
                                fill
                                className="border transition duration-300 ease-in-out hover:bg-gray-400 object-contain"
                              />
                            ) : (
                              <Image
                                src={project.imageUrl.src}
                                alt={project.title}
                                fill
                                className="border transition duration-300 ease-in-out hover:bg-gray-400 object-cover"
                              />
                            )
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
