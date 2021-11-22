import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "../src/Link";
import AboutBox from "../src/components/AboutMe";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import site from "../config";

export default function About() {
	return (
		<>
			<Container maxWidth="sm">
				<Box sx={{ my: 4 }}>
					<Typography variant="h4" component="h1" gutterBottom>
						About me!
					</Typography>
					<AboutBox boutme={site.boutme} />
					<div style={{ display: "flex", justifyContent: "center" }}>
						<Button
							variant="outlined"
							component={Link}
							noLinkStyle
							endIcon={<FilterVintageIcon />}
							href="/"
						>
							Home
						</Button>
					</div>
				</Box>
			</Container>
		</>
	);
}
