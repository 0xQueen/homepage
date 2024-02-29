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
      className="hover:opacity-100 block mb-6 w-full"
    >
      <div
        className="bg-gray-800 text-white rounded-lg p-4 md:p-6 shadow-md flex flex-col justify-between transition duration-300 hover:bg-[#9a397c] hover:border-[#9a397c] hover:text-[#9a397c] hover:ring-[#9a397c] ring-opacity-50 hover:border-2"
        style={{
          backgroundColor: "#382434",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          borderColor: "#9a397c",
          maxWidth: "90vw", // Adjust the maximum width as needed
          width: "100%", // Ensure the card takes full width
        }}
      >
        <h3 className="text-gray-300 text-left font-bold mb-2">{name}</h3>
        <p className="text-gray-300 mb-4 text-left">{description}</p>
        <div className="flex items-center justify-between">
          <span className="flex items-center text-gray-300">
            <FaLink className="mr-2" />
            <span>github.com</span>
          </span>
        </div>
      </div>
    </a>
  );
};

export default Card;
