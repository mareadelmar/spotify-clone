import React from "react";
import "./Body.css";
import BodyHeader from "../BodyHeader";
import { useUserData } from "../../context/UserContext";

const Body = () => {
	const [{ discover_weekly }] = useUserData();

	return (
		<section className='body-container'>
			<BodyHeader />

			<div className='body-discover flex'>
				<img
					src={discover_weekly.images[0].url}
					alt=''
					className='discover-img'
				/>
				<div className='discover-text flex flex-column'>
					<p>
						<strong>PLAYLISTS</strong>
					</p>
					<h3>Discover Weekly</h3>
					<p>{discover_weekly?.description}</p>
				</div>
			</div>
		</section>
	);
};

export default Body;
