import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	margin-left: 12px;
`;

export const Button = styled.button`
	margin: 0;
	padding: 0;
	border: none;
	height: 24px;
	cursor: pointer;
	background-color: transparent;
	margin-left: 8px;

	&:first-child {
		margin-left: 0px;
	}

	&:not(.current) {
		opacity: 0.2;
	}
`;
