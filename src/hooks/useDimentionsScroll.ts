"use client";
import React from "react";

interface IUseDimentionsScrollResponse {
	valueY: number;
}

export const useDimentionsScroll = (): IUseDimentionsScrollResponse => {
	const [currentScroll, setCurrentScroll] = React.useState<number>(0);

	React.useEffect(() => {
		const cancel = window.addEventListener("scroll", (evt) => {
			setCurrentScroll(window.scrollY);
			window.removeEventListener("resize", () => {});
		});

		return () => cancel;
	}, []);
	return {
		valueY: currentScroll,
	};
};
