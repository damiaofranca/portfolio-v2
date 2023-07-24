"use client";

import React from "react";
import { Container, Introdution, Skill, Title, WrapperSkills } from "./styles";

import HtmlIcon from "@/assets/icons/html.svg";
import CssIcon from "@/assets/icons/css.svg";
import JsIcon from "@/assets/icons/js.svg";
import TsIcon from "@/assets/icons/ts.svg";

import ReactIcon from "@/assets/icons/react.svg";
import NextIcon from "@/assets/icons/next.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import GitIcon from "@/assets/icons/git.svg";

const SkillsSection: React.FC = () => {
	return (
		<Container id="skills">
			<Introdution>
				<Title>Abilidades</Title>
			</Introdution>
			<WrapperSkills>
				<Skill src={HtmlIcon} alt="HTML" title="HTML" />
				<Skill src={CssIcon} alt="CSS" title="CSS" />
				<Skill src={JsIcon} alt="Javascript" title="Javascript" />
				<Skill src={TsIcon} alt="Typescript" title="Typescript" />

				<Skill src={ReactIcon} alt="React" title="React" />
				<Skill src={NextIcon} alt="NextJs" title="NextJs" />
				<Skill src={TailwindIcon} alt="Tailwind" title="Tailwind" />
				<Skill src={GitIcon} alt="GIT" title="GIT" />
			</WrapperSkills>
		</Container>
	);
};

export default SkillsSection;
