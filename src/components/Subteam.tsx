import React from "react";
import "../assets/css/about.css";

interface Member {
  title: string;
  name: string;
  description: string;
  img: string;
}

const SubteamView: React.FC<{ members: Member[] }> = ({ members }) => {
  return (
    <>
      <div>
        {/* content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-4xl text-light">
          {members.map((member, index) => (
            <div key={index} className="p-4">
              <div className="text-sm mb-2 text-gray-400 whitespace-nowrap">
                {member.title}
              </div>
              <img
                src={member.img}
                alt={member.name}
                className="w-full mb-4"
              ></img>
              <div className="text-3xl md:text-4xl text-light">
                {member.name}
              </div>
              <div className="text-sm mt-5 text-gray-500 whitespace-nowrap">
                {/* {member.description} */}
                {/* Learn More */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SubteamView;
