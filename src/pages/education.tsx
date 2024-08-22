import React from "react";
import Layout from "@/components/Layout";

import "../assets/css/education.css";

const Education: React.FC = () => {
  return (
    <>
      <Layout name="Education">
        <div>
          {/* image */}
          <div className="mb-15">
            <div className="max-w-auto h-[48rem] mt-16 bg-gray-500"></div>
          </div>
          {/* content */}
          <div className="border-thin mt-10 pt-10">
            <div>
              <h1 className="text-5xl">Education</h1>
            </div>
            <div>
              <p className="mt-4 text-lg font-light">
                At Cornell Data Science, we equip students with the skills and
                mindset required to excel as data scientists, enabling them to
                make substantive contributions to diverse data science projects.
                Our semester-long Training Program is designed to foster a
                comprehensive understanding of data science fundamentals, while
                our Deep Dives offer concise workshops that explore cutting-edge
                technologies currently transforming the data science landscape.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-12 mt-14">
            <div className="w-1/3 h-48 bg-gray-500"></div>
            <div className="w-2/3">
              <h1 className="text-4xl font-normal mb-4">
                Introduction to ML (INFO 1998)
              </h1>
              <p className="text-light text-md">
                As the realm of Big Data continues to expand, enrolling in this
                course provides practical experience in data analysis and
                prediction. Data science skills are invaluable across various
                sectors, including finance, healthcare, business, agriculture,
                and software development. By joining our training program, you
                will learn how to construct your first machine learning model
                using real-world datasets.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-12 mt-14">
            <div className="w-1/3 h-48 bg-gray-500"></div>
            <div className="w-2/3">
              <h1 className="text-4xl font-normal mb-4">Data Talks</h1>
              <p className="text-light text-md">
                Every semester, we host industry professionals who share their
                experiences and insights, providing a unique learning
                opportunity for all attendees. Open to everyone, these sessions
                allow students to engage directly with experts, posing questions
                and gaining a clearer understanding of what a career in the
                industry entails. In previous sessions, we have welcomed
                speakers from prominent companies such as Meta, Amazon,
                MunichRE, and Hilton, among others.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-12 mt-14">
            <div className="w-1/3 h-48 bg-gray-500"></div>
            <div className="w-2/3">
              <h1 className="text-4xl font-normal mb-4">Blog</h1>
              <p className="text-light text-md">
                During the semester, our focus includes extensive reading of
                machine learning and data science papers, enhancing our
                understanding and ability to articulate complex concepts. To aid
                in comprehension and to assist others, we frequently craft
                summaries and analyses of these papers. Additionally, we
                occasionally author blog posts detailing our projects, further
                contributing to our learning and sharing community.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Education;
