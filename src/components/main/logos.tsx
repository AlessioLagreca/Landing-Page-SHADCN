// // components/InfiniteScrollAnimation.tsx
// import React, { useEffect } from "react";
// import OpacityAnim from "../wrappers/opacityAnim";

// // Define the custom variants for the animation
// const customVariants = {
// 	hidden: { opacity: 0 },
// 	visible: { opacity: 1 },
// };

// const Logos: React.FC = () => {
// 	useEffect(() => {
// 		// Function to add the animation to the scrollers
// 		const addAnimation = () => {
// 			const scrollers = document.querySelectorAll(".scroller");

// 			scrollers.forEach((scroller) => {
// 				// Add data-animated="true" to every `.scroller` on the page
// 				scroller.setAttribute("data-animated", "true");

// 				// Make an array from the elements within `.scroller-inner`
// 				const scrollerInner = scroller.querySelector(".scroller__inner");
// 				if (scrollerInner) {
// 					const scrollerContent = Array.from(scrollerInner.children);

// 					// For each item in the array, clone it, add aria-hidden to it, and append it to the `.scroller-inner`
// 					scrollerContent.forEach((item) => {
// 						const duplicatedItem = item.cloneNode(true) as HTMLElement;
// 						if (duplicatedItem) {
// 							duplicatedItem.ariaHidden = "true";
// 							scrollerInner.appendChild(duplicatedItem);
// 						}
// 					});
// 				}
// 			});
// 		};

// 		// If a user hasn't opted in for reduced motion, then we add the animation
// 		if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
// 			addAnimation();
// 		}
// 	}, []);
// 	return (
// 		<OpacityAnim variants={customVariants} delay={0.5}>
// 			<div className='scroller w-full mb-40' data-speed='slow'>
// 				<div className='tag-list scroller__inner '>
// 					<img className='h-[60px]' src='./images/logoipsum-214.svg' />
// 					<img className='h-[60px]' src='./images/logoipsum-242.svg' />
// 					<img className='h-[60px]' src='./images/logoipsum-248.svg' />
// 					<img className='h-[60px]' src='./images/logoipsum-268.svg' />
// 					<img className='h-[60px]' src='./images/logoipsum-273.svg' />
// 					<img className='h-[60px]' src='./images/logoipsum-275.svg' />
// 					<img className='h-[60px]' src='./images/logoipsum-277.svg' />
// 				</div>
// 			</div>
// 		</OpacityAnim>
// 	);
// };

// export default Logos;

import React from "react";
import { motion } from "framer-motion";
import OpacityAnim from "../wrappers/opacityAnim";
import Logo1 from "../../../public/images/logoipsum-214.svg";
import Logo2 from "../../../public/images/logoipsum-242.svg";
import Logo3 from "../../../public/images/logoipsum-248.svg";
import Logo4 from "../../../public/images/logoipsum-268.svg";
import Logo5 from "../../../public/images/logoipsum-273.svg";
import Logo6 from "../../../public/images/logoipsum-275.svg";

// Define the custom variants for the animation
const customVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

const slides = [{ icon: Logo1 }, { icon: Logo2 }, { icon: Logo3 }, { icon: Logo4 }, { icon: Logo5 }, { icon: Logo6 }];

const SliderDesign2 = () => {
	const duplicatedSlides = [...slides, ...slides];

	return (
		<OpacityAnim variants={customVariants} delay={0.5}>
			<div className='relative h-full mt-20 overflow-hidden py-12 mx-auto' style={{ width: "100%" }}>
				<div className='absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:filter after:blur-3'></div>

				<motion.div
					className='flex'
					animate={{
						x: ["0%", "-100%"],
						transition: {
							ease: "linear",
							duration: 40,
							repeat: Infinity,
						},
					}}
				>
					{duplicatedSlides.map((slide, index) => (
						<div key={index} className='flex-shrink-0' style={{ width: `${100 / slides.length}%` }}>
							<div className='flex items-center justify-center h-full'>
								<img src={slide.icon.src} className='h-16' alt={`Slide ${index}`} />
							</div>
						</div>
					))}
				</motion.div>
			</div>
		</OpacityAnim>
	);
};

export default SliderDesign2;
