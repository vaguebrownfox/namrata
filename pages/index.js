import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Tabs } from "../src/components/Tabs";
import site from "../config";
import { getSortedNoms } from "../src/lib/noms";

export default function Index({ noms }) {
	console.log({ noms });
	return (
		<Container maxWidth="lg">
			<Box sx={{ my: 4 }}>
				<Tabs mon={site.mon} noms={noms} />
			</Box>
		</Container>
	);
}

export const getStaticProps = async () => {
	const allNoms = getSortedNoms();
	return {
		props: {
			noms: allNoms,
		},
	};
};
