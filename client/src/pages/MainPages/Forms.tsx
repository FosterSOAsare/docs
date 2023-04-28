import { useEffect, useReducer, useState } from "react";
import FormsImage from "@assets/forms.svg";
import Header from "../../components/Header";
import SideMenu from "../../components/SideMenu";
import toggleFunc, { slideIn, slideOut, initialState } from "../../utils/slider.util";

type mainPageType = {
	name: string;
	image: string;
};

const Forms = () => {
	const [headerData, setHeaderData] = useState<mainPageType>({ name: "", image: "" });
	const [toggle, toggleDispatchFunc] = useReducer(toggleFunc, initialState);

	useEffect(() => {
		setHeaderData({
			name: "Forms",
			image: FormsImage,
		});
	}, []);
	return (
		<>
			<Header slideIn={() => slideIn(toggleDispatchFunc)} headerData={headerData} />
			<SideMenu slideOut={() => slideOut(toggleDispatchFunc)} toggle={toggle} headerData={headerData} />
		</>
	);
};

export default Forms;
