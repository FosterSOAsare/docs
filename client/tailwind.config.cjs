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
				search: "#f1f3f4",
			},
			screens: {
				xxs: "0px",
				xs: "550px", // Add a new breakpoint
				sm: "600px",
				md: "900px",
				mdl: "1024px",
				lg: "1224px",
				xl: "1536px",
			},
			order: {
				first: 1,
				second: 2, // Add a new breakpoint
			},
			boxShadow: {
				custom: "0 1px 1px 0 rgba(65, 69, 73, 0.3), 0 1px 3px 1px rgba(65, 69, 73, 0.15)",
			},
		},
	},
	plugins: [],
};
