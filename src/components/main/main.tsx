import Hero from "./hero";
import Faq from "./faq";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { fade } from "../../app/helpers/transition";
import Customers from "./customers";
import LogoSlider from "./logos";
import Pricing from "./pricing";
import ContactForm from "./contact";
import { Element, animateScroll as scroll, scrollSpy } from "react-scroll";

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
				<LogoSlider />
				<Customers />
				<Element name='Pricing'>
					<Pricing />
				</Element>
				<ContactForm />
				<Faq />
			</motion.div>
		</>
	);
};

export default Main;
