module.exports = {
	content: ["./src/*.tsx", "./src/components/*.tsx", "./src/pages/*.tsx"],
	theme: {
		extend: {
			colors: {
				primary: "#1a73e8",
				secondary: "#185ABC",
				desc: "#5f6368",
				border: "#C3C4C5",
				background2: "#F8F9FA",
				background3: "#343942",
				white: "#FFFFFF",
				hover: "#ebebeb",
			},
			screens: {
				xxs: "0px",
				xs: "550px", // Add a new breakpoint
				sm: "700px",
				md: "900px",
				lg: "1124px",
				xl: "1536px",
			},
			order: {
				first: 1,
				second: 2, // Add a new breakpoint
			},
		},
	},
	plugins: [],
};
