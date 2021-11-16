import React from "react";
import Image from "next/image";
import { Grid, Paper, Typography } from "@mui/material";
import Link from "../Link";
import theme from "../theme";
import NomModal from "./NomModal";

export const Tabs = ({ noms, mon }) => {
	const [open, setOpen] = React.useState(false);
	const [imgSrc, setImgSrc] = React.useState("");
	const handleOpen = imsrc => {
		setImgSrc(imsrc);
		setOpen(true);
	};
	const handleClose = () => setOpen(false);

	return (
		<>
			<Typography
				sx={{
					paddingLeft: theme.spacing(2),
					textAlign: "flex-start",
					[theme.breakpoints.down("md")]: {
						textAlign: "center",
					},
				}}
				variant="h4"
				component="h1"
				color="secondary"
				href="/about"
				gutterBottom
			>
				{mon || "your moniker"}&nbsp;...
			</Typography>
			<Grid
				container
				spacing={4}
				sx={{
					padding: theme.spacing(2),
					justifyContent: "flex-start",
					[theme.breakpoints.down("md")]: {
						justifyContent: "center",
					},
				}}
			>
				{noms.map((nom, i) => {
					const imsrc = `/noms/${nom.name}`;
					return (
						<Grid
							item
							key={i}
							sx={{ borderRadius: "8px" }}
							onClick={() => handleOpen(imsrc)}
						>
							<Paper
								sx={{
									height: 256,
									width: 256,
								}}
							>
								<Image
									src={imsrc} // Route of the image file
									height={256} // Desired size with correct aspect ratio
									width={256} // Desired size with correct aspect ratio
									alt={nom.id}
								/>
							</Paper>
						</Grid>
					);
				})}
			</Grid>
			<NomModal {...{ open, handleClose, imgSrc }} />
		</>
	);
};
