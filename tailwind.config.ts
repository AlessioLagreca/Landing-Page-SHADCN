// tailwind.config.js
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				serif: ["Argesta", "system-ui", "sans-serif"],
			},
			fontSize: {
				title: ["clamp(3rem, 14vw, 9rem)", { lineHeight: "1.2" }],
				"heading-1": [
					"clamp(2.5rem, 6.5vw, 10rem)",
					{ lineHeight: "1.2" },
				],
				"heading-2": [
					"clamp(2.4rem, 8vw, 10rem)",
					{ lineHeight: "1.2" },
				],
				"heading-3": [
					"clamp(2rem, 5vw, 2.75rem)",
					{ lineHeight: "1.2" },
				],
				special: ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.2" }],
				"works-title": [
					"clamp(1.25rem, 2vw, 1.5rem)",
					{ lineHeight: "1.2" },
				],
				"body-1": [
					"clamp(1.1rem, 2vw, 1.3rem)",
					{ lineHeight: "1.5" },
				],
				"body-2": [
					"clamp(1rem, 1.5vw, 1.5rem)",
					{ lineHeight: "1.5" },
				],
				"body-3": ["1.1rem", { lineHeight: "1.5" }],
				"body-4": [
					"clamp(0.75rem, 3vw, 1rem)",
					{ lineHeight: "1.5" },
				],
			},
			letterSpacing: {
				headings: "-0.03em",
				widest2: ".40em",
			},
			backgroundImage: {
				"gradient-radial":
					"radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				"soft-blue": "hsl(231, 69%, 60%)",
				"soft-red": "hsl(0, 94%, 66%)",
				"grayish-blue": "hsl(229, 8%, 60%)",
				"Very-dark-blue": "hsl(229, 31%, 21%)",
				"verde-bottone": "#0E402E",
				"verde-gradiente": "#073123",
				"nero-gradiente": "#05050A",
			},
		},
	},
	plugins: [],
};
