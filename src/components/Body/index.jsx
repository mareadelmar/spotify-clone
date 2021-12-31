import React, { useEffect } from "react";
import "./Body.css";
import BodyHeader from "../BodyHeader";
import { useUserData } from "../../context/UserContext";
import { Icon } from "@iconify/react";
//import SongItem from "../SongItem";

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
						<strong>PLAYLIST</strong>
					</p>
					<h3>Discover Weekly</h3>
					<p>{discover_weekly?.description}</p>
				</div>
			</div>

			<div className='body-songs'>
				<div className='songs-icons flex align-center'>
					<Icon icon='bi:play-circle' />
					<Icon icon='bi:heart' />
					<Icon icon='bi:three-dots' />
				</div>

				{/* {discover_weekly?.tracks?.items.map(item => {
					//return <SongItem track={item.track} />;
					console.log("track -->", item.track);
				})} */}
			</div>
		</section>
	);
};

export default Body;
