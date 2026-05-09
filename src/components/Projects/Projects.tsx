// UPDATE Projects.tsx

import React, { useState } from "react";
import { WiDirectionUpRight } from "react-icons/wi";
import classes from "./Projects.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/appStore";
import Ugaoo from "../../assets/portfolio-images/desktop-view.webp";
import Food_Munch from "../../assets/portfolio-images/foodmunch.webp";

import ProjectDetailsModal from "../ProjectDetailsModal/ProjectDetailsModal";

const Projects = () => {
	const { data } = useSelector((state: RootState) => state.data);

	const staticData = data?.projects;

	const [open, setOpen] = useState(false);

	const [selectedProject, setSelectedProject] = useState<any>(null);

	const handleOpen = (project: any) => {
		setSelectedProject(project);

		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div id="projects" className={`${classes.projects} scrollSection`}>
			<h2>{staticData?.title}</h2>

			<ul>
				{staticData?.projects.map((eachProject) => {
					const projectData = {
						...eachProject,
						image: eachProject.name === "Ugaoo" ? Ugaoo : Food_Munch,
					};

					return (
						<li
							key={eachProject.name}
							style={{
								backgroundImage: `url(${projectData.image})`,
							}}
							onClick={() => handleOpen(projectData)}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									handleOpen(projectData);
								}
							}}
						>
							<h3>{eachProject.name}</h3>

							<p>{eachProject.description}</p>

							<div className={classes.projectAction}>
								<span>View Project</span>

								<WiDirectionUpRight />
							</div>
						</li>
					);
				})}
			</ul>

			<ProjectDetailsModal
				open={open}
				handleClose={handleClose}
				project={selectedProject}
			/>
		</div>
	);
};

export default Projects;
