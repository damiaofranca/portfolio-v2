"use client";

import { FC } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { i18n } from "@/i18n.config";
import FlagUsa from "@/assets/icons/flag_usa.svg";
import FlagBr from "@/assets/icons/flag_brazil.svg";

import { Button, Container } from "./styles";

interface LocaleSwitcherProps {}

export const LocaleSwitcher: FC<LocaleSwitcherProps> = () => {
	const router = useRouter();
	const pathName = usePathname();
	const currentLocale = pathName.split("/")[1];

	const redirectedPathName = (locale: string) => {
		if (!pathName) return "/";
		const segments = pathName.split("/");
		segments[1] = locale;
		return segments.join("/");
	};

	const onNavigate = (locale: string) => {
		router.push(redirectedPathName(locale));
	};

	return (
		<Container>
			{i18n.locales.map((locale) => {
				return (
					<Button
						key={locale}
						onClick={() => onNavigate(locale)}
						className={currentLocale === locale ? "current" : ""}
					>
						<Image
							priority
							height={24}
							alt="Alterar internalização"
							src={locale === "pt" ? FlagBr : FlagUsa}
						/>
					</Button>
				);
			})}
		</Container>
	);
};
