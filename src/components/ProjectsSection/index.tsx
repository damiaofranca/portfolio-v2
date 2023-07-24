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
import ClientSystem from "@/assets/photos/client-system.png";
import ActionCard from "../ActionCard";

const ProjectsSection: React.FC = () => {
	return (
		<Container id="projects">
			<Introdution>
				<Title>Projetos pessoais</Title>
			</Introdution>
			<WrapperProjects>
				<Card>
					<Projects src={LandingPage} alt="Landing page" />
					<TitleProject>Landing page fintech</TitleProject>
					<DescriptionProject>
						Projeto criado com finalidade de marketing de uma empresa ramo
						fintech.
					</DescriptionProject>
					<Stack>
						Technologias usadas:
						<Technologies>Typescript, Angular e SCSS.</Technologies>
					</Stack>
					<ContainerActions>
						<ActionCard url="https://landing-page-fintech-demo.vercel.app/" />
					</ContainerActions>
				</Card>
				<Card>
					<Projects src={ClientSystem} alt="Sistema de gerênciamento" />
					<TitleProject>Client Vysor</TitleProject>
					<DescriptionProject>
						Projeto criado com finalidade de gerênciamento de produtos +
						clientes de forma real time.
					</DescriptionProject>
					<Stack>
						Technologias usadas:
						<Technologies>
							Typescript, React, Styled Components e Firebase.
						</Technologies>
					</Stack>
					<ContainerActions>
						<ActionCard url="https://client-system-eight.vercel.app/login" />
					</ContainerActions>
				</Card>
				<Card>
					<Projects src={Pokedex} alt="Pokedex" />
					<TitleProject>Pokedex</TitleProject>
					<DescriptionProject>
						Projeto criado com finalidade de ánalise de dados dos personagens do
						anime Pokemon.
					</DescriptionProject>
					<Stack>
						Technologias usadas:
						<Technologies>
							Typescript, React, Vite, Axios e Styled Components.
						</Technologies>
					</Stack>
					<ContainerActions>
						<ActionCard url="https://pokedex-nzuf.vercel.app/" />
					</ContainerActions>
				</Card>
				<Card>
					<Projects src={Vertigo} alt="Vanilla UI login" />
					<TitleProject>Login UI</TitleProject>
					<DescriptionProject>
						Projeto criado com intuito de ánalise de conhecimento.
					</DescriptionProject>
					<Stack>
						Technologias usadas:
						<Technologies>
							Typescript, React, formik, Yup, Styled Components.
						</Technologies>
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
