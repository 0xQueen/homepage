import React from "react";
import Grid from "@/components/grid/grid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "queen's projects",
};

const Projects: React.FC = () => {
  const projects = [
    {
      name: "majesty.lol [NEW]",
      description:
        "Current website you're on is open-source! It allows me to share everyone my experience on web development.",
      repo_link: "https://github.com/your-github-repo",
    },
    {
      name: "AFTS",
      description:
        "Meet Another-Fucking-Torrent-Site! A complete open-source torrent site made in PHP and MySQL.",
      repo_link: "https://github.com/your-github-repo",
    },
    {
      name: "Project C",
      description:
        "Project C will be a website built in Next.JS, which will allow you to make your own profiles similiar to carrd!",
      repo_link: "https://github.com/your-github-repo",
    },
    {
      name: "majesty.lol [OLD]",
      description:
        "Current website you're on is a new version of old! It allows me to share everyone my experience on web development.",
      repo_link: "https://github.com/your-github-repo",
    },
  ];

  return (
    <div className="project-container flex flex-col justify-center items-center h-screen">
      <div className="text-center mb-6 mt-10 sm:mt-0">
        {" "}
        <h1 className="project-header font-bold text-3xl mb-2">Projects</h1>
        <p className="text-gray-200 mt-3">
          projects make a world a better place!
        </p>
      </div>
      <div
        className="projects relative top-0 left-0 right-0 text-center"
        style={{ top: "-50px", transform: "translateY(20px)" }}
      >
        <Grid projects={projects} />
      </div>
    </div>
  );
};

export default Projects;
