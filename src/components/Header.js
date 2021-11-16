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
import { Slide } from "@mui/material";

export default function Header({ name, twitter, insta }) {
	const [anim, setAnim] = React.useState(false);
	React.useEffect(() => {
		setTimeout(() => {
			setAnim(true);
		}, 1024);
	}, []);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" size="">
				<Toolbar variant="dense">
					<Slide
						in={anim}
						direction="right"
						style={{ transitionDuration: `${500}ms` }}
					>
						<IconButton
							edge="start"
							aria-label="menu"
							href="/about"
							sx={{ mr: 2, color: theme.palette.secondary.light }}
						>
							<LocalFloristIcon />
						</IconButton>
					</Slide>
					<Slide
						in={anim}
						direction="right"
						style={{ transitionDuration: `${500}ms` }}
					>
						<Typography
							variant="h6"
							color="inherit"
							component={Link}
							href="/about"
							sx={{ flexGrow: 1, textDecoration: "none" }}
						>
							{name || "Your Name"}
						</Typography>
					</Slide>
					<div>
						<Slide
							in={anim}
							direction="left"
							style={{ transitionDuration: `${500}ms` }}
						>
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
						</Slide>
						<Slide
							in={anim}
							direction="left"
							style={{ transitionDuration: `${500}ms` }}
						>
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
						</Slide>
					</div>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
