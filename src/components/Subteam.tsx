import React from "react";
import "../assets/css/about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface Member {
  title: string;
  name: string;
  description: string;
  img: string;
  linkedin?: string | null; // Optional LinkedIn URL, can be null
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
              <div className="text-sm mt-2 text-gray-500 whitespace-nowrap">
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
