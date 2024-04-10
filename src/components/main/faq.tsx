import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
} from "@chakra-ui/react";

import Container2 from "../wrappers/container2";
import OpacityAnim from "../wrappers/opacityAnim";

// Define the custom variants for the animation
const customVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

const Faq = (): JSX.Element => {
	return (
		<>
			<OpacityAnim variants={customVariants}>
				<div className='flex flex-col items-center justify-center mt-36'>
					<div className='flex flex-col items-center justify-center max-w-xl text-center '>
						<h2 className='h2 text-3xl font-semibold md:text-4xl text-Very-dark-blue'>
							Frequently Asked Questions
						</h2>
						<p className='px-6 text-gray-400 md:px-0'>
							Here are some of our FAQs. If you have any other
							questions you’d like answered please feel free to email
							us.
						</p>
					</div>
				</div>
				<Container2 extraClasses={"mt-16"}>
					<Accordion allowToggle>
						{/* ... Accordion items ... */}
						<AccordionItem py={2}>
							<span>
								<AccordionButton>
									<Box
										as='span'
										flex='1'
										textAlign='left'
										className='text-lg font-normal text-Very-dark-blue hover:text-soft-red'
									>
										What is Bookmark?
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</span>
							<AccordionPanel>
								Lorem ipsum dolor sit amet, consectetur adipiscing
								elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua. Ut enim ad minim veniam, quis
								nostrud exercitation ullamco laboris nisi ut aliquip
								ex ea commodo consequat.
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem py={2}>
							<span>
								<AccordionButton>
									<Box
										as='span'
										flex='1'
										textAlign='left'
										className='text-lg font-normal text-Very-dark-blue hover:text-soft-red'
									>
										How can I request a new browser?
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</span>
							<AccordionPanel pb={4}>
								Lorem ipsum dolor sit amet, consectetur adipiscing
								elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua. Ut enim ad minim veniam, quis
								nostrud exercitation ullamco laboris nisi ut aliquip
								ex ea commodo consequat.
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem py={2}>
							<span>
								<AccordionButton>
									<Box
										as='span'
										flex='1'
										textAlign='left'
										className='text-lg font-normal text-Very-dark-blue hover:text-soft-red'
									>
										Is there a mobile app?
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</span>
							<AccordionPanel pb={4}>
								Lorem ipsum dolor sit amet, consectetur adipiscing
								elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua. Ut enim ad minim veniam, quis
								nostrud exercitation ullamco laboris nisi ut aliquip
								ex ea commodo consequat.
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem py={2}>
							<span>
								<AccordionButton>
									<Box
										as='span'
										flex='1'
										textAlign='left'
										className='text-lg font-normal text-Very-dark-blue hover:text-soft-red'
									>
										What about other Chromium browsers?
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</span>
							<AccordionPanel pb={4}>
								Lorem ipsum dolor sit amet, consectetur adipiscing
								elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua. Ut enim ad minim veniam, quis
								nostrud exercitation ullamco laboris nisi ut aliquip
								ex ea commodo consequat.
							</AccordionPanel>
						</AccordionItem>
					</Accordion>
				</Container2>
				<div className='flex flex-col items-center justify-center my-16'>
					<button className='px-8 py-3 text-white border-2 border-transparent rounded-md bg-soft-blue hover:bg-white hover:text-soft-blue hover:border-2 hover:border-soft-blue'>
						More Info
					</button>
				</div>
			</OpacityAnim>
		</>
	);
};

export default Faq;
