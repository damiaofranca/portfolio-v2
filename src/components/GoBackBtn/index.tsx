"use client";

import React from "react";

import Icon from "../Icon";
import ArrowUp from "@/assets/icons/arrow-up.svg";

import { Container } from "./styles";

const GoBackBtn: React.FC = () => {
	return (
		<Container title="Voltar ao início" href="#header">
			<Icon src={ArrowUp} dimentions={26} alt="Voltar ao início" />
		</Container>
	);
};

export default GoBackBtn;
