import React from "react";
import { Canvas } from "./Canvas";

// Styles
import classes from "../styles/CanvasDraw.module.css";
import useSize from "../hooks/useSize";
import { blue } from "@mui/material/colors";

const Poles = () => {
	const [poles, setPoles] = React.useState([]);

	const [size, setSize] = React.useState({ height: 0, width: 0 });

	const [contRef] = useSize(setSize);

	const drawPoles = function (ctx) {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

		var grd = ctx.createLinearGradient(
			ctx.canvas.width * 0.5,
			ctx.canvas.height * 0,
			ctx.canvas.width * 0.5,
			ctx.canvas.height
		);
		grd.addColorStop(0, "white");
		grd.addColorStop(1, blue[100]);
		ctx.fillStyle = grd;
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

		for (const t of this.poles) {
			let dx = t.v.x;
			let dy = t.v.y;
			const mtail = t.p.x.length;

			t.p.x[0] += dx;
			t.p.y[0] += dy;

			let x = t.p.x[0];
			let y = t.p.y[0];

			let speed = Math.sqrt(dx * dx + dy * dy);

			const count = speed * 10; // increasing value for sine function wiggle
			const k1 = -4 - speed / 3; // length of tail segs

			// Bounce off the walls.
			if (x < 0 || x > ctx.canvas.width) {
				t.v.x *= -1;
			}
			if (y < 0 || y > ctx.canvas.height) {
				t.v.y *= -1;
			}

			// Swim!
			for (var j = 1; j < mtail; ++j) {
				const vx = x - t.p.x[j];
				const vy = y - t.p.y[j];
				const k2 =
					Math.cos(((t.count += count) + j * 6) / 2400) /
					(speed * 1.4);
				t.p.x[j] = (x += (dx / speed) * k1) - dy * k2;
				t.p.y[j] = (y += (dy / speed) * k1) + dx * k2;
				speed = Math.sqrt((dx = vx) * dx + (dy = vy) * dy);
			}

			// Head
			ctx.save();
			ctx.translate(t.p.x[0], t.p.y[0]);
			ctx.rotate(Math.atan2(t.v.y, t.v.x) - Math.PI / 2);
			ctx.lineWidth = 1.5;
			const inv = t.v.x / t.v.y < 0 ? 1 : -1;

			for (let i = 1; i < mtail; ++i) {
				ctx.beginPath();
				let f = (i / mtail - 1) * (i / mtail - 1);
				ctx.strokeStyle = `hsla(${50 / (1 + f)}, 100%, 65%, 1)`;
				ctx.ellipse(0, 0, 3 * f, 16 * f, 0, 0, Math.PI);
				ctx.stroke();
			}
			ctx.restore();

			// Body
			ctx.beginPath();
			ctx.moveTo(t.p.x[0], t.p.y[0]);
			for (let i = 1; i < 3; ++i) {
				let f = (i / mtail - 1) * (i / mtail - 1);
				ctx.strokeStyle = `hsla(${50 / (1 + f)}, 100%, 65%, 1)`;
				ctx.lineTo(t.p.x[i], t.p.y[i]);
				ctx.lineWidth = 3 * i;
			}
			ctx.stroke();

			// Tail
			// const inv = t.v.x / t.v.y < 0 ? 1 : -1;
			ctx.beginPath();
			for (let i = 1; i < mtail; ++i) {
				let f = (i / mtail - 1) * (i / mtail - 1);

				ctx.strokeStyle = `hsla(${50 / (1 + f)}, 100%, 65%, 1)`;
				ctx.moveTo(t.p.x[i - 1], t.p.y[i - 1]);

				ctx.lineTo(t.p.x[i], t.p.y[i]);
				ctx.lineWidth = 8 * f;

				ctx.stroke();
			}
		}
	};

	React.useEffect(() => {
		setPoles([]);
		const n = 2;

		const p = new Array(n).fill(0).map(() => new Pole({ size }));

		setPoles([...p]);
	}, []);

	return (
		<div ref={contRef} className={classes.cnvDraw}>
			<Canvas
				className={classes.cnv}
				draw={drawPoles.bind({ poles })}
				options={{ context: "2d" }}
			/>
		</div>
	);
};

export default Poles;

class Pole {
	constructor({ size }) {
		this.m = 22;
		this.vel = 3;
		this.p = {
			x: new Array(this.m).fill(Math.random() * 200),
			y: new Array(this.m).fill(Math.random() * 10),
		};
		this.v = {
			x: (Math.random() - 0.5) * this.vel,
			y: (Math.random() - 0.5) * this.vel,
		};
		this.count = 0;
	}
}
