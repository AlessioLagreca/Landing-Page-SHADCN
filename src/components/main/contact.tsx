/**
 * v0 by Vercel.
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Toaster, toast } from "sonner";
import Container from "../wrappers/container";

export default function Contact() {
	async function handleSubmit(event: any) {
		event.preventDefault();
		const formData = new FormData(event.target);

		formData.append("access_key", "e7d2698c-f80d-4d09-bd2d-3e561b19bd00");

		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: json,
		});
		const result = await response.json();
		if (result.success) {
			const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: "Sonner" }), 2000));
			toast.promise(promise, {
				loading: "Loading...",
				success: (data) => {
					return "Email sent successfully!";
				},
			});
		} else {
			toast.error("Something went wrong, please try again.");
		}
	}

	return (
		<Container extraClasses='mt-48'>
			<main className='mx-auto max-w-xl space-y-6 shadow-2xl'>
				<Card>
					<CardHeader>
						<h2 className='text-2xl font-semibold'>Contact US</h2>
					</CardHeader>
					<CardContent className='space-y-4'>
						<form onSubmit={handleSubmit} className='space-y-4'>
							<div className='space-y-2'>
								<Label htmlFor='name'>Name</Label>
								<Input type='text' name='name' id='name' placeholder='Enter your name' required />
							</div>
							<div className='space-y-2'>
								<Label htmlFor='email'>Email</Label>
								<Input name='email' id='email' placeholder='example@domain.com' required type='email' />
							</div>
							<div className='space-y-2'>
								<Label htmlFor='message'>Message</Label>
								<Textarea name='message' id='message' placeholder='Enter your message' required />
							</div>
							<Button className='w-full' type='submit'>
								Submit
							</Button>
						</form>
					</CardContent>
				</Card>
				<Toaster richColors />
			</main>
		</Container>
	);
}
