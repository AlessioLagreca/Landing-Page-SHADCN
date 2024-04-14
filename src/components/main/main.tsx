import Hero from "./hero";
import Faq from "./faq";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { fade } from "../../app/helpers/transition";
import Customers from "./customers";
import LogoSlider from "./logos";
import Pricing from "./pricing";

const Main = (): JSX.Element => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const controls = useAnimation();
	const logos = [
		"./images/logoipsum-214.svg",
		"./images/logoipsum-242.svg",
		"./images/logoipsum-248.svg",
		"./images/logoipsum-268.svg",
		"./images/logoipsum-273.svg",
		"./images/logoipsum-275.svg",
		"./images/logoipsum-277.svg",
		// Add more logos as needed
	];

	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		}
	}, [isInView, controls]);

	return (
		<>
			<motion.div variants={fade}>
				<Hero />
				<LogoSlider />
				<Pricing />
				<Customers />
				<Faq />
			</motion.div>
		</>
	);
};

export default Main;
