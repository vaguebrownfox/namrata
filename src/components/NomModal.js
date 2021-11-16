import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

// Style
import classes from "../styles/Modal.module.css";

export default function NomModal({ open, handleClose, imgSrc }) {
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
				<div className={classes.imageContainer}>
					<Image
						src={imgSrc} // Route of the image file
						width={512}
						height={512}
						layout="responsive"
						onClick={handleClose}
					/>
				</div>
			</Modal>
		</div>
	);
}
