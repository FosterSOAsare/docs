import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import DocsImage from "@assets/docs.svg";
import Header from "../../components/Header";
import SideMenu from "../../components/SideMenu";

import toggleFunc, { slideIn, slideOut, initialState } from "../../utils/slider.util";

const DocsPage = () => {
	const { setHeaderData } = useOutletContext<any>();

	useEffect(() => {
		setHeaderData({
			name: "Docs",
			image: DocsImage,
		});
	}, []);

	return <div>Docs</div>;
};

export default DocsPage;
