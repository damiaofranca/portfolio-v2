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
	ContainerIntruction,
	Experience,
	ContainerJobs,
	Divider,
	Card,
	CompanyName,
	TitleJob,
	ListJob,
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
			<ContainerIntruction>
				<Introdution>
					<Title>{texts.title}</Title>
					<TextInfo style={{ textAlign: "center", margin: 0, fontSize: 20 }}>
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
							as="a"
							title="teste"
							target="_blank"
							href={texts.linkCV}
						>
							{texts.buttonCv}
							<Icon src={File} alt="Informações de contato" mh={6} />
						</InformationsBtn>
					</InformationsWrapper>
				</Wrapper>
			</ContainerIntruction>
			<Experience>
				<TextInfo
					style={{
						textAlign: "center",
						margin: "46px 0 0 0",
						fontSize: 20,
					}}
				>
					{texts.experienceTitle}
				</TextInfo>
				<ContainerJobs>
					<Card>
						<TitleJob>Front-end Developer</TitleJob>
						<CompanyName>
							{texts.jobs[0].company} <br />
							{texts.jobs[0].date}
						</CompanyName>

						<ListJob>
							{(texts.jobs[0].list as string[]).map((fact, idx) => (
								<li key={idx}>
									<span>{fact}</span>
								</li>
							))}
						</ListJob>
					</Card>

					<Card>
						<TitleJob>Front-end Developer</TitleJob>
						<CompanyName>
							{texts.jobs[1].company} <br />
							{texts.jobs[1].date}
						</CompanyName>

						<ListJob>
							{(texts.jobs[1].list as string[]).map((fact, idx) => (
								<li key={idx}>
									<span>{fact}</span>
								</li>
							))}
						</ListJob>
					</Card>

					{/* <Divider className="divider" /> */}
					<Card>
						<TitleJob>Front-end Developer</TitleJob>
						<CompanyName>
							{texts.jobs[2].company} <br />
							{texts.jobs[2].date}
						</CompanyName>

						<ListJob>
							{(texts.jobs[2].list as string[]).map((fact, idx) => (
								<li key={idx}>
									<span>{fact}</span>
								</li>
							))}
						</ListJob>
					</Card>
				</ContainerJobs>
			</Experience>
		</Container>
	);
};

export default AboutMeSection;
