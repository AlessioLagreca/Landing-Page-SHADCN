import Container from "./wrappers/container";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SignInButton, useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { DarkModeToggle } from "./ui/darkM-button";
import { motion } from "framer-motion";
import { CircleX, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { NavigationMenuDemo } from "./main/Navigation";
import { Link as ScrollLink } from "react-scroll";

const MotionLink = motion(Link);

const MotionButton = motion(Button);

const customVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

type Props = {};

const Header: React.FC = (props: Props) => {
	////////////////////////
	// SOME HOOKS FROM CLERK
	const { isLoaded, isSignedIn, user } = useUser();

	const [isOpen, setIsOpen] = useState(false);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	return (
		// <OpacityAnim variants={customVariants}>

		<header className='glass py-4 md:py-6 sticky top-0 z-50 bg-background '>
			{isOpen === false && (
				<Container extraClasses='flex flex-col justify-center '>
					<div className='flex flex-wrap items-center sticky top-0'>
						<Link href='/' className='mr-4'>
							<Image src='/images/logoipsum-248.svg' alt='Logo' width={80} height={20} />
						</Link>
						<NavigationMenuDemo />

						<nav className='items-center hidden w-full ml-auto space-x-8 text-sm md:flex md:text-base md:w-auto '>
							<span className='text-base hover:text-primary hover:cursor-pointer'>FEATURES</span>
							<ScrollLink
								to='Pricing'
								smooth={true}
								duration={500}
								className='text-base hover:text-primary hover:cursor-pointer'
								offset={-150}
							>
								<span className='text-base hover:text-primary hover:cursor-pointer'>PRICING</span>
							</ScrollLink>
							<span className='text-base hover:text-primary hover:cursor-pointer'>CONTACT</span>

							{isSignedIn ? (
								<UserButton afterSignOutUrl='/' />
							) : (
								<SignInButton>
									<Button variant='primary' size='mio' className='px-8 py-3 border-2 border-transparent rounded-md'>
										LOGIN
									</Button>
								</SignInButton>
							)}
							<DarkModeToggle />
						</nav>

						<button className='ml-auto md:hidden' onClick={toggleNavbar}>
							<Menu />
							{/* <Image
								src='/images/icon-hamburger.svg'
								alt='menu'
								height={15}
								width={18}
								style={{
									height: "auto",
									objectFit: "contain",
									position: "relative",
								}}
							/> */}
						</button>
					</div>
				</Container>
			)}
			{isOpen && (
				<motion.div
					variants={customVariants}
					transition={{
						duration: 0.5,
						ease: [0.83, 0, 0.17, 1],
						delay: 0.1,
					}}
					initial='hidden'
					animate='visible'
				>
					<nav className='flex flex-col items-center justify-start w-full h-screen px-8 pt-24 text-center bg-background md:hidden'>
						<div className='absolute top-5 right-[2rem]'>
							{/* closing button X */}
							{/* <Image
								src='/images/icon-close.svg'
								alt='close'
								width={20}
								height={20}
								style={{
									height: "auto",
									objectFit: "contain",
									position: "relative",
								}}
								onClick={toggleNavbar}
							/> */}
							<CircleX onClick={toggleNavbar} />
							{/* closing button X */}
						</div>
						<span
							className='w-full py-6 text-xl border-t  border-opacity-40 hover:cursor-pointer'
							onClick={toggleNavbar}
						>
							FEATURES
						</span>
						<span
							className='w-full py-6 text-xl border-t border-opacity-40 hover:cursor-pointer'
							onClick={toggleNavbar}
						>
							PRICING
						</span>
						<span
							className='w-full py-6 text-xl   border-y border-opacity-40 hover:cursor-pointer'
							onClick={toggleNavbar}
						>
							CONTACT
						</span>
						<Button
							variant='primary'
							size='mio'
							className='w-full px-8 py-3 mt-6 border-2 text-xl rounded-md'
							onClick={toggleNavbar}
						>
							LOGIN
						</Button>
					</nav>
				</motion.div>
			)}
		</header>
		// </OpacityAnim>
	);
};

export default Header;
