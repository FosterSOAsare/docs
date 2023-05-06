import { useEffect, useReducer, useState } from "react";
import SlidesImage from "@assets/slides.svg";
import Header from "../../components/Header";
import SideMenu from "../../components/SideMenu";
import toggleFunc, { slideIn, slideOut, initialState } from "../../utils/slider.util";
import MainPageContent from "../../components/MainPageContent";
import SlideImage from "@assets/slide.png";

type mainPageType = {
	name: string;
	image: string;
};

const Slides = () => {
	const [headerData] = useState<mainPageType>({ name: "Slides", image: SlidesImage });
	const [toggle, toggleDispatchFunc] = useReducer(toggleFunc, initialState);
	const [slidesData, setSlidesData] = useState([1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6]);
	let borderColor = "#f9ab00";

	return (
		<>
			<Header slideIn={() => slideIn(toggleDispatchFunc)} headerData={headerData} />
			<SideMenu slideOut={() => slideOut(toggleDispatchFunc)} toggle={toggle} headerData={headerData} />
			<MainPageContent title="presentations" mainPageTypeImage={SlideImage} data={slidesData} name="Slide" />
		</>
	);
};

export default Slides;
