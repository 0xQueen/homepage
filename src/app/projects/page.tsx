import React from "react";
import Grid from "@/components/grid/grid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "queen's projects",
  description: "queen's website",
};

const Projects: React.FC = () => {
  const projects = [
    {
      name: "majesty.lol [NEW]",
      description:
        "Current website you're on is open-source! It's an upgraded version of the old website, that I've made.",
      repo_link: "https://github.com/0xQueen/homepage",
    },
    {
      name: "Discord Bot Website",
      description:
        "I've made a Discord Bot Website's template fully in NextJS and Tailwind CSS. Anyone can use it!",
      repo_link: "https://github.com/0xQueen/Discord-Bot-Website",
    },
    {
      name: "AFTS",
      description:
        "Meet Another-Fucking-Torrent-Site! A complete open-source torrent site made in PHP and MySQL.",
      repo_link: "#",
    },
    {
      name: "majesty.lol [OLD]",
      description:
        "My old website. It allowed me to share everyone my experience on web development. *Deprecated*",
      repo_link: "https://github.com/0xQueen/majesty.lol",
    },
  ];

  return (
    <div className="project-container flex flex-col justify-center items-center px-4 md:m-20">
      <div className="text-center mb-6 mt-10 sm:mt-0">
        <h1 className="project-header font-bold text-3xl mb-2">Projects</h1>
        <p className="text-gray-200 mt-3">
          projects make the world a better place!
        </p>
      </div>
      <div className="projects text-center">
        <Grid projects={projects} />
      </div>
    </div>
  );
};

export default Projects;
