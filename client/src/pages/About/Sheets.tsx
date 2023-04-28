import React, { useReducer } from "react";

import features from "../../data/Sheets/features.data";
import advantages from "../../data/Sheets/Advantages.data";
import templates from "../../data/Sheets/templates.data";

import toggleFunc, { slideIn, slideOut, initialState } from "../../utils/slider.util";

import SideMenu from "../../components/SideMenu";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Plans from "./components/Plans";
import Footer from "./components/Footer";
import Security from "./components/Security";
import Advantages from "./components/Advantages";
import Features from "./components/Features";

import LogoIcon from "@assets/sheets.svg";
import HeroImage from "@assets/hero.png";

import Collaborate from "./components/Collaborate";
import GetStarted from "./components/GetStarted";
import Templates from "./components/Templates";

const SheetsAbout = () => {
	const [toggle, toggleDispatchFunc] = useReducer(toggleFunc, initialState);

	return (
		<>
			<Header LogoIcon={LogoIcon} slideIn={slideIn} toggleDispatchFunc={toggleDispatchFunc} name="Sheets" />

			<SideMenu slideOut={() => slideOut(toggleDispatchFunc)} toggle={toggle} name="Sheets" LogoIcon={LogoIcon} />

			<Hero title="Make data-driven decisions, in Google Sheets" desc="Create and collaborate on online documents in real-time and from any device." name="Sheets" image={HeroImage} />

			<Features features={features} name="Sheets" />
			<Advantages advantages={advantages} />
			<Security name="Sheets" />

			<Plans name="Sheets" />

			<Collaborate
				appStoreLink="https://apps.apple.com/app/google-sheets/id842849113/?l=en"
				playStoreLink="https://play.google.com/store/apps/details?id=com.google.android.apps.docs.editors.sheets&hl=en"
			/>

			<Templates
				templates={templates}
				name="Sheets"
				link="https://docs.google.com/spreadsheets/u/0/?ftv=1"
				desc="Access, create, and edit your spreadsheets wherever you are — from any mobile device, tablet, or computer — even when offline."
			/>
			<GetStarted name="Sheets" />

			<Footer />
		</>
	);
};

export default SheetsAbout;
