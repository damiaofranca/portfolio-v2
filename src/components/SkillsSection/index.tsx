"use client";

import React from "react";
import {
	Container,
	ContainerSkill,
	Introdution,
	Skill,
	Title,
	WrapperSkills,
} from "./styles";

import TsIcon from "@/assets/icons/ts.svg";
import JsIcon from "@/assets/icons/js.svg";
import CssIcon from "@/assets/icons/css.svg";
import GitIcon from "@/assets/icons/git.svg";
import HtmlIcon from "@/assets/icons/html.svg";
import SassIcon from "@/assets/icons/sass.svg";
import NextIcon from "@/assets/icons/next.svg";
import ReactIcon from "@/assets/icons/react.svg";
import AngularIcon from "@/assets/icons/angular.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";

interface ISkillsSection {
	texts: any;
}

const SkillsSection: React.FC<ISkillsSection> = ({ texts }) => {
	return (
		<Container id="skills">
			<Introdution>
				<Title>{texts.title}</Title>
			</Introdution>
			<WrapperSkills>
				<ContainerSkill $titleskill="HTML">
					<Skill src={HtmlIcon} alt="HTML" />
				</ContainerSkill>

				<ContainerSkill $titleskill="CSS">
					<Skill src={CssIcon} alt="CSS" />
				</ContainerSkill>

				<ContainerSkill $titleskill="pré-processadores CSS">
					<Skill src={SassIcon} alt="SCSS (pré-processadores e CSS-in-JS)" />
				</ContainerSkill>

				<ContainerSkill $titleskill="Javascript">
					<Skill src={JsIcon} alt="Javascript" />
				</ContainerSkill>

				<ContainerSkill $titleskill="Typescript">
					<Skill src={TsIcon} alt="Typescript" />
				</ContainerSkill>

				<ContainerSkill $titleskill="React">
					<Skill src={ReactIcon} alt="React" />
				</ContainerSkill>

				<ContainerSkill $titleskill="Angular">
					<Skill src={AngularIcon} alt="Angular" />
				</ContainerSkill>

				<ContainerSkill $titleskill="NextJs">
					<Skill src={NextIcon} alt="NextJS" />
				</ContainerSkill>

				<ContainerSkill $titleskill="Tailwind">
					<Skill src={TailwindIcon} alt="Tailwind" />
				</ContainerSkill>

				<ContainerSkill $titleskill="GIT">
					<Skill src={GitIcon} alt="GIT" />
				</ContainerSkill>
			</WrapperSkills>
		</Container>
	);
};

export default SkillsSection;
