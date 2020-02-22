const theme = {
	colors: {
		main: "#fffffe", // White
		primary: "#fc5185", // Pink
		backgroundColor: "#f0f0f0", // Grey
		dark: "#364f6b" // Dark Blue
	},

	fonts: {
		fontFamily: "Sf Pro Display, 'Roboto', 'Helvetica Neue', sans-serif",
		fontSize: "16px"
	},

	borderRadius: "4px",
	boxShadow: "0 0 3px 0px rgba(0, 0, 0, 0.3)"
};

export type ThemeType = typeof theme;

export default theme;
