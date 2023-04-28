import CreateForm from "@assets/create-form.jpg";
import SendSurveys from "@assets/send-forms.jpg";
import AnalyzeResponse from "@assets/analyze-response.jpg";
import CreateSurveys from "@assets/Surveys.jpg";

import featuresType from "../../types/feature.types";

const features: featuresType[] = [
	{
		image: CreateForm,
		title: "Create an online form as easily as creating a document",
		desc: "Select from multiple question types, drag-and-drop to reorder questions, and customize values as easily as pasting a list.",
		imageOrder: 1,
	},
	{
		image: SendSurveys,
		title: "Send polished surveys and forms",
		desc: "Customize colors, images, and fonts to adjust the look and feel or reflect your organization’s branding. And add custom logic that shows questions based on answers, for a more seamless experience.",
		imageOrder: 2,

	},
	{
		image: AnalyzeResponse,
		title: "Analyze responses with automatic summaries",
		desc: "See charts with response data update in real-time. Or open the raw data with Google Sheets for deeper analysis or automation.",
		imageOrder: 1,
	},
	{
		image: CreateSurveys,
		title: "Create and respond to surveys from anywhere",
		desc: "Access, create, and edit forms on-the-go, from screens big and small. Others can respond to your survey from wherever they are—from any mobile device, tablet, or computer.",
		imageOrder: 2,
	},
];

export default features;
