import React, { useReducer } from "react";

import features from "../../data/Slides/features.data";
import advantages from "../../data/Slides/Advantages.data";
import templates from "../../data/Slides/templates.data";

import toggleFunc, { slideIn, slideOut, initialState } from "../../utils/slider.util";

import SideMenu from "../../components/About/SideMenu";
import Hero from "../../components/About/Hero";
import Header from "../../components/About/Header";
import Plans from "../../components/About/Plans";
import Footer from "../../components/About/Footer";
import Security from "../../components/About/Security";
import Advantages from "../../components/About/Advantages";
import Features from "../../components/About/Features";

import LogoIcon from "@assets/slides.svg";
import HeroImage from "@assets/hero.png";

import Collaborate from "../../components/About/Collaborate";
import GetStarted from "../../components/About/GetStarted";
import Templates from "../../components/About/Templates";

const SlidesAbout = () => {
	const [toggle, toggleDispatchFunc] = useReducer(toggleFunc, initialState);

	return (
		<>
			<Header LogoIcon={LogoIcon} slideIn={slideIn} toggleDispatchFunc={toggleDispatchFunc} name="Slides" />

			<SideMenu slideOut={() => slideOut(toggleDispatchFunc)} toggle={toggle} headerData={{ name: "Slides", image: LogoIcon }} />

			<Hero title="Tell impactful stories, with Google Slides" desc="Create and collaborate on online documents in real-time and from any device." name="Slides" image={HeroImage} />

			<Features features={features} name="Sheets" />
			<Advantages advantages={advantages} />
			<Security name="Slides" />

			<Plans name="Slides" />

			<Collaborate
				appStoreLink="https://apps.apple.com/app/google-slides/id879478102/?l=en"
				playStoreLink="https://play.google.com/store/apps/details?id=com.google.android.apps.docs.editors.slides&hl=en"
				point="presentations"
			/>

			<Templates
				templates={templates}
				name="Slides"
				link="https://docs.google.com/spreadsheets/u/0/?ftv=1"
				desc="Choose from a variety of presentations, reports, and other professionally-designed templates to kick things off quickly."
			/>
			<GetStarted name="Slides" />

			<Footer />
		</>
	);
};

export default SlidesAbout;
