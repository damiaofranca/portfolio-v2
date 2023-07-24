import styled from "styled-components";

export const Container = styled.a`
	right: 20px;
	bottom: 20px;
	border: none;
	position: fixed;
	border-radius: 100%;

	width: 52px;
	height: 52px;
	outline: none;
	display: flex;
	cursor: pointer;
	align-items: center;
	justify-content: center;
	background-color: #6997ff;
	/* transition: all 0.1s ease-in-out; */

	&:hover,
	&:focus {
		background-color: #8baeff;
		outline: 3px solid #6997ff85;
	}
`;
