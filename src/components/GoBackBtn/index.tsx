"use client";

import React from "react";

import Icon from "../Icon";
import ArrowUp from "@/assets/icons/arrow-up.svg";
import { useDimentionsScroll } from "@/hooks/useDimentionsScroll";

import { Container } from "./styles";

const GoBackBtn: React.FC = () => {
	const { valueY } = useDimentionsScroll();

	if (valueY > 762) {
		return (
			<Container title="Voltar ao início" href="#header">
				<Icon src={ArrowUp} dimentions={26} alt="Voltar ao início" />
			</Container>
		);
	}

	return null;
};

export default GoBackBtn;
