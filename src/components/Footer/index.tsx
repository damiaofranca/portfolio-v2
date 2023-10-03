"use client";

import React from "react";

import EmailIcon from "@/assets/icons/email.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";

import {
	Contact,
	ContactText,
	Container,
	ContainerContact,
	LinkText,
} from "./styles";
import Icon from "../Icon";

const Footer: React.FC = () => {
	return (
		<Container id="footer">
			<ContainerContact>
				<Contact>
					<Icon mh={12} src={GitHubIcon} alt="Github" />
					<LinkText target="_blank" href="https://github.com/damiaofranca">
						GitHub
					</LinkText>
				</Contact>

				<Contact>
					<Icon mh={12} src={LinkedinIcon} alt="Linkedin" />
					<LinkText
						target="_blank"
						href="https://linkedin.com/in/damião-frança-a47b20223"
					>
						Damião França
					</LinkText>
				</Contact>

				<Contact>
					<Icon mh={12} src={EmailIcon} alt="Email de contato" />
					<ContactText href="maito:francadamiao202@gmail.com">
						francadamiao202@gmail.com
					</ContactText>
				</Contact>
			</ContainerContact>
		</Container>
	);
};

export default Footer;
