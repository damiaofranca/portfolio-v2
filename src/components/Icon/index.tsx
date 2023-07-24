import Image from "next/image";
import React from "react";

interface IconProps {
	src: string;
	alt: string;
	mv?: number;
	mh?: number;
	dimentions?: number;
}

const Icon: React.FC<IconProps> = ({
	mh = 0,
	mv = 0,
	dimentions = 20,
	...props
}) => {
	return (
		<Image
			{...props}
			style={{
				width: dimentions,
				height: dimentions,
				margin: `${mv}px ${mh}px`,
			}}
		/>
	);
};

export default Icon;
