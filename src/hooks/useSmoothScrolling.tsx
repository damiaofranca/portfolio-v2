"use client";

import React, { ReactNode, useEffect } from "react";

export const SmoothScrolling: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	useEffect(() => {
		function handleLinkClick(event: any) {
			if (event.target.hash !== "") {
				event.preventDefault();

				const hash = event.target.hash;

				const targetElement = document.querySelector(hash);
				if (targetElement) {
					window.scrollTo({
						top: targetElement.offsetTop,
						behavior: "smooth",
					});

					window.history.pushState(null, "", hash);
				}
			}
		}

		const links = document.querySelectorAll("a");
		links.forEach((link) => {
			link.addEventListener("click", handleLinkClick);
		});

		return () => {
			links.forEach((link) => {
				link.removeEventListener("click", handleLinkClick);
			});
		};
	}, []);

	return <>{children}</>;
};
