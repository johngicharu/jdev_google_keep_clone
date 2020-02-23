const common = {
		fonts: {
			fontFamily: "Sf Pro Display, 'Roboto', 'Helvetica Neue', sans-serif",
			fontSize: "16px"
		},
	
		borderRadius: "4px",
		boxShadow: "0 0 3px 0px rgba(0, 0, 0, 0.3)"
}

export const lightTheme = {
	colors: {
		main: "#fffffe", // White
		primary: "#fc5185", // Pink
		cardBackground: "#fffffe",
		cardTextColor: "#303a52",
		backgroundColor: "#f0f0f0", // Grey
		textColor: "#303a52" // Dark Blue
	},
	...common
};

export const darkTheme = {
	colors: {
		main: "#141414", // White
		primary: "#fc85a9", // Pink
		cardBackground: "#222222",
		cardTextColor: "#c5e3f6",
		backgroundColor: "#121212", // Grey
		textColor: "#fffffe"
	},
	...common
}

export type ThemeType = typeof lightTheme;
