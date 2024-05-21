import React from "react";

interface ContainerProps {
	children: React.ReactNode;
	extraClasses?: string;
	id?: string;
}

const Container: React.FC<ContainerProps> = ({ children, extraClasses = "", id }) => {
	return <div className={`w-full max-w-screen-2xl px-8 md:mx-auto md:px-20 ${extraClasses}`}>{children}</div>;
};

export default Container;
