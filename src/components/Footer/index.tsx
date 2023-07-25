"use client";

import React from "react";

import PhoneIcon from "@/assets/icons/phone.svg";
import EmailIcon from "@/assets/icons/email.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";

import {
	Contact,
	ContactText,
	Container,
	ContainerContact,
	Linkedin,
} from "./styles";
import Icon from "../Icon";

const Footer: React.FC = () => {
	return (
		<Container id="footer">
			<ContainerContact>
				<Contact>
					<Icon mh={12} src={LinkedinIcon} alt="Linkedin" />
					<Linkedin
						target="_blank"
						href="https://linkedin.com/in/damião-frança-a47b20223"
					>
						Damião França
					</Linkedin>
				</Contact>
				<Contact>
					<Icon mh={12} src={PhoneIcon} alt="Numéro de contato" />
					<ContactText href="https://WA.me/+5584998930523?message=Olá">
						(84) 9 9893-0523
					</ContactText>
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
