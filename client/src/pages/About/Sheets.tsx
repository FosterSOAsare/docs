import React, { useReducer } from "react";

import features from "../../data/Sheets/features.data";
import advantages from "../../data/Sheets/Advantages.data";
import templates from "../../data/Sheets/templates.data";

import toggleFunc, { slideIn, slideOut, initialState } from "../../utils/slider.util";

import SideMenu from "../../components/About/SideMenu";
import Hero from "../../components/About/Hero";
import Header from "../../components/About/Header";
import Plans from "../../components/About/Plans";
import Footer from "../../components/About/Footer";
import Security from "../../components/About/Security";
import Advantages from "../../components/About/Advantages";
import Features from "../../components/About/Features";

import LogoIcon from "@assets/sheets.svg";
import HeroImage from "@assets/hero.png";

import Collaborate from "../../components/About/Collaborate";
import GetStarted from "../../components/About/GetStarted";
import Templates from "../../components/About/Templates";

const SheetsAbout = () => {
	const [toggle, toggleDispatchFunc] = useReducer(toggleFunc, initialState);

	return (
		<>
			<Header LogoIcon={LogoIcon} slideIn={slideIn} toggleDispatchFunc={toggleDispatchFunc} name="Sheets" />

			<SideMenu slideOut={() => slideOut(toggleDispatchFunc)} toggle={toggle} headerData={{ name: "Sheets", image: LogoIcon }} />

			<Hero title="Make data-driven decisions, in Google Sheets" desc="Create and collaborate on online documents in real-time and from any device." name="Sheets" image={HeroImage} />

			<Features features={features} name="Sheets" />
			<Advantages advantages={advantages} />
			<Security name="Sheets" />

			<Plans name="Sheets" />

			<Collaborate
				appStoreLink="https://apps.apple.com/app/google-sheets/id842849113/?l=en"
				playStoreLink="https://play.google.com/store/apps/details?id=com.google.android.apps.docs.editors.sheets&hl=en"
				point="spreadsheets "
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
