import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import SlidesImage from "@assets/slides.svg";

const Slides = () => {
	const { setHeaderData } = useOutletContext<any>();

	useEffect(() => {
		setHeaderData({
			name: "Slides",
			image: SlidesImage,
		});
	}, []);
	return <div>Slides</div>;
};

export default Slides;
