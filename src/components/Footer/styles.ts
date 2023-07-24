import { styled } from "styled-components";

export const Container = styled.footer`
	width: 100%;
	display: flex;
	padding: 16px 20px;
	align-items: center;
	background-color: #e0eaf1;
`;

export const ContainerContact = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;

export const Contact = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 0.7rem;

	&:last-child {
		margin-bottom: 0px;
	}
`;

export const ContactText = styled.label`
	display: flex;
	color: #a4a7b6;
	font-size: 11px;
	font-weight: 600;
	align-items: center;
`;

export const Linkedin = styled.a`
	display: flex;
	cursor: pointer;
	align-items: center;
	text-decoration: none;
	flex-direction: column;

	color: #a4a7b6;
	font-size: 11px;
	font-weight: 600;
`;
