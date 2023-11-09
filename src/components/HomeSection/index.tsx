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

interface IHomeSection {
	texts: any;
}

const HomeSection: React.FC<IHomeSection> = ({ texts }) => {
	return (
		<Container id="home">
			<Wrapper>
				<InformationsWrapper>
					<Title>
						Damião S. <br /> França
					</Title>
					<SubTitle>{texts.subtitle}</SubTitle>
					<TextInfo>
						{texts.context.first} <br />
						{texts.context.second}
					</TextInfo>
					<InformationsBtn href="#footer">
						<Icon src={Send} alt={texts.contactInformation} mh={6} />
						{texts.contactInformation}
					</InformationsBtn>
				</InformationsWrapper>
				<Photo src={Perfil} alt="Damião" />
			</Wrapper>
		</Container>
	);
};

export default HomeSection;
