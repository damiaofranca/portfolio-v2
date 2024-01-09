"use client";

import React from "react";
import { Container } from "./styles";
import Live from "@/assets/icons/live.svg";
import Icon from "../Icon";

interface ActionCardProps {
	url: string;
	isDisabled?: boolean;
}

const ActionCard: React.FC<ActionCardProps> = ({ url, isDisabled = false }) => {
	return (
		<Container
			href={url}
			target="_blank"
			className={isDisabled ? "disabled" : ""}
		>
			<Icon src={Live} alt="Ver ao vivo" mh={8} />
			Ver ao vivo
		</Container>
	);
};

export default ActionCard;
