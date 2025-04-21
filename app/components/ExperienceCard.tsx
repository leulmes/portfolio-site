import React from "react";
import Image from "next/image";
import Link from "next/link";
interface ExperienceInfo {
	company: string;
	role: string;
	timeframe: string;
	imageHref: string;
	location: string;
}
const ExperienceCard = ({
	company,
	role,
	timeframe,
	imageHref,
	location,
}: ExperienceInfo) => {
	return (
		<div className="flex justify-center items-center border rounded-3xl border-white w-[95%] h-40">
			<Image
				src={imageHref}
				width={150}
				height={100}
				alt={company}
				className=""
			></Image>
			<div className="text-white font-main">
				<Link href={"https://pandaprogrammer.com/"} rel="noopener noreferrer" target="_blank" className="cursor-pointer hover:underline">
					<h1 className="text-xl">{company}</h1>
				</Link>

				<h2 className="text-base">{role}</h2>
				<h3 className="text-md">{timeframe}</h3>
				<h3 className="text-sm">{location}</h3>
			</div>
		</div>
	);
};

export default ExperienceCard;
