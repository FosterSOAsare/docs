import { useEffect, useReducer, useState } from "react";
import FormsImage from "@assets/Forms.svg";
import Header from "../../components/Header";
import SideMenu from "../../components/SideMenu";
import toggleFunc, { slideIn, slideOut, initialState } from "../../utils/slider.util";
import MainPageContent from "../../components/MainPageContent";
import FormImage from "@assets/form.png";

type mainPageType = {
	name: string;
	image: string;
};

const Forms = () => {
	const [headerData] = useState<mainPageType>({ name: "Forms", image: FormsImage });
	const [toggle, toggleDispatchFunc] = useReducer(toggleFunc, initialState);
	const [FormsData, setFormsData] = useState([1, 2]);
	let borderColor = "#8430ce";

	useEffect(() => {}, []);
	return (
		<>
			<Header slideIn={() => slideIn(toggleDispatchFunc)} headerData={headerData} />
			<SideMenu slideOut={() => slideOut(toggleDispatchFunc)} toggle={toggle} headerData={headerData} />
			<MainPageContent title="forms" mainPageTypeImage={FormImage} data={FormsData} name="Form" />
		</>
	);
};

export default Forms;
