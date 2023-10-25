"use client";

import React from "react";
import { Container } from "./styles";
import Live from "@/assets/icons/live.svg";
import Icon from "../Icon";

interface ActionCardProps {
	url: string;
}

const ActionCard: React.FC<ActionCardProps> = ({ url }) => {
	return (
		<Container href={url} target="_blank">
			<Icon src={Live} alt="Ver ao vivo" mh={8} />
			Ver ao vivo
		</Container>
	);
};

export default ActionCard;
