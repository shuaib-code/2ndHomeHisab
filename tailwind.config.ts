import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./app/**/*.{ts,tsx}",
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				fadeOut: {
					"0%": { opacity: "1" },
					"100%": { opacity: "0" },
				},
				slideUp: {
					"0%": { transform: "translateY(20px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
				slideDown: {
					"0%": { transform: "translateY(0)", opacity: "1" },
					"100%": { transform: "translateY(20px)", opacity: "0" },
				},
				zoomIn: {
					"0%": { transform: "scale(0.9)", opacity: "0" },
					"100%": { transform: "scale(1)", opacity: "1" },
				},
				zoomOut: {
					"0%": { transform: "scale(1)", opacity: "1" },
					"100%": { transform: "scale(0.9)", opacity: "0" },
				},
			},
			animation: {
				fadeIn: "fadeIn 0.4s ease-out forwards",
				fadeOut: "fadeOut 0.4s ease-in forwards",
				slideUp: "slideUp 0.4s ease-out forwards",
				slideDown: "slideDown 0.4s ease-in forwards",
				zoomIn: "zoomIn 0.4s ease-out forwards",
				zoomOut: "zoomOut 0.4s ease-in forwards",
			},
		},
	},
	plugins: [],
};
export default config;
