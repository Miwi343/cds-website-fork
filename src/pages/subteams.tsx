import React from "react";
import Layout from "@/components/Layout";
import "../assets/css/subteam.css";
import img from "../assets/img/subteam.jpg";

const Subteams: React.FC = () => {
  return (
    <>
      <Layout name="Subteams">
        {/* image */}
        <div className="mb-10">
          <img
            src={img.src}
            alt="subteams"
            className="w-full h-[13rem] sm:h-[30rem] md:h-[42rem] mt-16"
          />
        </div>
        {/* content */}
        <div className="border-thin mt-5 pt-5">
          <div>
            <h1 className="text-5xl">Our Subteams</h1>
            <p className="text-xl text-light mt-5">
              Cornell Data Science (CDS) is comprised of 92 dedicated members
              who specialize in various domains of data science and machine
              learning, organized into four focused subteams: Data Science,
              Machine Learning Engineering, Data Engineering, and Quantitative
              Finance. Each subteam has a distinct area of focus, contributing
              uniquely to our overarching goal of advancing the field of data
              science.
            </p>
            <div className="border-thin mt-10 pt-5">
              <h1 className="text-5xl">Machine Learning Engineering (MLE)</h1>
              <p className="text-xl text-light mt-5">
                The MLE subteam is focused on building robust infrastructure and
                systems that enable the efficient and effective deployment of
                machine learning models. This includes enhancing hardware
                performance, integrating large-scale data tools, and refining
                MLOps frameworks to support advanced ML applications in
                real-world settings.
              </p>
            </div>
            <div className="border-thin mt-10 pt-5">
              <h1 className="text-5xl">Data Engineering (DE)</h1>
              <p className="text-xl text-light mt-5">
                Our Data Engineering subteam is dedicated to advancing the field
                of data engineering. The team works on foundational projects
                that involve the architecture and maintenance of scalable data
                systems, enhancing the computational infrastructure that
                supports our data-driven initiatives.
              </p>
            </div>
            <div className="border-thin mt-10 pt-5">
              <h1 className="text-5xl">Data Science (DS)</h1>
              <p className="text-xl text-light mt-5">
                The Data Science subteam sits at the nexus of machine learning
                theory and practical application, developing systems designed to
                tackle complex problems beyond human scalability and precision.
                This subteam is also committed to educational outreach, offering
                courses and hosting regular scholarly discussions to keep pace
                with cutting-edge research.
              </p>
            </div>
            <div className="border-thin mt-10 pt-5">
              <h1 className="text-5xl">Quantitative Finance (QF)</h1>
              <p className="text-xl text-light mt-5">
                Focusing on the convergence of data science, statistics, and
                finance, the Quantitative Finance subteam applies statistical
                and algorithmic approaches to analyze financial markets. The
                subteam encourages a broad exploration of quantitative finance,
                supporting a wide array of studies that contribute to innovative
                financial solutions.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Subteams;
