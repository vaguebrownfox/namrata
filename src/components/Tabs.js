import React from "react";
import Image from "next/image";
import { Grid, Paper, Slide, Typography } from "@mui/material";
import Link from "../Link";
import theme from "../theme";
import NomModal from "./NomModal";

export const Tabs = ({ noms, mon }) => {
	const [anim, setAnim] = React.useState(false);
	const [open, setOpen] = React.useState(false);
	const [imgSrc, setImgSrc] = React.useState({ path: "", index: 0 });
	const handleOpen = (imsrc, idx) => {
		setImgSrc({ path: imsrc, index: idx });
		setOpen(true);
	};
	const handleClose = () => setOpen(false);

	const handleImageSlide = dir => {
		let i = (imgSrc.index + (dir ? 1 : -1)) % noms.length;
		i = i < 0 ? noms.length + i : i;
		let p = `/noms/${noms[i].name}`;
		setImgSrc({ path: p, index: i });
	};

	React.useEffect(() => {
		setTimeout(() => {
			!open && setAnim(true);
		}, 1024);
	}, [open]);

	return (
		<>
			<Slide
				in={anim}
				direction="down"
				style={{ transitionDuration: `${500}ms` }}
			>
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
			</Slide>
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
						<Slide
							key={i}
							in={anim}
							direction="up"
							style={{ transitionDuration: `${500 + i * 70}ms` }}
						>
							<Grid
								item
								key={i}
								sx={{ borderRadius: "8px" }}
								onClick={() => handleOpen(imsrc, i)}
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
						</Slide>
					);
				})}
			</Grid>

			<NomModal
				{...{
					open,
					imgSrc,
					handleClose,
					handleImageSlide,
				}}
			/>
		</>
	);
};
