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

export const WrapperSkills = styled.div`
	gap: 50px;
	padding: 10px;
	display: grid;
	column-gap: 100px;
	grid-template-columns: auto auto auto auto;

	@media screen and (max-width: 768px) {
		& {
			grid-template-columns: auto auto;
		}
	}
`;

export const Skill = styled(Image)``;

export const ContainerSkill = styled.div<{ $titleskill: string }>`
	width: 90px;
	height: 90px;
	position: relative;

	&::after {
		top: 0%;
		left: 50%;
		opacity: 0;
		color: #ffff;
		height: 29px;
		display: flex;
		font-size: small;
		font-weight: 600;
		border-radius: 4px;
		position: absolute;
		align-items: center;
		padding: 0.1rem 0.4rem;
		justify-content: center;
		background-color: #6997ff;
		transform: translateX(-50%);
		transition: all 250ms ease-in-out;
		content: ${({ $titleskill }) => `"${$titleskill}"`};
	}

	&:hover {
		&::after {
			top: -38px;
			opacity: 1;
			transform: translateX(-50%);
			transition: all 250ms ease-in-out;
		}

		@media screen and (max-width: 690px) {
			& {
				width: 64px;
				height: 64px;
			}
		}
	}
`;
