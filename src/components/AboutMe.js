import { Paper, Typography } from "@mui/material";
import React from "react";
import site from "../../config";

import classes from "../styles/About.module.css";
import theme from "../theme";

export const AboutBox = ({ boutme }) => {
	return (
		<>
			<Typography
				className={classes.root}
				sx={{ color: theme.palette.primary.accent }}
				variant="h6"
				component="p"
				paragraph
			>
				&nbsp;&nbsp;&nbsp;&nbsp;
				{boutme || "about me"}
			</Typography>
			{/* <Paper sx={{ padding: theme.spacing(2) }} >
				
			</Paper> */}
		</>
	);
};

export default AboutBox;
