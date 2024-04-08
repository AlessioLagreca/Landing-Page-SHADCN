import React from "react";

interface Container2Props {
	children: React.ReactNode;
	extraClasses?: string;
}

const Container2: React.FC<Container2Props> = ({
	children,
	extraClasses = "",
}) => {
	return (
		<div
			className={`w-full max-w-screen-md px-6 mx-auto md:px-16 ${extraClasses}`}
		>
			{children}
		</div>
	);
};

export default Container2;
