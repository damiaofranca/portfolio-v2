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
						href="linkedin.com/in/damião-frança-a47b20223"
					>
						Damião França
					</Linkedin>
				</Contact>
				<Contact>
					<Icon mh={12} src={PhoneIcon} alt="Numéro de contato" />
					<ContactText>(84) 9 9893-0523</ContactText>
				</Contact>
				<Contact>
					<Icon mh={12} src={EmailIcon} alt="Email de contato" />
					<ContactText>francadamiao202@gmail.com</ContactText>
				</Contact>
			</ContainerContact>
		</Container>
	);
};

export default Footer;
