import "./globals.css";
import type { Metadata } from "next";
import StyledComponentsRegistry from "./registry";

export const metadata: Metadata = {
	title: "Portfolio",
	description: "portfolio",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-br">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					crossOrigin=""
					rel="preconnect"
					href="https://fonts.gstatic.com"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500&display=swap"
					rel="stylesheet"
				/>
			</head>
			<StyledComponentsRegistry>
				<body>{children}</body>
			</StyledComponentsRegistry>
		</html>
	);
}
