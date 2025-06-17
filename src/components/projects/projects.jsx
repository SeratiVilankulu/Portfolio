import { div } from "framer-motion/client";
import React from "react";
import projectsData from "./projectsData.js";
import ProjectsCard from "./ProjectCard";

const projects = () => {
	return (
		<section className="flex flex-col justify-center items-center gap-12 pb-20">
			<div>
				<h3 className="text-size-3xl font-medium">Let's Connect</h3>
			</div>
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex flex-col sm:flex-row gap-6 justify-center">
					{projectsData.map((project) => (
						<ProjectsCard key={project.id} {...project} />
					))}
				</div>
			</div>
		</section>
	);
};

export default projects;
