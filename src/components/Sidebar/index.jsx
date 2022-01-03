import React from "react";
import "./Sidebar.css";
import SidebarOption from "../SidebarOption";
import { useUserData } from "../../context/UserContext";

const Sidebar = () => {
	const [{ playlists }] = useUserData();

	return (
		<section className='sidebar-container'>
			<div className='sidebar-item'>
				<img
					src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
					alt='spotify logo'
					className='logo'
				/>
			</div>
			<div className='sidebar-item'>
				<SidebarOption title='Home' icon='mdi-light:home' id='home' />
				<SidebarOption
					title='Search'
					icon='mdi-light:magnify'
					id='search'
				/>
				<SidebarOption
					title='Library'
					icon='mdi-light:music'
					id='library'
				/>
			</div>
			<div className='sidebar-item'>
				<p>
					<strong className='sidebar-title'>PLAYLISTS</strong>
				</p>
				<hr />
				{playlists &&
					playlists.map(item => {
						return <SidebarOption title={item.name} id={item.id} />;
					})}
			</div>
		</section>
	);
};

export default Sidebar;
