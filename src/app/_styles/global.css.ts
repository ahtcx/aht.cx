import { assignVars, createThemeContract, globalStyle, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";

export const vars = createThemeContract({
	color: {
		foreground_rgb: null,
		background_rgb: null,
		grid: null,
	},
	sizing: {
		unit: null,
		grid: null,
		container: null,
	},
});

globalStyle(":root", {
	vars: assignVars(vars, {
		color: {
			foreground_rgb: "17,17,17",
			background_rgb: "238,238,238",
			grid: "rgba(136, 136, 136, 0.35)",
		},
		sizing: {
			grid: "1px",
			unit: "8px",
			container: "800px",
		},
	}),

	colorScheme: "light",

	backgroundColor: `rgb(${vars.color.background_rgb})`,
	color: `rgb(${vars.color.foreground_rgb})`,

	fontSize: ["16px", "1.5rem"],

	"@media": {
		"(prefers-color-scheme: dark)": {
			vars: assignVars(vars.color, {
				foreground_rgb: "238,238,238",
				background_rgb: "17,17,17",
				grid: "rgba(136, 136, 136, 0.35)",
			}),
			colorScheme: "dark",
		},
		"(max-width: 800px)": {
			vars: {
				[vars.sizing.unit]: "6px",
				[vars.color.grid]: "rgba(136, 136, 136, 0.25)",
			},
		},
	},
});

globalStyle("p, h1, h2, h3", {
	margin: 0,
});

globalStyle("a", {
	color: "inherit",
});

export const item = recipe({
	variants: {
		flex: {
			true: {
				display: "flex",
				flexDirection: "column",
				gap: calc.multiply(vars.sizing.unit, 1.25),
				alignItems: "start",
			},
		},
		padded: {
			true: { margin: calc.multiply(vars.sizing.unit, 5) },
		},
		width: {
			half: { gridColumn: "span 2" },
			full: { gridColumn: "span 4" },
		},
	},
	defaultVariants: {
		padded: true,
		width: "full",
	},
});
