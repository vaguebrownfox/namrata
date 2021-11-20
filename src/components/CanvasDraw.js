import React from "react";
import { Canvas } from "./Canvas";

import classes from "../styles/CanvasDraw.module.css";

export const CanvasDraw = () => {
	const draw = (ctx, fc) => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

		ctx.fillStyle = "#000";

		ctx.beginPath();
		ctx.arc(
			ctx.canvas.width / 2,
			ctx.canvas.height / 2,
			20 * Math.sin(fc * 0.05) ** 2,
			0,
			2 * Math.PI
		);

		ctx.fill();
	};
	return (
		<div className={classes.cnvDraw}>
			<Canvas
				className={classes.cnv}
				draw={draw}
				options={{ context: "2d" }}
			/>
		</div>
	);
};
