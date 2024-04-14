import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				serif: ["Argesta", "system-ui", "sans-serif"],
			},
			fontSize: {
				title: ["clamp(3rem, 14vw, 9rem)", { lineHeight: "1.2" }],
				"heading-1": ["clamp(2.5rem, 6.5vw, 10rem)", { lineHeight: "1.2" }],
				"heading-2": ["clamp(2.4rem, 8vw, 10rem)", { lineHeight: "1.2" }],
				"heading-3": ["clamp(2rem, 5vw, 2.75rem)", { lineHeight: "1.2" }],
				special: ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.2" }],
				"works-title": ["clamp(1.25rem, 2vw, 1.5rem)", { lineHeight: "1.2" }],
				"body-1": ["clamp(1.1rem, 2vw, 1.3rem)", { lineHeight: "1.5" }],
				"body-2": ["clamp(1rem, 1.5vw, 1.5rem)", { lineHeight: "1.5" }],
				"body-3": ["1.1rem", { lineHeight: "1.5" }],
				"body-4": ["clamp(0.75rem, 3vw, 1rem)", { lineHeight: "1.5" }],
			},
			letterSpacing: {
				headings: "-0.03em",
				widest2: ".40em",
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"logo-slide": {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-100%)" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"logo-slide": "logo-slide 5s infinite linear",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
