import { useEffect, useReducer, useState } from "react";
import DocsImage from "@assets/docs.svg";
import Header from "../../components/Header";
import SideMenu from "../../components/SideMenu";
import toggleFunc, { slideIn, slideOut, initialState } from "../../utils/slider.util";
import MainPageContent from "../../components/MainPageContent";
import DocImage from "@assets/doc.png";

type mainPageType = {
	name: string;
	image: string;
};

const Docs = () => {
	const [headerData, setHeaderData] = useState<mainPageType>({ name: "", image: "" });
	const [toggle, toggleDispatchFunc] = useReducer(toggleFunc, initialState);
	const [docsData, setDocsData] = useState([1, 2, 3, 4]);
	let borderColor = "#1a73e8";

	useEffect(() => {
		setHeaderData({
			name: "Docs",
			image: DocsImage,
		});
	}, []);
	return (
		<>
			<Header slideIn={() => slideIn(toggleDispatchFunc)} headerData={headerData} />
			<SideMenu slideOut={() => slideOut(toggleDispatchFunc)} toggle={toggle} headerData={headerData} />
			<MainPageContent title="documents" mainPageTypeImage={DocImage} data={docsData} name="Doc" />
		</>
	);
};

export default Docs;
