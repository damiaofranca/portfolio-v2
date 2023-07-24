import Image from "next/image";
import styled from "styled-components";

export const Container = styled.section`
	width: 100%;
	display: flex;
	padding: 64px 24px;
	align-items: center;
	flex-direction: column;
	@media screen and (max-width: 690px) {
		& {
			padding: 20px 26px;
		}
	}
`;

export const Introdution = styled.div`
	margin-bottom: 3rem;

	@media screen and (max-width: 690px) {
		& {
			margin-bottom: 2.3rem;
		}
	}
`;

export const Title = styled.h1`
	color: #4d4e52;
	font-size: 2.25rem;
	font-weight: 600;

	@media screen and (max-width: 768px) {
		& {
			font-size: 1.8rem;
		}
	}

	@media screen and (max-width: 690px) {
		& {
			font-size: 1.4rem;
			text-align: center;
		}
	}
`;

export const WrapperProjects = styled.div`
	gap: 50px;
	padding: 10px;
	display: grid;
	column-gap: 100px;
	grid-template-columns: auto auto;

	@media screen and (max-width: 768px) {
		& {
			grid-template-columns: auto auto;
		}
	}

	@media screen and (max-width: 860px) {
		grid-template-columns: auto;
	}
`;

export const Card = styled.div`
	display: flex;
	width: fit-content;
	padding: 8px;
	border-radius: 8px;
	flex-direction: column;
	background-color: #ecf3f8;
	border: 1px solid #e0eaf1;
	width: 450px;

	@media screen and (max-width: 1140px) {
		width: 330px;
	}

	@media screen and (max-width: 860px) {
		width: 450px;
	}

	@media screen and (max-width: 690px) {
		width: 100%;
		max-width: 380px;
	}
`;

export const Projects = styled(Image)`
	width: 100%;
	height: 200px;
	object-fit: cover;
	border-radius: 4px;
	object-position: top;
	margin-bottom: 0.45rem;
	transition: 2s all ease-in-out;

	&:hover {
		object-position: bottom;
	}

	@media screen and (max-width: 1140px) {
		height: 150px;
	}

	@media screen and (max-width: 860px) {
		height: 200px;
	}

	@media screen and (max-width: 690px) {
		height: 130px;
	}
`;

export const TitleProject = styled.label`
	color: #4d4e52;
	font-size: 16px;
	font-weight: 600;
	padding: 0 0.45rem;
	margin-bottom: 0.6rem;
`;

export const DescriptionProject = styled.label`
	color: #4d4e52;
	font-size: 13px;
	font-weight: 500;
	padding: 0 0.45rem;
	margin-bottom: 4px;
`;

export const Stack = styled.label`
	opacity: 0.6;
	color: #4d4e52;
	font-size: 11px;
	font-weight: 500;
	padding: 0 0.45rem;
	margin-bottom: 0.7rem;
`;

export const Technologies = styled.label`
	color: #4d4e52;
	font-size: 12px;
	font-weight: 600;
	padding: 0 0.45rem;
	margin-bottom: 0.4rem;
`;

export const ContainerActions = styled.div`
	flex: 1;
	width: 100%;
	display: flex;
	align-items: flex-end;
`;
