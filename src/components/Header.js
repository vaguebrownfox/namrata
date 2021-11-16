import * as React from "react";
import Link from "../Link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import theme from "../theme";

export default function Header({ name, twitter, insta }) {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" size="">
				<Toolbar variant="dense">
					<IconButton
						edge="start"
						aria-label="menu"
						href="/about"
						sx={{ mr: 2, color: theme.palette.secondary.light }}
					>
						<LocalFloristIcon />
					</IconButton>
					<Typography
						variant="h6"
						color="inherit"
						component={Link}
						href="/about"
						sx={{ flexGrow: 1, textDecoration: "none" }}
					>
						{name || "Your Name"}
					</Typography>
					<div>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							color="inherit"
							href={twitter || ""}
							target="_blank"
							rel="noreferrer"
						>
							<TwitterIcon />
						</IconButton>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							color="inherit"
							href={insta || ""}
							target="_blank"
							rel="noreferrer"
						>
							<InstagramIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
