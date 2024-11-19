import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Nav } from "@/components/layout/Nav";
import Script from "next/script";
import { Lora } from "next/font/google";
import { TerminalBar } from "@/features/TerminalBar/TerminalBar";
import { Hotkeys } from "@/features/Hotkeys/Hotkeys";
import KeyLogger from "@/features/KeyLogger/KeyLogger";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

const departureMono = localFont({
	src: "./fonts/DepartureMono-Regular.woff",
	variable: "--font-departure-mono",
	weight: "100 900",
});

const lora = Lora({
	weight: ["400", "500", "600", "700"], // Select the weights you need
	variable: "--font-lora",
	subsets: ["latin"], // Add subsets if needed
});

export const metadata: Metadata = {
	title: siteConfig.name,
	description: siteConfig.description,
};

export const viewport: Viewport = {
	themeColor: "#e5e5e5",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				{process.env.NODE_ENV === "production" && (
					<Script
						src="https://cloud.umami.is/script.js"
						data-website-id="92cc1a5b-a955-4781-8c79-6e2a84ff4ad2"
						strategy="afterInteractive"
						defer
					/>
				)}
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${departureMono.variable} ${lora.variable} antialiased min-h-fit font-geist flex flex-col md:flex-row p-4 md:p-8 lg:p-32`}
			>
				<Hotkeys />
				<Nav />
				<main className="flex flex-col w-full md:max-w-2xl gap-2 px-4 pb-4 max-md:pt-6 sm:px-6 border-t border-border md:border-0">
					<TerminalBar />
					{children}
				</main>
				<KeyLogger />
			</body>
		</html>
	);
}
