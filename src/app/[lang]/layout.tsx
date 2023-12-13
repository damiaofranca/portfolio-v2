/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import StyledComponentsRegistry from "./registry";
import { SmoothScrolling } from "@/hooks/useSmoothScrolling";

import "./globals.css";
import { Locale, i18n } from "@/i18n.config";
import { getDictionary } from "../../../dictionaries";

export const metadata: Metadata = {
	title: "Damião França",
	description: "portfólio",
};

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { lang: Locale };
}) {
	const dictionary = await getDictionary(lang);


	return (
		<html lang={params.lang}>
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

				<meta name="description" content={dictionary.metaDescription}/>

			</head>
			<StyledComponentsRegistry>
				<SmoothScrolling>
					<body>{children}</body>
				</SmoothScrolling>
			</StyledComponentsRegistry>
		</html>
	);
}
