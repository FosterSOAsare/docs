import { useEffect, useReducer, useState } from "react";
import SlidesImage from "@assets/slides.svg";
import Header from "../../components/Header";
import SideMenu from "../../components/SideMenu";
import toggleFunc, { slideIn, slideOut, initialState } from "../../utils/slider.util";

type mainPageType = {
	name: string;
	image: string;
};

const Slides = () => {
	const [headerData, setHeaderData] = useState<mainPageType>({ name: "", image: "" });
	const [toggle, toggleDispatchFunc] = useReducer(toggleFunc, initialState);

	useEffect(() => {
		setHeaderData({
			name: "Slides",
			image: SlidesImage,
		});
	}, []);
	return (
		<>
			<Header slideIn={() => slideIn(toggleDispatchFunc)} headerData={headerData} />
			<SideMenu slideOut={() => slideOut(toggleDispatchFunc)} toggle={toggle} headerData={headerData} />
		</>
	);
};

export default Slides;
