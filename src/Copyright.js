import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "./Link";
import classes from "./styles/Copyright.module.css";
import theme from "./theme";
import { IconButton } from "@mui/material";
import GithubIcon from "@mui/icons-material/Github";

export default function Copyright({ name, src }) {
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
			<IconButton
				sx={{
					position: "absolute",
					top: 0,
					right: 8,
					color: theme.palette.secondary.light,
				}}
				size="small"
				aria-label="account of current user"
				aria-controls="menu-appbar"
				aria-haspopup="true"
				href={src || ""}
				target="_blank"
				rel="noreferrer"
			>
				<GithubIcon />
			</IconButton>
		</div>
	);
}
