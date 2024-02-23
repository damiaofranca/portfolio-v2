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
import Pokedex from "@/assets/photos/pokedex.png";
import Vertigo from "@/assets/photos/vertigo.png";
import NpmLogo from "@/assets/photos/npm_logo.jpg";
import InProgress from "@/assets/photos/progress_in.svg";
import LandingPage from "@/assets/photos/landing-page.png";
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
			image: { url: NpmLogo, alt: texts.list.four.altImage },
			title: texts.list.four.title,
			description: texts.list.four.description,
			technologies: texts.list.four.stack,
			urlProject: "https://www.npmjs.com/package/google-handler-area-react",
		},
		{
			image: { url: ClientVysor, alt: texts.list.second.altImage },
			title: texts.list.second.title,
			description: texts.list.second.description,
			technologies: texts.list.second.stack,
			urlProject: "https://client-vysor.vercel.app",
		},
		{
			image: { url: Pokedex, alt: texts.list.third.altImage },
			title: texts.list.third.title,
			description: texts.list.third.description,
			technologies: texts.list.third.stack,
			urlProject: "https://pokedex-nzuf.vercel.app/",
		},

		{
			image: { url: LandingPage, alt: texts.list.first.altImage },
			title: texts.list.first.title,
			description: texts.list.first.description,
			technologies: texts.list.first.stack,
			urlProject: "https://landing-page-fintech-demo.vercel.app/",
		},

		{
			image: { url: Vertigo, alt: texts.list.five.altImage },
			title: texts.list.five.title,
			description: texts.list.five.description,
			technologies: texts.list.five.stack,
			urlProject: "https://vertigo-demo.vercel.app/",
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
