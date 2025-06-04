import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const bangla = Noto_Serif_Bengali({
	subsets: ["bengali"],
	variable: "--font-bangla",
	display: "swap",
});

export const metadata: Metadata = {
	title: "2ndHomeHisab - Shared Home Expense & Meal Tracker",
	description:
		"2ndHomeHisab helps roommates and shared households effortlessly manage meals, bazar duties, and shared expenses with a clean, modern dashboard.",
	keywords: [
		"shared home accounting",
		"expense tracker",
		"meal tracker",
		"bazar tracker",
		"roommate expense manager",
		"2ndHomeHisab",
		"household budgeting",
		"meal expense manager",
		"Next.js dashboard app",
		"shared expenses",
		"home hisab",
	],
	authors: [
		{ name: "Mohammad Shuaib", url: "https://mohammad-shuaib.vercel.app" },
	],
	creator: "Mohammad Shuaib",
	publisher: "2ndHomeHisab App",
	openGraph: {
		title: "2ndHomeHisab - Shared Home Expense & Meal Tracker",
		description:
			"Manage meals, shared expenses, and bazar duties with ease. 2ndHomeHisab makes household budgeting transparent and simple.",
		url: "https://2ndhomehisab.vercel.app",
		siteName: "2ndHomeHisab",
		images: [
			{
				url: "https://2ndHomeHisab.vercel.app/og-image.png",
				width: 500,
				height: 500,
				alt: "2ndHomeHisab - Shared Home Expense & Meal Tracker",
			},
		],
		locale: "en_US",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${bangla.variable} antialiased bg-gray-600`}
			>
				{children}
			</body>
		</html>
	);
}
