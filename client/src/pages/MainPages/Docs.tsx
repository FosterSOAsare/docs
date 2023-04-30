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
			<MainPageContent name="documents" mainPageTypeImage={DocImage} />
		</>
	);
};

export default Docs;
