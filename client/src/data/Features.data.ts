import Seamless from "@assets/seamless.jpg";
import SeamlessMobile from "@assets/seamless-mobile.jpg";
import WriteFaster from "@assets/write-faster.jpg";
import Connect from "@assets/connect.jpg";
import ConnectMobile from "@assets/connect-mobile.jpg";
import Collaboration from "@assets/collaboration.jpg";
import CollaborationMobile from "@assets/collaboration-mobile.jpg";

import featuresType from "../types/feature.types";

const features: featuresType[] = [
	{
		image: Seamless,
		title: "Seamless collaboration, from anywhere",
		desc: "Edit together in real-time with easy sharing, and use comments, suggestions, and action items to keep things moving. Or use @-mentions to pull relevant people, files, and events into your online Docs for rich collaboration.",
		imageOrder: 1,
		mobile: SeamlessMobile
	},
	{
		image: WriteFaster,
		title: "Write faster with built-in intelligence",
		desc: "Assistive features like Smart Compose help you write faster with fewer errors, so you can focus on ideas. And save time with spelling and grammar suggestions, voice typing, and quick document translation.",
		imageOrder: 2,

	},
	{
		image: Connect,
		title: "Seamlessly connect to your other Google apps",
		desc: "Docs is thoughtfully connected to other Google apps you love, saving you time. Reply to comments directly from Gmail, embed charts from Google Sheets, and easily share via Google Meet. You can even search the web and Google Drive for relevant content and images, directly from Docs.",
		imageOrder: 1,
		mobile: ConnectMobile
	},
	{
		image: Collaboration,
		title: "Bring collaboration and intelligence to other file types",
		desc: "Easily edit Microsoft Word files online without converting them, and layer on Docs’ enhanced collaborative and assistive features like action items and Smart Compose. You can also import PDFs, making them instantly editable.",
		imageOrder: 2,
		mobile: CollaborationMobile
	},
];

export default features;
