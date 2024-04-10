import Container from "./wrappers/container";
import Link from "next/link";
import Image from "next/image";
import OpacityAnim from "./wrappers/opacityAnim";

const Header: React.FC = () => {
	const imageHeight = 20;
	const imageWidth = 24;
	const svgCode = `<svg width="148" height="25" xmlns="http://www.w3.org/2000/svg">...</svg>`; // Your SVG code here

	const customVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	return (
		<OpacityAnim variants={customVariants}>
			<header className='py-8 bg-Very-dark-blue'>
				<Container extraClasses='flex md:justify-between justify-center flex-col md:flex-row'>
					<div className='flex flex-col items-center justify-center gap-8 mt-4 md:mt-0 md:gap-16 md:flex-row md:justify-start'>
						<Link href='/'>
							<div
								dangerouslySetInnerHTML={{
									__html: svgCode,
								}}
							/>
						</Link>

						<nav className='flex flex-col items-center w-full gap-8 text-sm text-white md:gap-16 md:flex-row md:text-base md:w-auto'>
							<span className='text-sm hover:text-primary hover:cursor-pointer'>FEATURES</span>
							<span className='text-sm hover:text-primary hover:cursor-pointer'>PRICING</span>
							<span className='text-sm hover:text-primary hover:cursor-pointer'>CONTACT</span>
						</nav>
					</div>
					<div className='relative flex justify-center gap-16 mt-8 md:mt-0'>
						<Image
							src='/images/icon-facebook.svg'
							alt='facebook'
							height={imageHeight}
							width={imageWidth}
							style={{
								height: "auto",
								objectFit: "contain",
								position: "relative",
							}}
						/>
						<Image
							src='/images/icon-twitter.svg'
							alt='twitter'
							height={imageHeight}
							width={imageWidth}
							style={{
								height: "auto",
								objectFit: "contain",
								position: "relative",
							}}
						/>
					</div>
				</Container>
			</header>
		</OpacityAnim>
	);
};

export default Header;
