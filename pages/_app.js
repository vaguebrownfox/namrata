import * as React from "react";
import site from "../config";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import Header from "../src/components/Header";
import Copyright from "../src/Copyright";
import Poles from "../src/components/Poles";
import Voronoi from "../src/components/Voronoi";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
	const {
		Component,
		emotionCache = clientSideEmotionCache,
		pageProps,
	} = props;

	return (
		<>
			<CacheProvider value={emotionCache}>
				<Head>
					<title>{site.name}</title>
					<meta
						name="viewport"
						content="initial-scale=1, width=device-width"
					/>
				</Head>
				<ThemeProvider theme={theme}>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					<Header
						name={site.name}
						twitter={site.twitter}
						insta={site.insta}
					/>
					<Component {...pageProps} />
					<Voronoi />

					<Copyright name={site.qn} src={site.src} />
				</ThemeProvider>
			</CacheProvider>
			<style jsx global>{`
				/* Other global styles such as 'html, body' etc... */

				#__next {
					position: relative;
					height: 100%;
					width: 100%;
					min-height: 100vh;
					padding-bottom: 21px;
				}
			`}</style>
		</>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	emotionCache: PropTypes.object,
	pageProps: PropTypes.object.isRequired,
};
