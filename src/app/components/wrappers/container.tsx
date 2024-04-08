import React from "react";

interface ContainerProps {
	children: React.ReactNode;
	extraClasses?: string;
}

const Container: React.FC<ContainerProps> = ({
	children,
	extraClasses = "",
}) => {
	return (
		<div
			className={`w-full max-w-screen-xl px-8 md:mx-auto md:px-20 ${extraClasses}`}
		>
			{children}
		</div>
	);
};

export default Container;
