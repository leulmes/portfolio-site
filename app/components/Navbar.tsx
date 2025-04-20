"use client";
import React from "react";
import AnimatedBurger from "./MenuButton";
import { activeProps } from "../types";

const Navbar = ({menu, setMenu}: activeProps) => {
	return (
		<nav className="flex border-b-[0.1px] h-16 border-white justify-end items-center bg-[#181818] sticky top-0 z-50 ">
			<AnimatedBurger menu={menu} setMenu={setMenu}/>
		</nav>
	);
};

export default Navbar;
