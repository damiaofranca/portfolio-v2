"use client";

import React from "react";
import {
	Photo,
	Wrapper,
	TextInfo,
	Container,
	InformationsBtn,
	InformationsWrapper,
	Title,
	Introdution,
} from "./styles";
import File from "@/assets/icons/file.svg";
import Perfil from "@/assets/photos/second.jpeg";
import Icon from "../Icon";

const AboutMeSection: React.FC = () => {
	return (
		<Container id="about-me">
			<Introdution>
				<Title>Sobre mim</Title>
				<TextInfo style={{ textAlign: "center", margin: 0 }}>
					Introdução
				</TextInfo>
			</Introdution>

			<Wrapper>
				<Photo src={Perfil} alt="Damião" />
				<InformationsWrapper>
					<TextInfo>
						Atualmente, aos 21 anos, possuo vasta experiência em diversos
						projetos profissionais, utilizando tecnologias de ponta, tais como
						React, React-Native, NextJs e stack vanilla (HTML, CSS, Javascript e
						Typescript), além de pré-processadores, git (para versionamento) e
						bitbucket. Com quatro anos de atuação no setor de telecomunicações e
						provedores de internet, tive a oportunidade de trabalhar em grandes
						empresas, aprimorando minhas habilidades tanto em SOFT SKILLS quanto
						HARD SKILLS.
						<br />
						<br />
						Além de me dedicar ao cumprimento das minhas obrigações de forma
						exemplar, busco sempre adicionar uma pitada de humor ao ambiente,
						adequando-o à situação e, assim, contribuindo para o bem-estar e
						colaboração com meus colegas de trabalho.
					</TextInfo>
					<InformationsBtn
						title="teste"
						as="a"
						target="_blank"
						href="https://drive.google.com/file/d/1XyKocGO3oTBxK4Pi5xj3_zk5eVza3isI/view?usp=sharing"
					>
						Visualizar CV
						<Icon src={File} alt="Informações de contato" mh={6} />
					</InformationsBtn>
				</InformationsWrapper>
			</Wrapper>
		</Container>
	);
};

export default AboutMeSection;
