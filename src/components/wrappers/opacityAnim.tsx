import React, { useEffect, useRef } from "react";
import {
	motion,
	useInView,
	useAnimation,
	Variants,
} from "framer-motion";

interface OpacityAnimProps {
	children: React.ReactNode;
	className?: string;
	variants: Variants;
	delay?: number;
}

const OpacityAnim: React.FC<OpacityAnimProps> = ({
	children,
	className,
	variants,
	delay = 0.1,
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, {
		once: false,
	});
	const controls = useAnimation();

	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		} else {
			controls.start("hidden");
		}
	}, [isInView, controls]);

	return (
		<motion.div
			ref={ref}
			variants={variants}
			transition={{
				duration: 1,
				ease: [0.83, 0, 0.17, 1],
				delay: delay,
			}}
			initial='hidden'
			animate={controls}
			className={className}
		>
			{children}
		</motion.div>
	);
};

export default OpacityAnim;
