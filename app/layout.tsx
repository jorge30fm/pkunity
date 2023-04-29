"use client";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import * as React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../config/themes"
import { Providers } from "./GlobalRedux/provider";
import Head from "next/head";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Head>
				<title>PKUnity</title>
				<meta
					name="description"
					content="Your friend in your PKU journey"
				/>
				<meta
					name="viewport"
					content="initial-scale=1,
					width=device-width"
				/>
				<link href="https://fonts.googleapis.com/css?family=PT+Sans" rel="stylesheet"/>
			</Head>
			<Providers>
				<ThemeProvider theme={theme}>
					<CssBaseline>
						<body>{children}</body>
					</CssBaseline>
				</ThemeProvider>
			</Providers>
		</html>
	);
}
