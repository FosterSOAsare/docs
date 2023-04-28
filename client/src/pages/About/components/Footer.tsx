import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";

const Footer = () => {
	return (
		<footer className="bg-background2 w-full h-auto py-12 px-6">
			<div className="w-full h-full max-w-screen-lg  mx-auto">
				<article className="flex justify-start items-start sm:items-center gap-3 sm:gap-6 pb-4 border-b-[1px] border-border flex-col sm:flex-row">
					<p className="font-medium">
						Follow our{" "}
						<a href="" className="text-secondary">
							Blog
						</a>
					</p>
					<nav className="flex justify-start gap-2 ">
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
				<article className="flex justify-between  md:items-center pt-4 flex-col md:flex-row ">
					<div className="flex justify-start flex-col sm:flex-row  sm:items-center gap-6 sm:gap-12 py-4">
						<a href="" className="text-xl">
							Google
						</a>

						<nav className="flex justify-start flex-col sm:flex-row  w-auto  gap-6">
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
					<div className="flex justify-start items-center gap-12 py-4 w-full sm:w-[70%] md:w-[30%]">
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
	);
};

export default Footer;
