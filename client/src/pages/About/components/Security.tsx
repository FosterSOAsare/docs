import React from "react";

import IsoIecImage from "@assets/Badge_ISO_IEC.svg";
import SocImage from "@assets/SOC-badge.svg";
import FrImage from "@assets/FR-badge.svg";
import HipaaImage from "@assets/hipaa-badge.svg";
import PrivacyIcon from "@assets/privacy-icon.svg";

const Security = ({ name }: { name: string }) => {
	return (
		<section id="security" className="my-12 sm:py-16 md:my-24 relative overflow-hidden  px-6 lg:px-12">
			<div className="w-full max-w-screen-lg h-full flex flex-col justify-center items-center mx-auto  ">
				<h3 className="text-3xl md:text-[36px] ">Security, compliance, and privacy</h3>
				<div className="flex items-center justify-between gap-3 sm:gap-12 my-16">
					<img src={IsoIecImage} alt="" className="w-12 sm:w-16 h-12 sm:h-16 rounded-full" />
					<img src={SocImage} alt="" className="w-12 sm:w-16 h-12 sm:h-16 rounded-full" />
					<img src={FrImage} alt="" className="w-12 sm:w-16 h-12 sm:h-16 rounded-full" />
					<img src={HipaaImage} alt="" className="w-12 sm:w-16 h-12 sm:h-16 rounded-full" />
				</div>
				<article className="w-full flex items-start justify-between flex-col sm:flex-row">
					<div className="h-full w-full sm:w-1/2 sm:border-r-[1px] border-border py-4">
						<div className="w-[95%]">
							<article className="mb-8">
								<h3 className="text-xl mb-2">Secure by default</h3>
								<p className="text-desc leading-8">
									We use industry-leading security measures to keep your data safe, including advanced malware protections. Docs is also cloud-native, eliminating the need for local
									files and minimizing risk to your devices.
								</p>
							</article>
							<article className="mb-8">
								<h3 className="text-xl mb-2">Encryption in transit and at rest</h3>
								<p className="text-desc leading-8">All files uploaded to Google Drive or created in {name} are encrypted in transit and at rest.</p>
							</article>
							<article>
								<h3 className="text-xl mb-2">Compliance to support regulatory requirements</h3>
								<p className="text-desc leading-8">
									Our products, including {name}, regularly undergo independent verification of their security, privacy, and{" "}
									<a href="" className="text-secondary">
										compliance controls.
									</a>
								</p>
							</article>
						</div>
					</div>
					<div className="h-full w-full sm:w-1/2 py-4 sm:pl-8">
						<div>
							<article className="mb-14">
								<h3 className="text-xl mb-2">Private by design</h3>
								<p className="text-desc leading-8 ">
									Docs adheres to the same robust privacy commitments and data protections as the rest of{" "}
									<a href="https://cloud.google.com/security/privacy?hl=en" target="_blank" rel="noreferrer" className="text-secondary">
										Google Cloud’s enterprise services.
									</a>
								</p>
							</article>
							<img src={PrivacyIcon} alt="" />
							<p className="pb-4 pt-4 font-medium border-border border-b-[1px]">You control your data.</p>
							<p className="pb-4 pt-4 font-medium border-border border-b-[1px]">We never use your {name} content for ad purposes.</p>
							<p className="pb-4 pt-4 font-medium">We never sell your personal information to third parties.</p>
						</div>
					</div>
				</article>
			</div>
			<aside className="absolute top-0 -left-2 hidden lg:block">
				<img src="https://lh3.googleusercontent.com/yZpn6aefEiMGwAiVZiDDoUjVLMQa1C4okqks_VEOFWBkUURnVS51HeoLqIFKeC_oa5FT_hLRD06a9w8XWfreM26RBSLJQTrZvNny47vCCbC1llYrF7E=w1024" alt="" />
			</aside>
		</section>
	);
};

export default Security;
