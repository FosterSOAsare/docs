import React, { useReducer } from "react";

import features from "../../data/Docs/features.data";
import advantages from "../../data/Docs/Advantages.data";
import templates from "../../data/Docs/templates.data";

import toggleFunc, { slideIn, slideOut, initialState } from "../../utils/slider.util";

import SideMenu from "../../components/SideMenu";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Plans from "./components/Plans";
import Footer from "./components/Footer";
import Security from "./components/Security";
import Advantages from "./components/Advantages";
import Features from "./components/Features";

import LogoIcon from "@assets/docs.svg";
import HeroImage from "@assets/hero.png";

import Collaborate from "./components/Collaborate";
import GetStarted from "./components/GetStarted";
import Templates from "./components/Templates";

const DocsAbout = () => {
	const [toggle, toggleDispatchFunc] = useReducer(toggleFunc, initialState);

	return (
		<>
			<Header LogoIcon={LogoIcon} slideIn={slideIn} toggleDispatchFunc={toggleDispatchFunc} name="Docs" />

			<SideMenu slideOut={() => slideOut(toggleDispatchFunc)} toggle={toggle} name="Docs" LogoIcon={LogoIcon} />

			<Hero title="Build your best ideas together, in Google Docs" desc="Create and collaborate on online documents in real-time and from any device." name="Docs" image={HeroImage} />

			<Features features={features} name="Docs" />
			<Advantages advantages={advantages} />
			<Security name="Docs" />

			<Plans name="Docs" />

			<Collaborate
				appStoreLink="https://apps.apple.com/app/google-docs-sync-edit-share/id842842640/?l=en"
				playStoreLink="https://apps.apple.com/app/google-docs-sync-edit-share/id842842640/?l=en"
				point="documents "
			/>

			<Templates
				templates={templates}
				name="Docs"
				link="https://docs.google.com/document/u/0/?ftv=1&tgif=c"
				desc="Access, create, and edit your documents wherever you are — from any mobile device, tablet, or computer — even when offline."
			/>
			<GetStarted name="Docs" />

			<Footer />
		</>
	);
};

export default DocsAbout;
