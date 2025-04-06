"use client";
import Link from "next/link";
import React from "react";

interface NavLink {
    idx: number;
	title: string;
	href: string;
}
const navLinks: NavLink[] = [
	{ idx: 0, title: "Home", href: "/home" },
	{ idx: 1, title: "Experience", href: "/experience" },
	{ idx: 2, title: "Projects", href: "/projects" },
	{ idx: 3, title: "Contact", href: "/contact" },
];
const DropdownSheet = () => {
    const navItems = navLinks.map((link) => {
        return (<li key={link.idx}><Link href={link.href}>{link.title}</Link></li>);
    });

	return (
		<div className="flex bg-white w-full h-screen items-center justify-center">
			<ul className="flex flex-col gap-3 items-center justify-center">
				{navItems}
			</ul>
		</div>
	);
};

export default DropdownSheet;
