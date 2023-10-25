import Link from "next/link";
import styled from "styled-components";

export const Container = styled.header`
	width: 100%;
	display: flex;
	padding: 24px 50px;
	align-items: center;
	background-color: transparent;
	justify-content: space-between;
`;

export const ContainerMobile = styled.header<{ isheaderopen: any }>`
	top: 0;
	width: 100%;
	z-index: 300;
	display: flex;
	height: 100vh;
	position: fixed;
	background-color: #fff;
	flex-direction: column;
	transition: all 0.3s ease-in-out;
	left: ${({ isheaderopen }) => (isheaderopen ? "0" : "-100%")}!important;
`;

export const ContainerHeader = styled.div`
	width: 100%;
	display: flex;
	padding: 24px 50px;
	align-items: center;
	height: fit-content;
	justify-content: space-between;
`;

export const LogoText = styled.h1`
	font-size: 1.2rem;
`;

export const ListNav = styled.ul`
	display: flex;
	list-style: none;

	@media screen and (max-width: 846px) {
		& {
			flex-direction: column;
		}
	}
`;

export const ListItem = styled.li`
	margin-left: 18px;

	@media screen and (max-width: 846px) {
		&.opened {
			margin: 0 0 28px 0;
			text-align: center;
		}
		& > .desktop {
			display: none;
		}
	}
`;

export const ContainerSwitcher = styled.li`
	@media screen and (min-width: 846px) {
		margin-left: 18px;
	}
`;

export const HandlerButtonHeader = styled.button`
	width: 24px;
	height: 24px;
	border: none;
	cursor: pointer;
	margin-left: 12px;
	background-color: transparent;

	@media screen and (min-width: 846px) {
		&.desktop {
			display: none !important;
		}
	}
`;

export const LinkNavigation = styled(Link)`
	color: #2d2e32;
	cursor: pointer;
	font-weight: 600;
	position: relative;
	transition: all 0.23s;
	text-decoration: none;
	transition: all 0.3s ease-in-out;

	&.current-section::after {
		left: 0;
		content: "";
		height: 2px;
		bottom: -4px;
		position: absolute;
		animation-name: show;
		animation-duration: 0.3s;
		background-color: #2d2e32;
		animation-fill-mode: forwards;
		@keyframes show {
			from {
				width: 0%;
			}
			to {
				width: 100%;
			}
		}
	}

	&::after {
		left: 0;
		bottom: -4px;
		content: "";
		height: 2px;
		position: absolute;
		animation-name: hide;
		animation-duration: 0.3s;
		background-color: #2d2e32;
		animation-fill-mode: forwards;
		@keyframes hide {
			from {
				width: 100%;
			}
			to {
				width: 0%;
			}
		}
	}

	&:hover {
		&::after {
			left: 0;
			content: "";
			height: 2px;
			bottom: -4px;
			position: absolute;
			animation-name: show;
			animation-duration: 0.3s;
			background-color: #2d2e32;
			animation-fill-mode: forwards;
			@keyframes show {
				from {
					width: 0%;
				}
				to {
					width: 100%;
				}
			}
		}
	}
`;

export const Centralized = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
