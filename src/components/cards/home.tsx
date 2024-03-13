import React from "react";

const Container: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 custom-container">
        <h1
          className="font-bold text-3xl mb-4 sm:mb-2"
          style={{ textAlign: "center" }}
        >
          Queen
        </h1>
        <div className="flex flex-wrap gap-2 mb-4 sm:justify-center">
          <span
            className="bg-purple-800 text-white rounded-full py-1 px-3 text-sm flex items-center mb-2 mr-2"
            style={{ backgroundColor: "#2e1a27" }}
          >
            <span className="h-2 w-2 bg-pink-500 rounded-full mr-2"></span> web
            designer
          </span>
          <span
            className="bg-purple-800 text-white rounded-full py-1 px-3 text-sm flex items-center mb-2 mr-2"
            style={{ backgroundColor: "#2e1a27" }}
          >
            <span className="h-2 w-2 bg-pink-500 rounded-full mr-2"></span>{" "}
            software dev
          </span>
          <span
            className="bg-purple-800 text-white rounded-full py-1 px-3 text-sm flex items-center mb-2 mr-2"
            style={{ backgroundColor: "#2e1a27" }}
          >
            <span className="h-2 w-2 bg-pink-500 rounded-full mr-2"></span>{" "}
            untrained therapist
          </span>
        </div>

        <div
          className="p-3 rounded-xl ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
          style={{ backgroundColor: "#2e1a27", border: "none" }}
        >
          <p className="wrap text-gray-700 text-sm">
            heyoo i'm queen — software developer, website designer and a non
            trained therapist, all in one package with stupidity and charms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Container;
