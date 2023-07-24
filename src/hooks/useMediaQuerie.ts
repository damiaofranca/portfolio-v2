"use client";
import React from "react";

interface IUseMediaQuerie {
	width: number;
}

interface IUseMediaQuerieResponse {
	value: boolean;
}

export const useMediaQueries = ({
	width,
}: IUseMediaQuerie): IUseMediaQuerieResponse => {
	const [currentWidth, setCurrentWidth] = React.useState<boolean>(false);

	React.useEffect(() => {
		const cancel = window.addEventListener("resize", (evt) => {
			setCurrentWidth((evt.target as any).innerWidth <= width);
			window.removeEventListener("resize", () => {});
		});

		return () => cancel;
	}, [width]);
	return {
		value: currentWidth,
	};
};
