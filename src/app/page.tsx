"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import whiteLogo from "../assets/img/logo.png";
import coloredLogo from "../assets/img/logo_colored.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import team1 from "../assets/img/team1.jpg";
import lec from "../assets/img/lec.jpg";
import lec2 from "../assets/img/lec2.jpg";

import "../assets/css/page.css";

export default function Home() {
  const [isHome, setIsHome] = useState(true);

  // handle header color state
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector(".hero")?.clientHeight || 0;
      if (window.scrollY > heroHeight) {
        setIsHome(false);
      } else {
        setIsHome(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // fade in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <main className="relative w-full min-h-screen flex flex-col justify-end bg-cover bg-center">
        <title>Home | Cornell Data Science</title>
        <div className="">
          <Header isHome={isHome} />
        </div>
        <div className="hero relative w-full min-h-screen flex flex-col items-center justify-center text-white">
          {/* darken image filter */}
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
          <div className="font-light box-mobile absolute bottom-4 right-4 p-4 flex flex-col space-y-2 text-xs md:text-xs sm:text-xs">
            <div className="flex items-center">
              <div className="p-2 border-l border-white">
                <p>LAST UPDATED: SEPTEMBER 18TH, 2024</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="p-2 border-l border-white">
                <p>
                  THIS ORGANIZATION <br />
                  IS A REGISTERED STUDENT <br />
                  ORGANIZATION OF CORNELL UNIVERSITY.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="p-2 border-l border-white">
                <p>
                  COPYRIGHT © 2024 <br />
                  CORNELL DATA SCIENCE <br />
                  PROJECT TEAM. <br />
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 p-4 m-0 flex items-center space-x-2 pl-0">
            <img
              src={whiteLogo.src}
              alt="Logo"
              className="h-28 sm:h-24 md:h-32 lg:h-[15rem] blink-in-once"
            />
            <div className="hero-text text-xs sm:text-lg lg:text-4xl">
              <span className="letter">C</span>
              <span className="letter">D</span>
              <span className="letter">S</span>
            </div>
          </div>
        </div>

        <section className="w-full flex flex-col p-6 sm:p-24 bg-[#efefef]">
          <div className="flex flex-col sm:flex-row items-start space-x-0 sm:space-x-12 mt-12 sm:mt-48">
            <div className="relative w-full sm:w-1/2">
              <div className="text-3xl sm:text-7xl before:content-[''] before:absolute before:top-[-15px] sm:before:top-[-30px] before:left-0 before:w-full before:border-t before:border-black">
                Empowering Data <br />
                Driven Innovation
              </div>
            </div>
            <div className="max-w-full sm:max-w-3xl mt-6 sm:mt-0">
              <div className="text-xl sm:text-3xl font-light">
                Cornell Data Science (CDS) is an undergraduate project team
                which builds data-driven solutions to a variety of real-world
                problems. Our team of 92 students is a great place to meet
                people with diverse interests, gain experience at the
                intersection of theory and application, and contribute to the
                greater community initiatives.
              </div>
              <img
                src={team1.src}
                alt="Team"
                className="w-full h-56 sm:h-96 mt-4 sm:mt-16"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start space-x-0 sm:space-x-12 mt-12 sm:mt-48">
            <div className="relative w-full sm:w-1/2">
              <div className="text-3xl sm:text-7xl before:content-[''] before:absolute before:top-[-15px] sm:before:top-[-30px] before:left-0 before:w-full before:border-t before:border-black">
                Driving Data Science Excellence
              </div>
            </div>
            <div className="max-w-full sm:max-w-3xl mt-6 sm:mt-0">
              <div className="text-xl sm:text-3xl font-light">
                We work on projects that span the spectrum of data science. From
                applied deep learning to user-friendly visualizations, there is
                likely someone on CDS working on it.
              </div>
              <img
                src={lec.src}
                alt="Lecture"
                className="w-full h-56 sm:h-96 mt-4 sm:mt-16"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start space-x-0 sm:space-x-12 mt-12 sm:mt-48">
            <div className="relative w-full sm:w-1/2">
              <div className="text-3xl sm:text-7xl before:content-[''] before:absolute before:top-[-15px] sm:before:top-[-30px] before:left-0 before:w-full before:border-t before:border-black">
                Showcasing <br />
                Data Science Impact
              </div>
            </div>
            <div className="max-w-full sm:max-w-3xl mt-6 sm:mt-0">
              <div className="text-xl sm:text-3xl font-light">
                We connect industry and passionate students together through our
                focus on data science. Come to our networking events, company
                talks, and mentoring sessions to learn more about careers in
                data science.
              </div>
              <img
                src={lec2.src}
                alt="Lecture"
                className="w-full h-56 sm:h-96 mt-4 sm:mt-16"
              />
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col p-6 sm:p-24 pt-12 sm:pt-24 bg-[#1e1f2b] text-[#454256]">
          <div className="flex flex-col sm:flex-row w-full space-x-0 sm:space-x-12 h-full">
            <div className="w-full sm:w-1/3">
              <div className="text-3xl sm:text-5xl font-light text-white">
                Driving innovation and excellence through specialized subteams.
              </div>
              <div className="mt-10 mb-12 sm:mb-10">
                <Link href="/subteams">
                  <button className="border border-white text-white py-2 px-8 text-lg sm:text-xl hover:bg-white hover:text-[#1e1f2b] transition-colors duration-300">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <ul className="list-none text-xl lg:text-5xl sm:text-3xl font-light flex-1 w-full max-w-7xl mx-auto">
              <li className="border-b border-t border-[#454256] py-5 sm:py-10 pl-7 sm:pl-14 hover:text-white hover:pl-20 transition-all duration-300">
                <Link href="/subteam/machine-learning-engineering">
                  MACHINE LEARNING ENGINEERING
                </Link>
              </li>
              <li className="border-b border-[#454256] py-5 sm:py-10 pl-7 sm:pl-14 hover:text-white hover:pl-20 transition-all duration-300">
                <Link href="/subteam/data-engineering">DATA ENGINEERING</Link>
              </li>
              <li className="border-b border-[#454256] py-5 sm:py-10 pl-7 sm:pl-14 hover:text-white hover:pl-20 transition-all duration-300">
                <Link href="/subteam/quantitative-finance">
                  QUANTITATIVE FINANCE
                </Link>
              </li>
              <li className="border-b border-[#454256] py-5 sm:py-10 pl-7 sm:pl-14 hover:text-white hover:pl-20 transition-all duration-300">
                <Link href="/subteam/data-science">DATA SCIENCE</Link>
              </li>
            </ul>
          </div>

          <div className="flex-col items-center mt-10 sm:mt-20 justify-center sm:flex h-screen">
            <div className="text-3xl sm:text-7xl font-light text-white text-center mb-4">
              Connect and Learn
            </div>
            <div className="flex justify-center items-center mt-5 mb-5">
              <img
                src={coloredLogo.src}
                alt="CDS Logo"
                className="mt-5 h-24 sm:h-36 w-24 sm:w-36"
              />
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="relative border border-[#454256] hover:border-white transition-colors duration-400 m-2 p-4 sm:p-7 rounded-md w-full sm:w-[30rem] h-80 sm:h-[27rem] group">
                <div className="text-xl sm:text-4xl font-light text-white text-left self-start mb-4">
                  People
                </div>
                <div className="text-lg sm:text-lg text-[#454256] group-hover:text-white transition-colors duration-400 absolute bottom-0 left-0 mb-4 p-4 sm:p-7">
                  Our members are the heart of our team. Ranging from freshmen
                  to graduate students, they represent five different colleges
                  and a multitude of majors. Come meet all 92 of us and discover
                  the diverse talents that drive our success!
                </div>
                <div className="cursor-pointer absolute top-4 right-3 mt-2 mr-2 flex items-center justify-center transition-colors duration-400 w-10 sm:w-12 h-10 sm:h-12 bg-transparent border border-[#454256] group-hover:border-white rounded-full">
                  <Link href="/subteams">
                    <svg
                      className="w-5 sm:w-6 h-5 sm:h-6 text-[#454256] group-hover:text-white transition-colors duration-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="relative border border-[#454256] hover:border-white transition-colors duration-400 m-2 p-4 sm:p-7 rounded-md w-full sm:w-[30rem] h-80 sm:h-[27rem] group">
                <div className="text-xl sm:text-4xl font-light text-white text-left self-start mb-4">
                  Education
                </div>
                <div className="text-lg sm:text-lg text-[#454256] group-hover:text-white transition-colors duration-400 absolute bottom-0 left-0 mb-4 p-4 sm:p-7">
                  Education is a cornerstone of our mission. Our commitment
                  extends to educating both our members and the broader Cornell
                  community, underscoring the importance we place on knowledge
                  sharing and community engagement.
                </div>
                <div className="cursor-pointer absolute top-4 right-3 mt-2 mr-2 flex items-center justify-center transition-colors duration-400 w-10 sm:w-12 h-10 sm:h-12 bg-transparent border border-[#454256] group-hover:border-white rounded-full">
                  <Link href="/education">
                    <svg
                      className="w-5 sm:w-6 h-5 sm:h-6 text-[#454256] group-hover:text-white transition-colors duration-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
