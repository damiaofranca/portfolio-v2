import Image from "next/image";
import styled from "styled-components";

export const Container = styled.section`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: calc(100vh - 76px);

	@media screen and (max-width: 690px) {
		& {
			padding: 20px 26px;
			align-items: flex-start;
			min-height: fit-content;
		}
	}
`;

export const Wrapper = styled.div`
	display: flex;

	@media screen and (max-width: 690px) {
		& {
			flex-direction: column;
		}
	}
`;

export const Photo = styled(Image)`
	width: 100%;
	height: 560px;
	max-width: 320px;
	margin-left: 60px;
	object-fit: cover;
	border-radius: 14px;
	background-color: gray;

	@media screen and (max-width: 768px) {
		& {
			height: 420px;
			max-width: 260px;
		}
	}

	@media screen and (max-width: 690px) {
		& {
			height: 380px;
			max-width: 260px;
			margin-left: 0px;
			margin-top: 24px;
		}
	}
`;

export const InformationsWrapper = styled.div`
	display: flex;
	padding-top: 5rem;
	flex-direction: column;

	@media screen and (max-width: 690px) {
		& {
			padding: 0;
			align-items: center;
		}
	}
`;

export const Title = styled.h1`
	color: #4d4e52;
	font-size: 3rem;
	font-weight: 600;

	@media screen and (max-width: 768px) {
		& {
			font-size: 2.4rem;
		}
	}

	@media screen and (max-width: 690px) {
		& {
			font-size: 2.6rem;
			text-align: center;
		}
	}
`;

export const SubTitle = styled.h4`
	color: #4d4e52;
	font-weight: 500;
	font-size: 1.25rem;
	margin-bottom: 0.55rem;

	@media screen and (max-width: 768px) {
		& {
			font-size: 0.9rem;
		}
	}

	@media screen and (max-width: 690px) {
		& {
			font-size: 0.64rem;
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
		}
	}
`;

export const InformationsBtn = styled.a`
	color: #fff;
	border: none;
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
