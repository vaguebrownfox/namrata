import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import site from "../config";

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: site.colors.primary,
			accent: site.colors.accent,
		},
		secondary: {
			main: site.colors.secondary,
			light: site.colors.light,
		},
		error: {
			main: red.A400,
		},
	},
});

export default theme;
