import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "./Link";
import classes from "./styles/Copyright.module.css";
import theme from "./theme";

export default function Copyright({ name }) {
	return (
		<div
			className={classes.root}
			style={{ background: theme.palette.secondary.main }}
		>
			<Typography
				// sx={{ marginBottom: 0, color: theme.palette.secondary.light }}
				color="white"
				variant="body2"
				align="center"
				gutterBottom
			>
				{"Copyright © "}
				<Link color="inherit" href="/">
					{name || "your name"}
				</Link>{" "}
				{new Date().getFullYear()}.
			</Typography>
		</div>
	);
}
