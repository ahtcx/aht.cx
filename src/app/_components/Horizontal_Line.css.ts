import { style } from "@vanilla-extract/css";

import { vars } from "../_styles/global.css";
import { calc } from "@vanilla-extract/css-utils";

export const root = style({
	backgroundColor: vars.color.grid,
	height: vars.sizing.grid,
	gridColumn: "span 4",

	"@media": {
		"(min-width: 800px)": {
			width: "100vw",
			marginInlineStart: calc.divide(calc("100vw").subtract(vars.sizing.container), -2),
		},
	},
});
