import React from "react";
import { FaLink } from "react-icons/fa";

interface CardProps {
  name: string;
  description: string;
  repo_link: string;
}

const Card: React.FC<CardProps> = ({ name, description, repo_link }) => {
  return (
    <a
      href={repo_link}
      target="_blank"
      rel="noopener noreferrer"
      className="block mb-6 w-full"
      style={{ textDecoration: "none" }}
    >
      <div
        className="bg-gray-800 text-white rounded-lg p-4 md:p-6 shadow-md transition duration-300 mt-10 sm:mt-0 cursor-pointer relative"
        style={{
          backgroundColor: "#382434",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "90%",
          width: "100%",
          margin: "auto",
        }}
      >
        <div className="absolute inset-0 border border-transparent hover:border-[#9a397c] rounded-lg transition duration-300"></div>
        <h3 className="text-gray-300 text-left font-bold mb-2">{name}</h3>
        <p className="text-gray-300 mb-4 text-left">{description}</p>
        <div className="flex items-center justify-between">
          <span className="flex items-center text-gray-300">
            <FaLink className="mr-2" />
            <span className="hover:text-[#9a397c]">github.com</span>
          </span>
        </div>
      </div>
    </a>
  );
};

export default Card;
