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
	Centralized,
	LinkNavigation,
	ContainerHeader,
	ContainerMobile,
	ContainerSwitcher,
	HandlerButtonHeader,
} from "./styles";
import { useMediaQueries } from "@/hooks/useMediaQuerie";
import { LocaleSwitcher } from "../LocaleSwitcher";

interface IHeader {
	texts: any;
}

export const Header: React.FC<IHeader> = ({ texts }) => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const { value } = useMediaQueries({ width: 846 });
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
							{texts.aboutMe}
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
							{texts.skills}
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
							{texts.projects}
						</LinkNavigation>
					</ListItem>

					<div style={{ display: "flex" }}>
						<HandlerButtonHeader
							className="desktop"
							onClick={() => setHandlerActionsHeader(true)}
						>
							<Image src={Bars} alt={"Abrir cabeçalho"} />
						</HandlerButtonHeader>
						<ContainerSwitcher>
							<LocaleSwitcher />
						</ContainerSwitcher>
					</div>
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
								{texts.aboutMe}
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
								{texts.skills}
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
								{texts.projects}
							</LinkNavigation>
						</ListItem>
					</ListNav>
				</Centralized>
			</ContainerMobile>
		</>
	);
};
