import React from "react";
import "./UserDashboard.css";
import Sidebar from "../Sidebar";
import Body from "../Body";
import Player from "../Player";

// este es el componente que él llama Player
const UserDashboard = () => {
	return (
		<section className='dashboard-container'>
			<Sidebar />
			<Body />
			<Player />

			{/* <SIDEBAR /> --> panel izquierda*/}
			{/* <BODY />  --> main*/}
			{/* <PLAYER /> --> footer */}
		</section>
	);
};

export default UserDashboard;
