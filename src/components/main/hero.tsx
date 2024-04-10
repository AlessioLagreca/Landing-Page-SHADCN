import Image from "next/image";
import Container from "../wrappers/container";
import OpacityAnim from "../wrappers/opacityAnim";
import { Button } from "../ui/button";

const headerLeft = {
	hidden: { x: "-100%", opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
	},
};

const headerRight = {
	hidden: { x: "100%", opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
	},
};

const Hero = (): JSX.Element => {
	return (
		<Container>
			<section className='flex flex-col-reverse justify-between gap-12 md:mt-24 xl:flex-row'>
				<OpacityAnim
					variants={headerLeft}
					className='flex content flex-col w-[100%] xl:w-[50%]
					xl:items-start items-center mt-12 md:mt-16'
				>
					<h1 className='font-medium text-center h1 display-heading text-Very-dark-blue xl:text-left'>
						A Simple Bookmark Manager
					</h1>
					<p className='text-center text-gray-500 xl:text-left'>
						A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites
						load instantly. Try it for free.
					</p>
					<div className='flex gap-4'>
						<Button variant='primary' size='mio' className='shadow-xl text-sm md:text-base'>
							Get it on Chrome
						</Button>
						<Button
							variant='outline'
							size='mio'
							className='text-sm font-medium bg-gray-100 shadow-xl md:text-base text-slate-600'
						>
							Get it on Firefox
						</Button>
					</div>
				</OpacityAnim>
				<OpacityAnim variants={headerRight} className='xl:pl-8 md:mt-0 mt-12'>
					<Image src='/images/illustration-hero.svg' alt='hero image' layout='responsive' width={1000} height={1000} />
				</OpacityAnim>
			</section>
		</Container>
	);
};

export default Hero;
