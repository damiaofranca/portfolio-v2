"use client";

import React from "react";
import {
	Card,
	Title,
	Stack,
	Projects,
	Container,
	Introdution,
	TitleProject,
	Technologies,
	WrapperProjects,
	ContainerActions,
	DescriptionProject,
} from "./styles";

import Domino from "@/assets/photos/domino.png";
import NpmLogo from "@/assets/photos/npm_logo.jpg";
import ClientVysor from "@/assets/photos/client-vysor.png";
import ActionCard from "../ActionCard";

interface IProjectsSection {
	texts: any;
}

const ProjectsSection: React.FC<IProjectsSection> = ({ texts }) => {
	const projects = [
		{
			image: { url: Domino, alt: texts.list.incoming.altImage },
			title: texts.list.incoming.title,
			description: texts.list.incoming.description,
			technologies: texts.list.incoming.stack,
			urlProject: "https://dominoes-iota.vercel.app/",
		},
		{
			image: { url: NpmLogo, alt: texts.list.second.altImage },
			title: texts.list.second.title,
			description: texts.list.second.description,
			technologies: texts.list.second.stack,
			urlProject: "https://www.npmjs.com/package/google-handler-area-react",
		},
		{
			image: { url: ClientVysor, alt: texts.list.first.altImage },
			title: texts.list.first.title,
			description: texts.list.first.description,
			technologies: texts.list.first.stack,
			urlProject: "https://client-vysor.vercel.app",
		},
	];

	return (
		<Container id="projects">
			<Introdution>
				<Title>{texts.title}</Title>
			</Introdution>
			<WrapperProjects>
				{projects.map((project) => (
					<Card key={project.title}>
						<Projects src={project.image.url} alt={project.image.alt} />
						<TitleProject>{project.title}</TitleProject>
						<DescriptionProject>{project.description}</DescriptionProject>
						<Stack>
							{texts.stackTitle}

							<Technologies>{project.technologies}</Technologies>
						</Stack>
						<ContainerActions>
							<ActionCard url={project.urlProject} />
						</ContainerActions>
					</Card>
				))}
			</WrapperProjects>
		</Container>
	);
};

export default ProjectsSection;
