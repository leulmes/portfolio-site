"use client";
import Link from "next/link";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { activeProps, activeProps2 } from "../types";

interface NavLink {
	idx: number;
	title: string;
	href: string;
}
const navLinks: NavLink[] = [
	{ idx: 0, title: "Home", href: "#first-section" },
	{ idx: 1, title: "Experience", href: "#second-section" },
	{ idx: 2, title: "Projects", href: "#third-section" },
	{ idx: 3, title: "Contact", href: "#fourth-section" },
];

const navVars = {
	initial: { scaleY: 0 },
	animate: {
		scaleY: 1,
		transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] },
	},
	exit: {
		scaleY: 0,
		transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
	},
};

const navLinkVars = {
	initial: {
		y: "30vh",
		transition: {
			duration: 0.5,
			ease: [0.37, 0, 0.63, 1],
		},
	},
	open: {
		y: 0,
		transition: {
			duration: 0.7,
			ease: [0, 0.55, 0.45, 1],
		},
	},
};

const containerVars = {
	initial: {
		transition: {
			staggerChildren: 0.09,
			staggerDirection: -1,
		},
	},
	open: {
		transition: {
			delayChildren: 0.1,
			staggerChildren: 0.09,
			staggerDirection: 1,
		},
	},
};

const MobileNavLink = ({ title, href, menu, setMenu }: activeProps2) => {
	return (
		<motion.div variants={navLinkVars}>
			<Link href={href} onClick={() => setMenu(!menu)}>{title}</Link>
		</motion.div>
	);
};

const DropdownSheet = ({menu, setMenu}: activeProps) => {
	const navItems = navLinks.map((link) => {
		return (
			<div className="overflow-hidden" key={link.idx}>
				<MobileNavLink title={link.title} href={link.href} menu={menu} setMenu={setMenu}/>
			</div>
		);
	});

	return (
		<motion.nav
			variants={navVars}
			initial="initial"
			animate="animate"
			exit="exit"
			className="flex bg-amber-600 w-full h-full items-center justify-center origin-top"
		>
			<motion.div
				variants={containerVars}
				initial="initial"
				animate="open"
				exit="initial"
				className="flex flex-col gap-3 items-center justify-center overflow-hidden font-main"
			>
				{navItems}
			</motion.div>
		</motion.nav>
	);
};

export default DropdownSheet;
