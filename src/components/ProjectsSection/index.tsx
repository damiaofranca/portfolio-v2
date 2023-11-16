"use client";

import React from "react";
import {
	Card,
	Container,
	Introdution,
	Projects,
	Title,
	TitleProject,
	WrapperProjects,
	Stack,
	Technologies,
	DescriptionProject,
	ContainerActions,
} from "./styles";

import Pokedex from "@/assets/photos/pokedex.png";
import Vertigo from "@/assets/photos/vertigo.png";
import LandingPage from "@/assets/photos/landing-page.png";
import ClientVysor from "@/assets/photos/client-vysor.png";
import ActionCard from "../ActionCard";

interface IProjectsSection {
	texts: any;
}

const ProjectsSection: React.FC<IProjectsSection> = ({ texts }) => {
	return (
		<Container id="projects">
			<Introdution>
				<Title>{texts.title}</Title>
			</Introdution>
			<WrapperProjects>
				<Card>
					<Projects src={LandingPage} alt={texts.list.first.altImage} />
					<TitleProject>{texts.list.first.title}</TitleProject>
					<DescriptionProject>
						{texts.list.first.description}
					</DescriptionProject>
					<Stack>
						{texts.stackTitle}

						<Technologies>{texts.list.first.stack}</Technologies>
					</Stack>
					<ContainerActions>
						<ActionCard url="https://landing-page-fintech-demo.vercel.app/" />
					</ContainerActions>
				</Card>
				<Card>
					<Projects src={ClientVysor} alt={texts.list.second.altImage} />
					<TitleProject>{texts.list.second.title}</TitleProject>
					<DescriptionProject>
						{texts.list.second.description}
					</DescriptionProject>
					<Stack>
						{texts.stackTitle}
						<Technologies>{texts.list.second.stack}</Technologies>
					</Stack>
					<ContainerActions>
						<ActionCard url="https://client-vysor.vercel.app" />
					</ContainerActions>
				</Card>
				<Card>
					<Projects src={Pokedex} alt={texts.list.third.altImage} />
					<TitleProject>{texts.list.third.title}</TitleProject>
					<DescriptionProject>
						{texts.list.third.description}
					</DescriptionProject>
					<Stack>
						{texts.stackTitle}
						<Technologies>{texts.list.third.stack}</Technologies>
					</Stack>
					<ContainerActions>
						<ActionCard url="https://pokedex-nzuf.vercel.app/" />
					</ContainerActions>
				</Card>
				<Card>
					<Projects src={Vertigo} alt={texts.list.four.altImage} />
					<TitleProject>{texts.list.four.title}</TitleProject>
					<DescriptionProject>{texts.list.four.description}</DescriptionProject>
					<Stack>
						{texts.stackTitle}
						Technologias usadas:
						<Technologies>{texts.list.four.stack}</Technologies>
					</Stack>
					<ContainerActions>
						<ActionCard url="https://vertigo-demo.vercel.app/" />
					</ContainerActions>
				</Card>
			</WrapperProjects>
		</Container>
	);
};

export default ProjectsSection;
