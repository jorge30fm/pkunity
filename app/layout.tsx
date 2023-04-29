import "./globals.css";
import * as React from "react";
import { Providers } from "./GlobalRedux/provider";
import Head from "next/head";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import { MuiSetup } from "../config/mui/MuiSetup";

export const metadata: Metadata = {
	title: "PKUnity",
	description:
		"PKUnity is a social media platform for the PKU community. It is a place where people with PKU can connect with others, share their experiences, and learn from each other.",
	viewport: "initial-scale=1, width=device-width",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
				<Providers>
				<body>
					<MuiSetup>{children}</MuiSetup>
				</body>
			</Providers>
		</html>
	);
}
