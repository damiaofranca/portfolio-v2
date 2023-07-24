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
			/* align-items: flex-start; */
			padding: 20px 26px;
		}
	}
`;
export const Wrapper = styled.div`
	display: flex;
	justify-content: center;

	@media screen and (max-width: 690px) {
		& {
			align-items: center;
			flex-direction: column;
		}
	}
`;

export const Photo = styled(Image)`
	width: 100%;
	height: 460px;
	max-width: 340px;
	object-fit: cover;
	margin-right: 60px;
	border-radius: 14px;
	background-color: gray;

	@media screen and (max-width: 768px) {
		& {
			height: 420px;
			max-width: 260px;
			margin-right: 32px;
		}
	}

	@media screen and (max-width: 690px) {
		& {
			display: none;
			/* height: 380px;
			max-width: 260px;
			margin-top: 24px;
			margin-right: 0px; */
		}
	}
`;

export const InformationsWrapper = styled.div`
	display: flex;
	max-width: 460px;
	flex-direction: column;

	@media screen and (max-width: 690px) {
		& {
			order: -1;
			align-items: center;
		}
	}
`;

export const Introdution = styled.div`
	margin-bottom: 4rem;

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

export const TextInfo = styled.p`
	color: #4d4e52;
	margin-bottom: 12px;

	@media screen and (max-width: 768px) {
		& {
			font-size: 0.78rem;
		}
	}
	@media screen and (max-width: 690px) {
		& {
			text-align: center;
			margin-bottom: 24px;
		}
	}
`;

export const InformationsBtn = styled.a`
	color: #fff;
	display: flex;
	cursor: pointer;
	font-weight: 500;
	font-size: 13.3px;
	width: fit-content;
	padding: 12px 12px;
	align-items: center;
	border-radius: 0.5rem;
	text-decoration: none;
	background-color: #6997ff;
	transition: all 0.1s ease-in-out;

	&:hover,
	&:focus {
		background-color: #8baeff;
		outline: 3px solid #cedaf5;
	}

	@media screen and (max-width: 768px) {
		& {
			font-size: 0.8rem;
		}
	}

	@media screen and (max-width: 690px) {
		& {
			margin: 0;
		}
	}
`;
