// components/InfiniteScrollAnimation.tsx
import React, { useEffect } from "react";
import OpacityAnim from "../wrappers/opacityAnim";

// Define the custom variants for the animation
const customVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

const Logos: React.FC = () => {
	useEffect(() => {
		// Function to add the animation to the scrollers
		const addAnimation = () => {
			const scrollers = document.querySelectorAll(".scroller");

			scrollers.forEach((scroller) => {
				// Add data-animated="true" to every `.scroller` on the page
				scroller.setAttribute("data-animated", "true");

				// Make an array from the elements within `.scroller-inner`
				const scrollerInner = scroller.querySelector(".scroller__inner");
				if (scrollerInner) {
					const scrollerContent = Array.from(scrollerInner.children);

					// For each item in the array, clone it, add aria-hidden to it, and append it to the `.scroller-inner`
					scrollerContent.forEach((item) => {
						const duplicatedItem = item.cloneNode(true) as HTMLElement;
						if (duplicatedItem) {
							duplicatedItem.ariaHidden = "true";
							scrollerInner.appendChild(duplicatedItem);
						}
					});
				}
			});
		};

		// If a user hasn't opted in for reduced motion, then we add the animation
		if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			addAnimation();
		}
	}, []);
	return (
		<OpacityAnim variants={customVariants} delay={0.5}>
			<div className='scroller w-full' data-speed='slow'>
				<div className='tag-list scroller__inner '>
					<img className='h-[60px]' src='./images/logoipsum-214.svg' />
					<img className='h-[60px]' src='./images/logoipsum-242.svg' />
					<img className='h-[60px]' src='./images/logoipsum-248.svg' />
					<img className='h-[60px]' src='./images/logoipsum-268.svg' />
					<img className='h-[60px]' src='./images/logoipsum-273.svg' />
					<img className='h-[60px]' src='./images/logoipsum-275.svg' />
					<img className='h-[60px]' src='./images/logoipsum-277.svg' />
				</div>
			</div>
		</OpacityAnim>
	);
};

export default Logos;
