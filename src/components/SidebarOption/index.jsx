import React from "react";
import "./SidebarOption.css";
import { Icon } from "@iconify/react";

const SidebarOption = ({ title, icon }) => {
	return (
		<div className='sidebarOption-container'>
			{icon ? (
				<>
					<Icon icon={icon} className='sidebarOption-icon' />
					<h4>{title}</h4>
				</>
			) : (
				<p>{title}</p>
			)}
		</div>
	);
};

export default SidebarOption;
