import React from "react";
import Card from "@/components/cards/projects";

interface Project {
  name: string;
  description: string;
  repo_link: string;
}

interface GridProps {
  projects: Project[];
}

const Grid: React.FC<GridProps> = ({ projects }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
        {projects.map((project, index) => (
          <Card
            key={index}
            name={project.name}
            description={project.description}
            repo_link={project.repo_link}
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;
