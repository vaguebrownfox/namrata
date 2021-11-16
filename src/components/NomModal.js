import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton, Zoom } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

// Style
import classes from "../styles/Modal.module.css";
import theme from "../theme";

export default function NomModal({
	open,
	imgSrc,
	handleClose,
	handleImageSlide,
}) {
	const [checked, setChecked] = React.useState(true);

	const handleChange = dir => {
		setChecked(false);
		setTimeout(() => {
			handleImageSlide(dir);
			setChecked(true);
		}, 500);
	};

	return (
		<div>
			<Modal
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					background: "rgba(0,0,0,0.75)",
				}}
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-nom-image"
				aria-describedby="modal-nom-single_image"
			>
				<>
					<IconButton
						sx={{
							color: theme.palette.secondary.light,
							margin: theme.spacing(2),
						}}
						aria-label="previous"
						size="large"
						onClick={() => handleChange(false)}
					>
						<ArrowBackIosNewIcon />
					</IconButton>
					<Zoom in={checked}>
						<div className={classes.imageContainer}>
							<Image
								src={imgSrc.path} // Route of the image file
								width={512}
								height={512}
								layout="responsive"
								onClick={handleClose}
							/>
						</div>
					</Zoom>
					<IconButton
						sx={{
							color: theme.palette.secondary.light,
							margin: theme.spacing(2),
						}}
						aria-label="next"
						size="large"
						onClick={() => handleChange(true)}
					>
						<ArrowForwardIosIcon />
					</IconButton>
				</>
			</Modal>
		</div>
	);
}
