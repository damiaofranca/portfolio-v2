"use client";
import React from "react";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";

import Bars from "@/assets/icons/bars.svg";
import Close from "@/assets/icons/close.svg";

import {
	ListNav,
	LogoText,
	ListItem,
	Container,
	LinkNavigation,
	HandlerButtonHeader,
	ContainerMobile,
	ContainerHeader,
	Centralized,
} from "./styles";
import { useMediaQueries } from "@/hooks/useMediaQuerie";

export const Header: React.FC = () => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const { value } = useMediaQueries({ width: 576 });
	const [currentSection, setCurrentSection] = React.useState<string>("#home");
	const [handlerActionsHeader, setHandlerActionsHeader] =
		React.useState<boolean>(false);

	React.useEffect(() => {
		if (!value && handlerActionsHeader === true) {
			setHandlerActionsHeader(false);
		}
	}, [value]);

	React.useEffect(() => {
		setCurrentSection(location.hash);
	}, [pathname, searchParams]);

	return (
		<>
			<Container id="header">
				<LogoText>Damião França</LogoText>
				<ListNav>
					<ListItem>
						<LinkNavigation
							as={"a"}
							onClickCapture={() => {
								console.log("adsdas");
							}}
							className={`desktop ${
								currentSection === "" ? "current-section" : ""
							}`}
							href="#home"
						>
							Home
						</LinkNavigation>
					</ListItem>
					<ListItem>
						<LinkNavigation
							as={"a"}
							className={`desktop ${
								currentSection === "#about-me" ? "current-section" : ""
							}`}
							href="#about-me"
						>
							Sobre mim
						</LinkNavigation>
					</ListItem>
					<ListItem>
						<LinkNavigation
							as={"a"}
							className={`desktop ${
								currentSection === "#skills" ? "current-section" : ""
							}`}
							href="#skills"
						>
							Habilidades
						</LinkNavigation>
					</ListItem>
					<ListItem>
						<LinkNavigation
							as={"a"}
							className={`desktop ${
								currentSection === "#projects" ? "current-section" : ""
							}`}
							href="#projects"
						>
							Projetos
						</LinkNavigation>
					</ListItem>
					<HandlerButtonHeader
						className="desktop"
						onClick={() => setHandlerActionsHeader(true)}
					>
						<Image src={Bars} alt={"Abrir cabeçalho"} />
					</HandlerButtonHeader>
				</ListNav>
			</Container>
			<ContainerMobile isheaderopen={handlerActionsHeader ? true : undefined}>
				<ContainerHeader>
					<LogoText>Damião</LogoText>
					<HandlerButtonHeader onClick={() => setHandlerActionsHeader(false)}>
						<Image src={Close} alt={"Fechar cabeçalho"} />
					</HandlerButtonHeader>
				</ContainerHeader>
				<Centralized>
					<ListNav>
						<ListItem className={handlerActionsHeader ? "opened" : "closed"}>
							<LinkNavigation
								as={"a"}
								href=""
								className={` ${currentSection === "" ? "current-section" : ""}`}
							>
								Home
							</LinkNavigation>
						</ListItem>
						<ListItem className={handlerActionsHeader ? "opened" : "closed"}>
							<LinkNavigation
								as={"a"}
								href="#about-me"
								className={` ${
									currentSection === "#about-me" ? "current-section" : ""
								}`}
							>
								Sobre mim
							</LinkNavigation>
						</ListItem>
						<ListItem className={handlerActionsHeader ? "opened" : "closed"}>
							<LinkNavigation
								as={"a"}
								href="#skills"
								className={` ${
									currentSection === "#skills" ? "current-section" : ""
								}`}
							>
								Habilidades
							</LinkNavigation>
						</ListItem>
						<ListItem className={handlerActionsHeader ? "opened" : "closed"}>
							<LinkNavigation
								as={"a"}
								href="#projects"
								className={` ${
									currentSection === "#projects" ? "current-section" : ""
								}`}
							>
								Projetos
							</LinkNavigation>
						</ListItem>
					</ListNav>
				</Centralized>
			</ContainerMobile>
		</>
	);
};
