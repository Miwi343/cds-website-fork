import React from "react";
import Layout from "@/components/Layout";
import "../assets/css/informationsessions.css";
import info from "../assets/img/info.jpg";

const InformationSessions: React.FC = () => {
  return (
    <>
      <Layout name="Information Sessions">
        {/* image */}
        <div className="mb-5">
          <img
            src={info.src}
            alt="Information Sessions"
            className="w-full h-[7rem] sm:h-[30rem] md:h-[15rem] mt-10"
          />
        </div>
        {/* content */}
        <div className="border-thin mt-5 pt-5">
          <div>
            <h1 className="text-5xl">About Information Sessions</h1>
            <p className="text-xl text-light mt-5">
              Information Sessions provide a casual and inviting atmosphere
              where students can engage with current team members to learn more
              about our initiatives and culture. These informal gatherings are
              ideal for individuals interested in the field of data science to
              discuss their interests, ask questions, and gain insights into the
              daily workings of the team. Information Sessions are not just
              informative—they&apos;re also an excellent opportunity for
              networking, making them a valuable resource for anyone considering
              joining the team or simply looking to expand their understanding
              of data science in a real-world context.
            </p>
          </div>
        </div>
        <div className="border-thin mt-14 pt-5">
          <div>
            <h1 className="text-5xl mb-5">Upcoming Information Sessions</h1>
            <ul className="list-disc pl-5 text-xl">
              <li>
                Information Session #1 (Upperclassmen): September 3rd // 5:00 pm
                - 6:30 pm, Hollister B14
              </li>
              <li>
                Information Session #2 (Freshmen/Transfers): September 9th &
                September 26th // 5:30 pm - 6:00 pm, Gates G01
              </li>
              <li>
                Cornell Annual Project Team Fest: September 5th // 5:00 pm -
                7:00 pm, Duffield Atrium (TBD)
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default InformationSessions;
