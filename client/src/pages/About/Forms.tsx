import React, { useReducer } from "react";

import features from "../../data/Forms/features.data";
import advantages from "../../data/Forms/Advantages.data";
import templates from "../../data/Forms/templates.data";

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

const FormsAbout = () => {
	const [toggle, toggleDispatchFunc] = useReducer(toggleFunc, initialState);

	return (
		<>
			<Header LogoIcon={LogoIcon} slideIn={slideIn} toggleDispatchFunc={toggleDispatchFunc} name="Forms" />

			<SideMenu slideOut={() => slideOut(toggleDispatchFunc)} toggle={toggle} name="Forms" LogoIcon={LogoIcon} />

			<Hero title="Get insights quickly, with Google Forms" desc="Easily create and share online forms and surveys, and analyze responses in real-time." name="Forms" image={HeroImage} />

			<Features features={features} name="Forms" />
			<Advantages advantages={advantages} />
			<Security name="Forms" />

			<Plans name="Forms" />

			<Templates
				templates={templates}
				name="Forms"
				link="https://docs.google.com/spreadForms/u/0/?ftv=1"
				desc="Choose from a variety of surveys, questionnaires, and other professionally-designed templates to kick things off quickly."
			/>
			<GetStarted name="Forms" />

			<Footer />
		</>
	);
};

export default FormsAbout;
