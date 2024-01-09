"use client";

import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	overflow-y: auto;
	min-height: 100vh;
	position: relative;
	background-color: #f9f7f7;
`;

export const Content = styled.div`
	z-index: 1;
	width: 100%;
	height: 100%;
	position: relative;
`;

export const Background = styled(Image)`
	top: 100px;
	z-index: 0;
	width: auto;
	right: 80px;
	height: 460px;
	position: fixed;

`;
