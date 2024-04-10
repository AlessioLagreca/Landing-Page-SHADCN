"use client";

import { ChakraProvider } from "@chakra-ui/react";
import Header from "../components/header";
import Footer from "../components/footer";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { useState } from "react";
import Main from "../components/main/main";

export default function Home() {
	const lenis = useLenis(({ scroll }) => {
		// called every scroll
	});

	return (
		<ReactLenis root>
			<Header />
			<div className='relative overflow-x-hidden'>
				<Main />
				<Footer />
			</div>
		</ReactLenis>
	);
}
