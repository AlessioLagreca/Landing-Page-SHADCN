import Features from "./feature";
import Hero from "./hero";
import TabsComponent from "./tabs";
import Faq from "./faq";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { fade } from "../../app/helpers/transition";

const Main = (): JSX.Element => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const controls = useAnimation();

	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		}
	}, [isInView, controls]);

	return (
		<>
			<motion.div variants={fade}>
				<Hero />
				<Features />
				<TabsComponent />
				<Faq />
			</motion.div>
		</>
	);
};

export default Main;
