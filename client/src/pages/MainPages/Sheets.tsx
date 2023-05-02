import { useEffect, useReducer, useState } from "react";
import SheetsImage from "@assets/sheets.svg";
import Header from "../../components/Header";
import SideMenu from "../../components/SideMenu";
import toggleFunc, { slideIn, slideOut, initialState } from "../../utils/slider.util";
import MainPageContent from "../../components/MainPageContent";
import SheetImage from "@assets/sheet.png";

type mainPageType = {
	name: string;
	image: string;
};

const Sheets = () => {
	const [headerData, setHeaderData] = useState<mainPageType>({ name: "", image: "" });
	const [toggle, toggleDispatchFunc] = useReducer(toggleFunc, initialState);
	const [sheetsData, setSheetsData] = useState([1, 2, 3, 4, 5, 6]);
	let borderColor = "#188038";

	useEffect(() => {
		setHeaderData({
			name: "Sheets",
			image: SheetsImage,
		});
	}, []);
	return (
		<>
			<Header slideIn={() => slideIn(toggleDispatchFunc)} headerData={headerData} />
			<SideMenu slideOut={() => slideOut(toggleDispatchFunc)} toggle={toggle} headerData={headerData} />
			<MainPageContent title="spreadsheets" mainPageTypeImage={SheetImage} data={sheetsData} name="Sheet" />
		</>
	);
};

export default Sheets;
