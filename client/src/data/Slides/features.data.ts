import MakePresentations from "@assets/make-presentations.jpg";
import PresentSlideShows from "@assets/present-slideshows.jpg";
import Connect from "@assets/slides-seamlessly-connect.jpg";
import Collaboration from "@assets/slides-collaboration.jpg";

import featuresType from "../../types/feature.types";

const features: featuresType[] = [
	{
		image: MakePresentations,
		title: "Make beautiful presentations, together",
		desc: "Stay in sync in your slides, with easy sharing and real-time editing. Use comments and assign action items to build your ideas together.",
		imageOrder: 1,
	},
	{
		image: PresentSlideShows,
		title: "Present slideshows with confidence",
		desc: "With easy-to-use presenter view, speaker notes, and live captions, Slides makes presenting your ideas a breeze. You can even present to Google Meet video calls directly from Slides.",
		imageOrder: 2,

	},
	{
		image: Connect,
		title: "Seamlessly connect to your other Google apps",
		desc: "Slides is thoughtfully connected to other Google apps you love, saving you time. Embed charts from Google Sheets or reply to comments directly from Gmail. You can even search the web and Google Drive for relevant content and images directly from Slides.",
		imageOrder: 1,
	},
	{
		image: Collaboration,
		title: "Extend collaboration and intelligence to PowerPoint  files",
		desc: "Easily edit Microsoft PowerPoint presentations online without converting them, and layer on Slides’ enhanced collaborative and assistive features like comments, action items, and Smart Compose.",
		imageOrder: 2,
	},
];

export default features;
