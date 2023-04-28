import React from "react";

import { Link } from "react-router-dom";

type HeroTypes = {
	title: string;
	desc: string;
	name: string;
	image: string;
};

const Hero = ({ image, title, desc, name }: HeroTypes) => {
	return (
		<section className="w-full lg:h-[100vh] h-auto pt-[12vh] lg:pt-[9vh] px-6 sm:px-8 lg:px-0 lg:pb-0" id="hero">
			<div className="w-full h-full flex items-center justify-between flex-col lg:flex-row  border-border border-b-[1px]  max-w-screen-lg mx-auto pb-12 lg:pb-0 ">
				<div className="lg:w-[60%] ">
					<h1 className="text-4xl sm:text-[60px] w-full  sm:w-[90%]  mx-auto mb-4   sm:leading-[80px] text-center  lg:text-left">{title}</h1>
					<p className="w-[100%] sm:w-[90%] text-md mx-auto text-center lg:text-left sm:text-lg text-desc p-0">{desc}</p>
					<div className="w-full flex justify-center lg:justify-start lg:pl-8 gap-4 my-12 flex-col sm:flex-row">
						<a
							className="w-3/5 sm:w-auto mx-auto sm:mx-0 h-14 text-lg font-medium bg-secondary flex justify-center items-center rounded-[6px] px-6 sm:px-4 text-white"
							href={`/premium/info`}>
							Try {name} for Work
						</a>
						<Link
							className="w-3/5 sm:w-auto mx-auto sm:mx-0 h-14 text-lg font-medium border-border border-[1px] flex justify-center items-center rounded-[6px] px-6 text-secondary"
							to={`/${name.toLowerCase()}`}>
							Go to {name}
						</Link>
					</div>
					<p className="mx-auto lg:text-left lg:px-8 text-center text-lg text-desc">
						Don't have an account?
						<Link to="/auth/register" className="text-secondary ml-6 font-medium sm:inline block mt-4 sm:mt-0">
							Sign up for free
						</Link>
					</p>
				</div>
				<div className="w-full sm:w-[90%] md:w-[70%]  h-[300px] sm:h-[450px] md:h-[550px] lg:w-[50%] lg:h-[400px]  relative overflow-hidden md:mt-0 mt-[20px]">
					<img src={image} alt="" className="w-full h-full" />
					<aside className="absolute h-[72.5%]  sm:w-[200px] lg:w-[180px] bg-transparent top-[20%] right-[5.1%] ">
						<img
							className="w-full h-full"
							src="https://lh3.googleusercontent.com/8ayBYCLkFBLVGmRSZwoADC9bqlUfjbpFNvcyuQTz09O1XMatRRY67_JUt0_xez8Y0_QU0oUJMkfbEvdXMxQRUkp702kkG7Q-kax6kSHx0KE3gSKSa6i5=s0"
							alt=""
						/>
					</aside>
				</div>
			</div>
		</section>
	);
};

export default Hero;
