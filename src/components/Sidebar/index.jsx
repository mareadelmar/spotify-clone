import React from "react";
import "./Sidebar.css";
import SidebarOption from "../SidebarOption";
import { useUserData } from "../../context/UserContext";

const Sidebar = () => {
	const [{ playlists }] = useUserData();
	console.log("sidebar -->", playlists);

	return (
		<section className='sidebar-container'>
			<div className='sidebar-item'>
				<p>SIDEBAR</p>
				<img
					src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
					alt='spotify logo'
					className='logo'
				/>
			</div>
			<div className='sidebar-item'>
				<SidebarOption title='Home' icon='mdi-light:home' />
				<SidebarOption title='Search' icon='mdi-light:magnify' />
				<SidebarOption title='Library' icon='mdi-light:music' />
			</div>
			<div className='sidebar-item'>
				<p>
					<strong className='sidebar-title'>PLAYLISTS</strong>
					<hr />
					{playlists &&
						playlists?.items.map(item => {
							return <SidebarOption title={item.name} />;
						})}
				</p>
			</div>
		</section>
	);
};

export default Sidebar;
