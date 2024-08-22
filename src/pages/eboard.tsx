import React from "react";
import Layout from "@/components/Layout";
import "../assets/css/about.css";

const eboardMembers = [
  {
    title: "President",
    name: "Koji Kimura",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Vice President",
    name: "Abigail Kim",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Business Chair",
    name: "Audrey Wang",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Technical Chair",
    name: "Ryan Ho",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Onboarding Chair",
    name: "Michael Ngo",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Social Chair",
    name: "Max Wang",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Publicity Chair",
    name: "Cindy Li",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Education Chair",
    name: "Deniz BT",
    description: "Sample Text",
    img: "",
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
                <div className="w-full h-56 bg-gray-500 mb-4">
                  {/* <img src={member.img} alt="" className="w-full h-56 mb-4"></img> */}
                </div>
                <div className="text-3xl md:text-4xl text-light">
                  {member.name}
                </div>
                <div className="text-sm mt-5 text-gray-500">
                  {/* {member.description} */}
                  Learn More
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
