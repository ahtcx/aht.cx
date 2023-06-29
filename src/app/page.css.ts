import { style } from "@vanilla-extract/css";
import { item } from "./_styles/global.css";

export const display_contents = style({
	display: "contents",
});

export const hero = style([
	item({ width: "half" }),
	{
		fontSize: "1.5rem",
		fontWeight: "bold",

		"@media": {
			"(max-width: 800px)": {
				gridColumn: "span 3",
			},
		},
	},
]);

export const image = style([
	item({ padded: false, width: "half" }),
	{
		height: 0,
		minHeight: "100%",
		width: "100%",
		objectFit: "cover",

		"@media": {
			"(max-width: 800px)": {
				gridColumn: "span 1",
			},
		},
	},
]);

export const details = style([
	item({ flex: true, width: "half" }),
	{
		"@media": {
			"(max-width: 800px)": {
				gridColumn: "span 3",
			},
		},
	},
]);
