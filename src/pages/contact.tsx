import React from "react";
import Layout from "@/components/Layout";

import "../assets/css/contact.css";
import img from "../assets/img/contact.jpg";

const Contact: React.FC = () => {
  return (
    <>
      <Layout name="Contact Us">
        <div>
          {/* image */}
          <div className="mb-12">
            <img
              src={img.src}
              alt="contact"
              className="w-full h-[13rem] sm:h-[30rem] md:h-[45rem] mt-10 object-cover"
            />
          </div>
          {/* content */}
          <div className="border-thin mt-10 pt-10">
            <div>
              <h1 className="text-5xl mb-8">Ways to Reach Us</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4">
                <h2 className="text-4xl font-light mb-10">Email</h2>
                <a
                  href="mailto:cornelldatascience@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="border-b border-black pb-4 flex justify-between items-center group hover:text-gray-400 hover:border-gray-400 transition-colors duration-300 cursor-pointer">
                    Get in touch with CDS E-Board
                    <svg
                      className="w-4 h-4 group-hover:text-gray-400 transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </p>
                </a>
              </div>
              <div className="p-4">
                <h2 className="text-4xl font-light mb-10">
                  Sponsorship Inquires
                </h2>
                <a
                  href="/sponsorship"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="border-b border-black pb-4 flex justify-between items-center group hover:text-gray-400 hover:border-gray-400 transition-colors duration-300 cursor-pointer">
                    Learn more about becoming a CDS sponsor
                    <svg
                      className="w-4 h-4 group-hover:text-gray-400 transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </p>
                </a>
              </div>
              <div className="p-4">
                <h2 className="text-4xl font-light mb-10">Facebook</h2>
                <a
                  href="https://www.facebook.com/CornellDataScience"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="border-b border-black pb-4 flex justify-between items-center group hover:text-gray-400 hover:border-gray-400 transition-colors duration-300 cursor-pointer">
                    View our Facebook community updates
                    <svg
                      className="w-4 h-4 group-hover:text-gray-400 transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </p>
                </a>
              </div>
              <div className="p-4">
                <h2 className="text-4xl font-light mb-10">Instagram</h2>
                <a
                  href="https://www.instagram.com/cornelldatascience/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="border-b border-black pb-4 flex justify-between items-center group hover:text-gray-400 hover:border-gray-400 transition-colors duration-300 cursor-pointer">
                    View our Instagram community updates
                    <svg
                      className="w-4 h-4 group-hover:text-gray-400 transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
