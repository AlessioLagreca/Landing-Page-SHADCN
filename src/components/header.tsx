import Container from "./wrappers/container";
import Link from "next/link";
import Image from "next/image";
import OpacityAnim from "./wrappers/opacityAnim";
import { Divider } from "@chakra-ui/react";
import { useState } from "react";
import { SignInButton, useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { DarkModeToggle } from "./ui/darkM-button";
import { motion } from "framer-motion";
import { fade } from "@/app/helpers/transition";
import { CircleX, Menu } from "lucide-react";
import { Button } from "./ui/button";

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

		<header className='glass py-4 sticky top-0 z-50 bg-background '>
			{!isOpen && (
				<Container extraClasses='flex flex-col justify-center '>
					<div className='flex flex-wrap items-center sticky top-0'>
						<Link href='/'>
							<Image src='/images/logoipsum-248.svg' alt='Logo' width={80} height={20} />
						</Link>

						<nav className='items-center hidden w-full ml-auto space-x-8 text-sm md:flex md:text-base md:w-auto '>
							<span className='text-sm hover:text-primary hover:cursor-pointer'>FEATURES</span>
							<span className='text-sm hover:text-primary hover:cursor-pointer'>PRICING</span>
							<span className='text-sm hover:text-primary hover:cursor-pointer'>CONTACT</span>

							{isSignedIn ? (
								<UserButton afterSignOutUrl='/' />
							) : (
								<SignInButton>
									<button className='px-8 py-3 text-white border-2 border-transparent rounded-md bg-soft-red hover:bg-white hover:text-soft-red hover:border-2 hover:border-soft-red'>
										LOGIN
									</button>
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