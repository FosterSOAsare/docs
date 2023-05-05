import { useEffect, useReducer, useState } from "react";
import DocsImage from "@assets/docs.svg";
import Header from "../../components/Header";
import SideMenu from "../../components/SideMenu";
import toggleFunc, { slideIn, slideOut, initialState } from "../../utils/slider.util";
import MainPageContent from "../../components/MainPageContent";
import DocImage from "@assets/doc.png";
import { useSelector } from "react-redux";
import { useUserSlice } from "../../slices/user.slice";
import { httpFetchDocs } from "../../utils/requests";

type mainPageType = {
	name: string;
	image: string;
};

const Docs = () => {
	const { user } = useSelector(useUserSlice);
	const [headerData] = useState<mainPageType>({ name: "Docs", image: DocsImage });
	const [toggle, toggleDispatchFunc] = useReducer(toggleFunc, initialState);
	const [docsData, setDocsData] = useState([1, 2, 3, 4]);
	let borderColor = "#1a73e8";

	useEffect(() => {
		// Fetch docsData
		(async function () {
			try {
				if (user.refresh) {
					let res = await httpFetchDocs();
					console.log(res);
				}
			} catch (e) {
				console.log(e);
			}
		})();
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
