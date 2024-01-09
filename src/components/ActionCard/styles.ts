import { styled } from "styled-components";

export const Container = styled.a`
	color: #fff;
	width: 100%;
	display: flex;
	cursor: pointer;
	font-weight: 500;
	padding: 8px 6px;
	font-size: 13.3px;
	border-radius: 4px;
	height: fit-content;
	align-items: center;
	text-decoration: none;
	justify-content: center;
	background-color: #6997ff;
	transition: all 0.1s ease-in-out;

	&.disabled {
		opacity: 0.48;
		cursor: default;
	}

	&:hover,
	&:focus {
		background-color: #8baeff;
		outline: 3px solid #cedaf5;

		&.disabled {
			outline: none !important;
			background-color: #6997ff;
		}
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
