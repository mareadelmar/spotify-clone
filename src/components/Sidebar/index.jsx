import React from "react";
import "./Sidebar.css";
import SidebarOption from "../SidebarOption";

const Sidebar = () => {
	return (
		<section className='sidebar-container'>
			<p>SIDEBAR</p>
			<SidebarOption title='Home' icon='mdi-light:home' />
			<SidebarOption title='Search' icon='mdi-light:magnify' />
			<SidebarOption title='Library' icon='mdi-light:music' />
		</section>
	);
};

export default Sidebar;
