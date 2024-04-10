import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	TabIndicator,
} from "@chakra-ui/react";
import Container from "../wrappers/container";
import Image from "next/image";
import OpacityAnim from "../wrappers/opacityAnim";

const TabsComponent = (): JSX.Element => {
	const customVariants = {
		hidden: { opacity: 0, x: "-100%" },
		visible: { opacity: 1, x: 0 },
	};

	return (
		<OpacityAnim variants={customVariants} delay={0.2}>
			<Container extraClasses={"mt-4"}>
				<Tabs align='center' position='relative' variant='unstyled'>
					<TabList>
						<Tab
							py='8'
							px='8'
							textColor={"gray.500"}
							_selected={{
								color: "gray.800",
							}}
						>
							Simple Bookmarking
						</Tab>
						<Tab
							py='8'
							px='8'
							textColor={"gray.500"}
							_selected={{
								color: "gray.800",
							}}
						>
							Speedy Searching
						</Tab>
						<Tab
							py='8'
							px='8'
							textColor={"gray.500"}
							_selected={{
								color: "gray.800",
							}}
						>
							Easy Sharing
						</Tab>
					</TabList>
					<TabIndicator
						mt='-1.5px'
						height='3px'
						bg='red.500'
						borderRadius='1px'
					/>
					<TabPanels>
						<TabPanel>
							<div className='flex flex-col gap-12 pt-10 md:grid md:grid-cols-2'>
								<Image
									src='/images/illustration-features-tab-1.svg'
									alt='image'
									width={500}
									height={500}
								/>

								<div className='flex flex-col items-start pt-8'>
									<h3 className='h3 w-full text-2xl font-semibold text-center md:text-start md:text-3xl text-Very-dark-blue'>
										Bookmark in one click
									</h3>
									<p className='text-center text-gray-500 md:text-start'>
										Organize your bookmarks however you like. Our
										simple drag-and-drop interface gives you complete
										control over how you manage your favourite sites.
									</p>
									<button className='self-center px-8 py-3 mt-8 font-medium text-white border-2 border-transparent rounded-md md:self-start bg-soft-blue hover:bg-white hover:text-soft-blue hover:border-2 hover:border-soft-blue'>
										More Info
									</button>
								</div>
							</div>
						</TabPanel>
						<TabPanel>
							<div className='flex flex-col pt-10 md:grid md:grid-cols-2 md:gap-12'>
								<Image
									src='/images/illustration-features-tab-2.svg'
									alt='image'
									width={500}
									height={500}
								/>

								<div className='flex flex-col items-start pt-8'>
									<h3 className='h3 w-full text-2xl font-semibold text-center md:text-start md:text-3xl text-Very-dark-blue'>
										Intelligent search
									</h3>
									<p className='text-center text-gray-500 md:text-start'>
										Our powerful search feature will help you find
										saved sites in no time at all. No need to trawl
										through all of your bookmarks.
									</p>
									<button className='self-center px-8 py-3 mt-8 font-medium text-white border-2 border-transparent rounded-md md:self-start bg-soft-blue hover:bg-white hover:text-soft-blue hover:border-2 hover:border-soft-blue'>
										More Info
									</button>
								</div>
							</div>
						</TabPanel>
						<TabPanel>
							<div className='flex flex-col pt-10 md:grid md:grid-cols-2 md:gap-12'>
								<Image
									src='/images/illustration-features-tab-3.svg'
									alt='image'
									width={500}
									height={500}
								/>

								<div className='flex flex-col items-start pt-8'>
									<h3 className='h3 w-full text-2xl font-semibold text-center md:text-start md:text-3xl text-Very-dark-blue'>
										Share your bookmarks
									</h3>
									<p className='text-center text-gray-500 md:text-start'>
										Easily share your bookmarks and collections with
										others. Create a shareable link that you can send
										at the click of a button.
									</p>
									<button className='self-center px-8 py-3 mt-8 font-medium text-white border-2 border-transparent rounded-md md:self-start bg-soft-blue hover:bg-white hover:text-soft-blue hover:border-2 hover:border-soft-blue'>
										More Info
									</button>
								</div>
							</div>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Container>
		</OpacityAnim>
	);
};

export default TabsComponent;
