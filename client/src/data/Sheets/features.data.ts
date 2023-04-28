import Collaborate from "@assets/sheets-collaborate.jpg";
import Insights from "@assets/get-to-insights.jpg";
import Connect from "@assets/connect-seamlessly.jpg";
import ExtendCollaboration from "@assets/extend-collaboration.jpg";

import featuresType from "../../types/feature.types";

const features: featuresType[] = [
	{
		image: Collaborate,
		title: "Collaborate on data, from anywhere",
		desc: "Establish a ground truth for data in your online spreadsheet, with easy sharing and real-time editing. Use comments and assign action items to keep analysis flowing.",
		imageOrder: 1,
	},
	{
		image: Insights,
		title: "Get to insights faster with built -in intelligence",
		desc: "Assistive features like Smart Fill and formula suggestions help you analyze faster with fewer errors. And get insights quickly by asking questions about your data in simple language.",
		imageOrder: 2,

	},
	{
		image: Connect,
		title: "Seamlessly connect to your other Google apps",
		desc: "Sheets is thoughtfully connected to other Google apps you love, saving you time. Easily analyze Google Forms data in Sheets, or embed Sheets charts in Google Slides and Docs. You can also reply to comments directly from Gmail and easily present your spreadsheets to Google Meet.",
		imageOrder: 1,
	},
	{
		image: ExtendCollaboration,
		title: "Extend collaboration and intelligence to Excel files",
		desc: "Easily edit Microsoft Excel spreadsheets online without converting them, and layer on Sheets’ enhanced collaborative and assistive features like comments, action items, and Smart Fill.",
		imageOrder: 2,
	},
];

export default features;
