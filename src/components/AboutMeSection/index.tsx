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

interface IAboutMeSection {
	texts: any;
}

const AboutMeSection: React.FC<IAboutMeSection> = ({ texts }) => {
	return (
		<Container id="about-me">
			<Introdution>
				<Title>{texts.aboutMe}</Title>
				<TextInfo style={{ textAlign: "center", margin: 0 }}>
					{texts.subtitle}
				</TextInfo>
			</Introdution>

			<Wrapper>
				<Photo src={Perfil} alt="Damião" />
				<InformationsWrapper>
					<TextInfo>
						{texts.information.first}

						<br />
						<br />
						{texts.information.second}
					</TextInfo>
					<InformationsBtn
						title="teste"
						as="a"
						target="_blank"
						href="https://drive.google.com/file/d/1XyKocGO3oTBxK4Pi5xj3_zk5eVza3isI/view?usp=sharing"
					>
						{texts.buttonCv}
						<Icon src={File} alt="Informações de contato" mh={6} />
					</InformationsBtn>
				</InformationsWrapper>
			</Wrapper>
		</Container>
	);
};

export default AboutMeSection;
