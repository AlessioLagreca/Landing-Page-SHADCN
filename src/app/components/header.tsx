import Container from "./wrappers/container";
import Link from "next/link";
import Image from "next/image";
import OpacityAnim from "./wrappers/opacityAnim";
import { Divider } from "@chakra-ui/react";
import { useState } from "react";
import { SignInButton, useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

type Props = {};

const Header: React.FC = (props: Props) => {
	////////////////////////
	// SOME HOOKS FROM CLERK
	const { isLoaded, isSignedIn, user } = useUser();

	const [isOpen, setIsOpen] = useState(false);

	const customVariants = {
		hidden: { opacity: 0, y: "-90%" },
		visible: { opacity: 1, y: 0 },
	};

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	return (
		// <OpacityAnim variants={customVariants}>
		<header className='glass py-4 sticky top-0 z-50 '>
			{!isOpen && (
				<Container extraClasses='flex flex-col justify-center '>
					<div className='flex flex-wrap items-center sticky top-0'>
						<Link href='/'>
							<Image src='/images/logo-bookmark.svg' alt='Logo' width={150} height={150} />
						</Link>

						<nav className='items-center hidden w-full ml-auto space-x-8 text-sm md:flex md:text-base md:w-auto '>
							<span className='text-sm hover:text-soft-red hover:cursor-pointer'>FEATURES</span>
							<span className='text-sm hover:text-soft-red hover:cursor-pointer'>PRICING</span>
							<span className='text-sm hover:text-soft-red hover:cursor-pointer'>CONTACT</span>

							{isSignedIn ? (
								<UserButton afterSignOutUrl='/' />
							) : (
								<SignInButton>
									<button className='px-8 py-3 text-white border-2 border-transparent rounded-md bg-soft-red hover:bg-white hover:text-soft-red hover:border-2 hover:border-soft-red'>
										LOGIN
									</button>
								</SignInButton>
							)}
						</nav>

						<button className='ml-auto md:hidden' onClick={toggleNavbar}>
							<Image
								src='/images/icon-hamburger.svg'
								alt='menu'
								height={15}
								width={18}
								style={{
									height: "auto",
									objectFit: "contain",
									position: "relative",
								}}
							/>
						</button>
					</div>
				</Container>
			)}
			{isOpen && (
				<nav className='absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-start w-full h-screen px-8 pt-24 text-center bg-Very-dark-blue bg-opacity-95 md:hidden'>
					<div className='absolute top-10 right-[2rem]'>
						{/* closing button X */}
						<Image
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
						/>
						{/* closing button X */}
					</div>
					<span
						className='w-full py-6 text-xl text-white border-t border-gray-200 border-opacity-40 hover:cursor-pointer'
						onClick={toggleNavbar}
					>
						FEATURES
					</span>
					<span
						className='w-full py-6 text-xl text-white border-t border-gray-200 border-opacity-40 hover:cursor-pointer'
						onClick={toggleNavbar}
					>
						PRICING
					</span>
					<span
						className='w-full py-6 text-xl text-white border-gray-200 border-y border-opacity-40 hover:cursor-pointer'
						onClick={toggleNavbar}
					>
						CONTACT
					</span>
					<button
						className='w-full px-8 py-3 mt-6 text-white bg-transparent border-2 border-white rounded-md'
						onClick={toggleNavbar}
					>
						LOGIN
					</button>
				</nav>
			)}
		</header>
		// </OpacityAnim>
	);
};

export default Header;
