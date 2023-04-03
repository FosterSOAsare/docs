module.exports = {
	content: ["./src/*.tsx", "./src/components/*.tsx", "./src/pages/**/*.tsx"],
	theme: {
		extend: {
			colors: {
				primary: "#202124",
				secondary: "#185ABC",
				desc: "#555555",
				border: "#C3C4C5",
				background3: "#343942",
				white: "#FFFFFF",
			},
			screens: {
				xxs: "0px",
				xs: "550px", // Add a new breakpoint
				sm: "700px",
				md: "900px",
				lg: "1124px",
				xl: "1536px",
			},
		},
	},
	plugins: [],
};
