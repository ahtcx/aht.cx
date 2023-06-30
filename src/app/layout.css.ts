import { style } from "@vanilla-extract/css";

import { item, vars } from "./_styles/global.css";

export const body = style({
	display: "grid",
	gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
	maxWidth: vars.sizing.container,
	margin: "0 auto",
});

export const header = style([
	item({ padded: true, width: "full" }),
	{
		fontFamily:
			"Seravek, 'Gill Sans Nova', Ubuntu, Calibri, 'DejaVu Sans', source-sans-pro, sans-serif",
	},
]);

export const subtitle = style({
	fontSize: "0.75rem",
});

export const t = style({
	position: "fixed",
	width: "100%",
	height: "100%",
	top: 0,
	left: 0,
	pointerEvents: "none",
});

export const t1 = style({
	maxWidth: vars.sizing.container,
	margin: "0 auto",
	display: "flex",
	height: "100%",
	borderLeft: `${vars.sizing.grid} solid ${vars.color.grid}`,
	borderRight: `${vars.sizing.grid} solid ${vars.color.grid}`,
});

export const t2 = style({
	width: "100%",
	height: "100%",
	borderLeft: `calc(${vars.sizing.grid} / 2) solid  ${vars.color.grid}`,
	borderRight: `calc(${vars.sizing.grid} / 2) solid  ${vars.color.grid}`,

	":first-of-type": {
		borderLeft: "none",
	},

	":last-of-type": {
		borderRight: "none",
	},
});
