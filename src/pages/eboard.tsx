import React from "react";
import Layout from "@/components/Layout";
import "../assets/css/about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import KojiImg from "../assets/img/members/KojiKimura.jpg";
import AbbyImg from "../assets/img/members/AbigailKim.jpg";
import AudreyImg from "../assets/img/members/AudreyWang.jpg";
import MichaelImg from "../assets/img/members/MichaelNgo.jpg";
import MaxImg from "../assets/img/members/MaxWang.jpg";
import CindyImg from "../assets/img/members/CindyLi.jpg";
import DanielImg from "../assets/img/members/DanielWang.jpg";
import SriImg from "../assets/img/members/SrivatsaKundurthy.jpg";

const eboardMembers = [
  {
    title: "President",
    name: "Koji Kimura",
    description: "Sample Text",
    img: KojiImg.src,
    linkedin: 'https://www.linkedin.com/in/koji-kimura-30471a233/', // No LinkedIn URL found in the data
  },
  {
    title: "Vice President",
    name: "Abigail Kim",
    description: "Sample Text",
    img: AbbyImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Business Chair",
    name: "Audrey Wang",
    description: "Sample Text",
    img: AudreyImg.src,
    linkedin: "https://www.linkedin.com/in/audreywang12", // LinkedIn URL from the data
  },
  {
    title: "Technical Chair",
    name: "Daniel Wang",
    description: "Sample Text",
    img: DanielImg.src,
    linkedin: 'https://www.linkedin.com/in/zhongxuanwang/',
  },
  {
    title: "Onboarding Chair",
    name: "Michael Ngo",
    description: "Sample Text",
    img: MichaelImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Social Chair",
    name: "Max Wang",
    description: "Sample Text",
    img: MaxImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Publicity Chair",
    name: "Cindy Li",
    description: "Sample Text",
    img: CindyImg.src,
    linkedin: "https://www.linkedin.com/in/cindy-li-569a30187/", // LinkedIn URL from the data
  },
  {
    title: "Education Chair",
    name: "Srivatsa Kundurthy",
    description: "Sample Text",
    img: SriImg.src,
    linkedin: "https://www.linkedin.com/in/riert", // LinkedIn URL from the data
  },
];

const Eboard: React.FC = () => {
  return (
    <>
      <Layout name="E-Board">
        <div>
          {/* content */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-4xl text-light">
            {eboardMembers.map((member, index) => (
              <div key={index} className="p-4">
                <div className="text-sm mb-2 text-gray-400">{member.title}</div>
                {/* <div className="w-full h-60 bg-gray-500 mb-4"> */}
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full mb-4"
                ></img>
                {/* </div> */}
                <div className="text-3xl md:text-3xl text-light">
                  {member.name}
                </div>
                <div className="flex items-center mt-2">
                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </a>
                  ) : (
                    <span className="text-gray-400">
                      <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </span>
                  )}
                </div>
                <div className="text-sm mt-2 text-gray-500">
                  {/* {member.description} */}
                  {/* Learn More */}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-thin mt-10 pt-5 text-xl">
          The executive board at Cornell Data Science plays a pivotal role in
          guiding the team’s operations and educational initiatives. Beyond
          managing the day-to-day activities, the board is instrumental in
          fostering a strong, diverse data science community at the
          undergraduate level. This includes collaborating with university
          faculty, administration, and industry leaders to equip students with
          the skills needed for the digital future.
        </div>
      </Layout>
    </>
  );
};

export default Eboard;
