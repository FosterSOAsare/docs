import React from "react";

import features from "../data/Features.data";
import advantages from "../data/Advantages.data";

import HomepageFeature from "../components/HomepageFeature";
import HomepageAdvantage from "../components/HomepageAdvantage.js";

import { AiOutlineMenu } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";

import LogoIcon from "@assets/docs.svg";
import HeroImage from "@assets/hero.png";

const Homepage = () => {
	return (
		<>
			<header className="w-full h-16  flex justify-between items-center px-8 border-b-2 border-border fixed bg-white z-10">
				<div className="flex items-center gap-3 ">
					<button className="w-10 h-10  flex justify-center items-center border-none hover:bg-hover rounded-[4px]">
						<AiOutlineMenu size={18} />
					</button>
					<a className="flex items-center gap-1 text-[20px] hover:bg-hover  p-2 rounded-[5px]" href="/ ">
						<img src={LogoIcon} alt="" />
						<p className="font-medium">Google Docs</p>
					</a>
				</div>
			</header>

			<section className="w-full h-[100vh] px-20 pt-[9vh]">
				<div className="w-full h-full flex items-center justify-between  border-border border-b-[1px]">
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

			<section className="w-full px-20 pt-[30px]">
				<a className="mx-auto flex items-center justify-center flex-col p-3 gap-2 rounded-[3px]" href="#features">
					<p>See what you can do with Docs</p>
					<BsChevronDown size={24} />
				</a>
				<section id="features" className="w-full">
					{features.map((feature: any, index: number) => (
						<HomepageFeature key={index} {...feature} />
					))}
				</section>
			</section>

			<section className="bg-background2 w-full h-auto advantages px-24 py-20 flex justify-between items-center gap-12">
				{advantages.map((advantage: any, index: number) => (
					<HomepageAdvantage key={index} {...advantage} />
				))}
			</section>
		</>
	);
};

export default Homepage;
