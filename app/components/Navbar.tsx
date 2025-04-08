"use client";
import React from "react";
import AnimatedBurger from "./MenuButton";
import { activeProps } from "../types";


const Navbar = ({active, setActive}: activeProps) => {
	return (
		<nav className="flex border-b-[0.1px] h-16 border-white justify-end items-center ">
			<AnimatedBurger active={active} setActive={setActive}/>
		</nav>
	);
};

export default Navbar;
