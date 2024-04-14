import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
			<Container2>
				<Accordion type='single' collapsible>
					<AccordionItem value='item-1'>
						<AccordionTrigger>Is it accessible?</AccordionTrigger>
						<AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
					</AccordionItem>
					<AccordionItem value='item-2'>
						<AccordionTrigger>Is it styled?</AccordionTrigger>
						<AccordionContent>Yes. It comes with default styles that matches the Chakra UI theme.</AccordionContent>
					</AccordionItem>
					<AccordionItem value='item-3'>
						<AccordionTrigger>Is it animated?</AccordionTrigger>
						<AccordionContent>Yes. It comes with default styles that matches the Chakra UI theme.</AccordionContent>
					</AccordionItem>
					<AccordionItem value='item-4'>
						<AccordionTrigger>Is it responsive?</AccordionTrigger>
						<AccordionContent>Yes. It comes with default styles that matches the Chakra UI theme.</AccordionContent>
					</AccordionItem>
				</Accordion>
			</Container2>
		</>
	);
};

export default Faq;
