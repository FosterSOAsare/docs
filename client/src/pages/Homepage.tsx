import React, { useReducer, useState } from "react";

import features from "../data/Features.data";
import advantages from "../data/Advantages.data";
import planFeatures from "../data/plans.data";
import addedSoftwares from "../data/add-ons.data";
import templates from "../data/templates.data";

import featuresType from "../types/feature.types";
import planFeaturesType from "../types/planfeatures";
import templateTypes from "../types/templates.type";
import advantagesType from "../types/advantage.types";
import AddOnsTypes from "../types/add-ons.types";
import { stateType } from "../types/side-menu.types";
import toggleFunc from "../reducers/sidemenu.reducer";

import HomepageFeature from "../components/HomepageFeature";
import HomepageAdvantage from "../components/HomepageAdvantage";
import SideMenu from "../components/SideMenu";

import { AiOutlineMenu } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";

import LogoIcon from "@assets/docs.svg";
import HeroImage from "@assets/hero.png";
import IsoIecImage from "@assets/Badge_ISO_IEC.svg";
import SocImage from "@assets/SOC-badge.svg";
import FrImage from "@assets/FR-badge.svg";
import HipaaImage from "@assets/hipaa-badge.svg";
import PrivacyIcon from "@assets/privacy-icon.svg";
import PlayStoreIcon from "@assets/google_play.svg";
import AppStoreIcon from "@assets/app_store.svg";

const initialState: stateType = { slide: null, show: false };
const Homepage = () => {
	const [toggle, toggleDispatchFunc] = useReducer(toggleFunc, initialState);

	function slideIn() {
		toggleDispatchFunc({ type: "show", payload: null });
		setTimeout(() => {
			toggleDispatchFunc({ type: "setSlide", payload: "in" });
		}, 10);
	}

	function slideOut() {
		toggleDispatchFunc({ type: "setSlide", payload: "out" });
		setTimeout(() => {
			toggleDispatchFunc({ type: "hide", payload: null });
		}, 500);
	}
	return (
		<>
			<header className="w-full h-16  flex justify-between items-center px-8 border-b-2 border-border fixed bg-white z-10">
				<div className="flex items-center gap-3 ">
					<button className="w-10 h-10  flex justify-center items-center border-none hover:bg-hover rounded-[4px]" onClick={slideIn}>
						<AiOutlineMenu size={18} />
					</button>
					<a className="flex items-center gap-1 text-[20px] hover:bg-hover  p-2 rounded-[5px]" href="/ ">
						<img src={LogoIcon} alt="" />
						<p className="font-medium">Google Docs</p>
					</a>
				</div>
			</header>

			<SideMenu slideOut={slideOut} toggle={toggle} />

			<section className="w-full h-[100vh]  pt-[9vh]">
				<div className="w-full h-full flex items-center justify-between  border-border border-b-[1px]  max-w-[1224px] mx-auto">
					<div className="w-[50%] ">
						<h1 className="text-[54px] w-[95%] mb-4 leading-[60px]">Build your best ideas together, in Google Docs</h1>
						<p className="w-[90%] text-xl text-desc">Create and collaborate on online documents in real-time and from any device.</p>
						<div className="w-full flex justify-start gap-4 my-12">
							<a className="w[40%] h-14 text-lg font-medium bg-secondary flex justify-center items-center rounded-[6px] px-6 text-white" href="/">
								Try Docs for Work
							</a>
							<a className="w[40%] h-14 text-lg font-medium border-border border-[1px] flex justify-center items-center rounded-[6px] px-6 text-secondary" href="/">
								Go to Docs
							</a>
						</div>
						<p>
							Don't have an account?
							<a href="" className="text-secondary ml-6 font-medium">
								Sign up for free
							</a>
						</p>
					</div>
					<div className="w-[50%]  h-[70%] relative overflow-hidden">
						<img src={HeroImage} alt="" className="w-full h-full" />
						<aside className="absolute h-[72.5%] w-[200px] bg-transparent top-[20%] right-[5.1%] ">
							<img
								className="w-full h-full"
								src="https://lh3.googleusercontent.com/8ayBYCLkFBLVGmRSZwoADC9bqlUfjbpFNvcyuQTz09O1XMatRRY67_JUt0_xez8Y0_QU0oUJMkfbEvdXMxQRUkp702kkG7Q-kax6kSHx0KE3gSKSa6i5=s0"
								alt=""
							/>
						</aside>
					</div>
				</div>
			</section>

			<section className="w-full pt-[30px] relative overflow-hidden">
				<section className="max-w-[1224px] mx-auto w-full h-full">
					<a className="mx-auto flex items-center justify-center flex-col p-3 gap-2 rounded-[3px]" href="#features">
						<p>See what you can do with Docs</p>
						<BsChevronDown size={24} />
					</a>
					<section id="features" className="w-full">
						{features.map((feature: featuresType, index: number) => (
							<HomepageFeature key={index} {...feature} />
						))}
					</section>
				</section>
				<aside className="absolute top-2 right-0">
					<img src="https://lh3.googleusercontent.com/LdYwcT1HsIt_MlYbQvGFff1uRr0QTdnDsKVkD4-PqFR0vaPk5MPPGkjkfJmucjam6QGijZ_vwpn3dDtJp7fQvCxyXClNfu8flxJCk1oss7JijH61IPk=w1024" alt="" />
				</aside>
				<aside className="absolute top-[26%] -left-2 ">
					<img src="https://lh3.googleusercontent.com/-_yE8i04XneR2Xbsn9rOZKnWucDzIY60RDFIJa5Cq2-vs8L3nyvRC5HzHVX-BRNWL9-EIg4lrq5L881cWVaaREb7LxZwxQZoycnKYbt9SlEUk6sA8XY=w1024" alt="" />
				</aside>
				<aside className="absolute top-[55%] -right-2 ">
					<img src="https://lh3.googleusercontent.com/XTMYoa9c1pGX9RpR36coczN6guA-am-pY1NCgZSbl5_Mi2QwhKp7VE--dZGE5QomzRJrfoMtkIw1xLZeDFNDPwSq4RoWsrKQZH7Kk142JfgxO_4gIrA=w1024" alt="" />
				</aside>
			</section>

			<section className="bg-background2 w-full h-auto advantages  py-20 ">
				<div className="max-w-[1224px] mx-auto w-full h-full flex justify-between items-center gap-12">
					{advantages.map((advantage: advantagesType, index: number) => (
						<HomepageAdvantage key={index} {...advantage} />
					))}
				</div>
			</section>

			<section id="security" className=" my-24 relative overflow-hidden">
				<div className="w-full max-w-[1224px] h-full flex flex-col justify-center items-center mx-auto ">
					<h3 className="text-[36px] ">Security, compliance, and privacy</h3>
					<div className="flex items-center justify-between gap-12 my-16">
						<img src={IsoIecImage} alt="" className="w-16 h-16 rounded-full" />
						<img src={SocImage} alt="" className="w-16 h-16 rounded-full" />
						<img src={FrImage} alt="" className="w-16 h-16 rounded-full" />
						<img src={HipaaImage} alt="" className="w-16 h-16 rounded-full" />
					</div>
					<article className="w-full flex items-start justify-between">
						<div className="h-full w-1/2 border-r-[1px] border-border py-4">
							<div className="w-[95%]">
								<article className="mb-8">
									<h3 className="text-xl mb-2">Secure by default</h3>
									<p className="text-desc leading-8">
										We use industry-leading security measures to keep your data safe, including advanced malware protections. Docs is also cloud-native, eliminating the need for
										local files and minimizing risk to your devices.
									</p>
								</article>
								<article className="mb-8">
									<h3 className="text-xl mb-2">Encryption in transit and at rest</h3>
									<p className="text-desc leading-8">All files uploaded to Google Drive or created in Docs are encrypted in transit and at rest.</p>
								</article>
								<article>
									<h3 className="text-xl mb-2">Compliance to support regulatory requirements</h3>
									<p className="text-desc leading-8">
										Our products, including Docs, regularly undergo independent verification of their security, privacy, and
										<a href="" className="text-secondary">
											compliance controls.
										</a>
									</p>
								</article>
							</div>
						</div>
						<div className="h-full w-1/2 py-4 pl-8">
							<div>
								<article className="mb-14">
									<h3 className="text-xl mb-2">Private by design</h3>
									<p className="text-desc leading-8 ">
										Docs adheres to the same robust privacy commitments and data protections as the rest of{" "}
										<a href="" className="text-secondary">
											Google Cloud’s enterprise services.
										</a>
									</p>
								</article>
								<img src={PrivacyIcon} alt="" />
								<p className="pb-4 pt-4 font-medium border-border border-b-[1px]">You control your data.</p>
								<p className="pb-4 pt-4 font-medium border-border border-b-[1px]">We never use your Docs content for ad purposes.</p>
								<p className="pb-4 pt-4 font-medium">We never sell your personal information to third parties.</p>
							</div>
						</div>
					</article>
				</div>
				<aside className="absolute top-0 -left-2 ">
					<img src="https://lh3.googleusercontent.com/yZpn6aefEiMGwAiVZiDDoUjVLMQa1C4okqks_VEOFWBkUURnVS51HeoLqIFKeC_oa5FT_hLRD06a9w8XWfreM26RBSLJQTrZvNny47vCCbC1llYrF7E=w1024" alt="" />
				</aside>
			</section>

			<section className="my-24 " id="plans">
				<div className="w-full mx-auto h-full max-w-[1224px] flex items-center justify-center flex-col">
					<h2 className="text-4xl mb-4">Find the plan that’s right for you</h2>
					<h3 className="text-xl font-medium mb-4">Google Docs is a part of Google Workspace</h3>
					<p className="font-medium text-md">Every plan includes</p>
					<article className="h-[70px]  my-4 flex justify-center gap-6">
						{addedSoftwares.map((software: AddOnsTypes, index: number) => (
							<div key={index}>
								<img src={software.image} alt="" className="block mx-auto mb-2" />
								<p className="text-[12px] text-center">{software.name}</p>
							</div>
						))}
					</article>
					<article className="w-full">
						<section className="w-full h-[270px] flex justify-between ">
							<div className="w-[40%] border-border border-r-[1px] h-full"></div>
							<div className="w-[30%] border-border border-[1px] h-full border-l-0 p-6 flex items-center flex-col">
								<h3 className="text-xl mb-24"> For Personal (Free)</h3>

								<a className="text-secondary flex justify-center items-center px-6 font-medium h-12 rounded-[3px] hover:cursor-pointer border-border hover:border-secondary border-[1px]">
									Go to Docs
								</a>
							</div>
							<div className="w-[30%] border-border border-[1px] h-full border-l-0 p-6 flex items-center flex-col">
								<h3 className="text-xl mb-2">Business Standard</h3>
								<h1 className="text-4xl text-secondary">$12 USD</h1>
								<p className="text-center text-sm text-desc">per user / month, 1 year commitment</p>
								<a className="text-white flex justify-center items-center px-6 font-medium h-12 rounded-[3px] bg-secondary mt-6 mb-4 hover:cursor-pointer">Get Started</a>
								<a
									href="https://workspace.google.com/intl/en/pricing.html?utm_source=docsforwork&utm_medium=et&utm_content=seemoreplans&utm_campaign=pricing"
									target="_blank"
									rel="noreffer"
									className="text-secondary font-medium">
									See more plans
								</a>
							</div>
						</section>
						{planFeatures.map((planFeature: planFeaturesType, index: number) => {
							return (
								<article key={index} className="flex justify-between items-center h-16 border-border border-b-[1px]">
									<div className="w-[40%] h-full border-border border-r-[1px] flex justify-start px-2 items-center">{planFeature.name}</div>
									<div className="w-[30%] h-full border-border border-r-[1px] flex justify-center items-center">
										{typeof planFeature.free === "string" ? (
											<p className="w-[90%] text-center font-medium">{planFeature.free}</p>
										) : (
											<planFeature.free size={24} color={planFeature?.free?.name === "HiOutlineCheck" ? "#185ABC" : "#000000"} />
										)}
									</div>
									<div className="w-[30%] h-full border-border border-r-[1px] flex justify-center items-center">
										{typeof planFeature.paid === "string" ? (
											<p className="w-[90%] text-center font-medium">{planFeature.paid}</p>
										) : (
											<planFeature.paid color={planFeature?.paid?.name === "HiOutlineCheck" ? "#185ABC" : "#000000"} size={24} />
										)}
									</div>
								</article>
							);
						})}
					</article>
				</div>
			</section>

			<section id="collaborate" className="py-24 relative overflow-hidden">
				<div className="w-full h-full max-w-[1224px] mx-auto flex justify-center items-center flex-col">
					<h1 className="text-4xl mb-4">Collaborate from anywhere, on any device</h1>
					<p className="w-[85%] text-desc text-center text-lg">Access, create, and edit your documents wherever you are — from any mobile device, tablet, or computer — even when offline.</p>
					<div className="mt-6 w-full h-12 flex justify-center gap-3 items-center">
						<a href="https://apps.apple.com/app/google-docs-sync-edit-share/id842842640/?l=en" target="_blank" rel="noreferrer">
							<img src={PlayStoreIcon} alt="" />
						</a>
						<a href="https://apps.apple.com/app/google-docs-sync-edit-share/id842842640/?l=en" target="_blank" rel="noreferrer">
							<img src={AppStoreIcon} alt="" />
						</a>
					</div>
				</div>
				<aside className="absolute top-[35%] -right-2 ">
					<img src="https://lh3.googleusercontent.com/hWl6SS7ryc7NY1-OEnUKcLSosWSGWXesIVH-TmBD4AOKVfQL5MzEQuXcy8jFI5NIs2dTftP_J9BpbEJkGiP44CN2YkaRTcZUPVV6M40QLJxPj4WpJI0=w1024" alt="" />
				</aside>
			</section>
			<section id="templates" className="py-24 border-border border-b-[1px]">
				<div className="w-full h-full max-w-[1224px] mx-auto flex justify-center items-center flex-col ">
					<h1 className="text-4xl mb-4">Get a head start with templates</h1>
					<p className="w-[82%] text-desc text-center text-lg">
						Choose from a variety of dashboards, project trackers, and other professionally-designed templates to kick things off quickly.
					</p>
					<div className="w-full h-auto flex justify-center gap-6 items-center mb-12 mt-8">
						{templates.map((template: templateTypes, index: number) => (
							<div key={index} className="">
								<p className="text-center mb-2 font-medium">{template.name}</p>
								<img src={template.image} alt="" />
							</div>
						))}
					</div>

					<p className="font-medium">
						Visit the{" "}
						<a href="https://docs.google.com/document/u/0/?ftv=1&tgif=c" className="text-secondary">
							Docs Template Gallery{" "}
						</a>{" "}
						for more.
					</p>
				</div>
			</section>
			<section id="getStarted" className="py-24 border-border relative overflow-hidden">
				<div className="w-full h-full max-w-[1224px] mx-auto flex justify-center items-center flex-col  ">
					<h1 className="text-4xl mb-4">Ready to get started?</h1>

					<div className="flex justify-center gap-4 mt-6">
						<a
							href="https://workspace.google.com/intl/en/features/?utm_source=docsforwork&utm_medium=et&utm_content=trydocsforwork&utm_campaign=footer"
							target="_blank"
							rel="noreferrer"
							className="px-6 h-12 rounded-[5px] bg-secondary font-medium flex justify-center items-center text-white">
							Try Doc for Work
						</a>
						<a
							href=""
							target="_blank"
							rel="noreferrer"
							className="px-6 h-12 rounded-[5px] text-secondary font-medium border-border border-[1px] hover:border-secondary flex justify-center items-center ">
							Go to Docs
						</a>
					</div>
				</div>
				<aside className="absolute bottom-0 -left-2 ">
					<img src="https://lh3.googleusercontent.com/5ENDQP8kSi6cTdflVOyjCg-zrUJPQ1EfxYKiEkWkwrSNp8TaqrBmFVpKfhOOQ4tM9ST5D7956nobaowYGzlhfUqIEklaJTeOhJnlCmRGrYnoHmHAMv4=w1024" alt="" />
				</aside>
			</section>

			<footer className="bg-background2 w-full h-auto py-12">
				<div className="w-full h-full max-w-[1224px]  mx-auto">
					<article className="flex justify-start items-center gap-6 pb-4 border-b-[1px] border-border">
						<p className="font-medium">
							Follow our{" "}
							<a href="" className="text-secondary">
								Blog
							</a>
						</p>
						<nav className="flex justify-start gap-2">
							<a
								className="w-12 h-12 rounded-full hover:bg-border flex items-center justify-center"
								href="https://www.youtube.com/channel/UCBmwzQnSoj9b6HzNmFrg_yw"
								target="_blank"
								rel="noreferrer">
								<AiFillYoutube size={24} />
							</a>
							<a className="w-12 h-12 rounded-full hover:bg-border flex items-center justify-center" href="https://twitter.com/googledocs" target="_blank" rel="noreferrer">
								<BsTwitter size={24} />
							</a>
							<a className="w-12 h-12 rounded-full hover:bg-border flex items-center justify-center" href="https://www.facebook.com/GoogleDocs/" target="_blank" rel="noreferrer">
								<AiFillFacebook size={24} />
							</a>
						</nav>
					</article>
					<article className="flex justify-between items-center pt-4">
						<div className="flex justify-start items-center gap-12 py-4">
							<a href="" className="text-xl">
								Google
							</a>

							<nav className="flex justify-start  w-auto  gap-6">
								<a className="font-medium" href="https://www.youtube.com/channel/UCBmwzQnSoj9b6HzNmFrg_yw" target="_blank" rel="noreferrer">
									About Google
								</a>
								<a className="font-medium" href="https://twitter.com/googledocs" target="_blank" rel="noreferrer">
									Google Products
								</a>
								<a className="font-medium" href="https://www.facebook.com/GoogleDocs/" target="_blank" rel="noreferrer">
									Privacy
								</a>
								<a className="font-medium" href="https://www.facebook.com/GoogleDocs/" target="_blank" rel="noreferrer">
									Terms
								</a>
							</nav>
						</div>
						<div className="flex justify-start items-center gap-12 py-4  w-[30%]">
							<nav className="flex justify-start  w-full gap-6 ">
								<a className="font-medium" href="https://www.youtube.com/channel/UCBmwzQnSoj9b6HzNmFrg_yw" target="_blank" rel="noreferrer">
									Help
								</a>
								<a className="font-medium" href="https://twitter.com/googledocs" target="_blank" rel="noreferrer">
									English
								</a>
								<button className="ml-auto">
									<AiFillCaretDown />
								</button>
							</nav>
						</div>
					</article>
				</div>
			</footer>
		</>
	);
};

export default Homepage;
