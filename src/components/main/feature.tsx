import OpacityAnim from "../wrappers/opacityAnim";

// Define the custom variants for the animation
const customVariants = {
	hidden: { opacity: 0, x: "100%" },
	visible: { opacity: 1, x: 0 },
};

const Features = (): JSX.Element => {
	return (
		<OpacityAnim variants={customVariants}>
			<div className='flex items-center justify-center my-8 mt-36'>
				<div className='flex flex-col items-center justify-center max-w-xl text-center '>
					<h2 className='h2 text-4xl font-semibold text-Very-dark-blue'>Features</h2>
					<p className='px-8 text-gray-400 md:px-0 '>
						Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between
						your devices so you can access them on the go.
					</p>
				</div>
			</div>
		</OpacityAnim>
	);
};

export default Features;
