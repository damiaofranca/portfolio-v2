"use client";

import React from "react";
import {
	Photo,
	Title,
	Wrapper,
	SubTitle,
	TextInfo,
	Container,
	InformationsBtn,
	InformationsWrapper,
} from "./styles";
import Send from "@/assets/icons/send.svg";
import Perfil from "@/assets/photos/foto.jpeg";
import Icon from "../Icon";

const HomeSection: React.FC = () => {
	return (
		<Container id="home">
			<Wrapper>
				<InformationsWrapper>
					<Title>
						Damião S. <br /> França
					</Title>
					<SubTitle>Front-end Developer</SubTitle>
					<TextInfo>
						Desenvolvedor front-end há mais <br /> de 4 anos com foco em ReactJs
						e NextJs.
					</TextInfo>
					<InformationsBtn href="#footer">
						<Icon src={Send} alt="Informações de contato" mh={6} />
						Informações de contato
					</InformationsBtn>
				</InformationsWrapper>
				<Photo src={Perfil} alt="Damião" />
			</Wrapper>
		</Container>
	);
};

export default HomeSection;
